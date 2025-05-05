"use client";

import { useState, useEffect, useRef } from "react";
import { supabase } from "@/utils/supabaseClient";
import { useRouter } from "next/navigation";

export default function AdminChatPanel() {
  const [sessions, setSessions] = useState([]);
  const [currentSession, setCurrentSession] = useState(null);
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState("");
  const scrollRef = useRef();
  const router = useRouter();

  // 1) Kiểm tra login
  useEffect(() => {
    if (sessionStorage.getItem("isAdmin") !== "true") {
      router.push("/admin-login");
      return;
    }
    loadSessions();
  }, []);

  // 2) Load và sort sessions
  async function loadSessions() {
    const { data, error } = await supabase
      .from("messages")
      .select("session_id, name, phone, age, created_at, role")
      .order("created_at", { ascending: true });
    if (error) return console.error(error);

    const map = new Map();
    data.forEach((m) => {
      if (!map.has(m.session_id)) {
        map.set(m.session_id, {
          session_id: m.session_id,
          adminName: m.name,
          phone: m.phone,
          age: m.age,
          started_at: m.created_at,
          guestName: null,
        });
      }
      if (m.role === "guest" && !map.get(m.session_id).guestName) {
        map.get(m.session_id).guestName = m.name;
      }
    });

    const arr = Array.from(map.values()).map((e) => ({
      session_id: e.session_id,
      name: e.guestName || `Guest-${e.session_id.slice(0, 8)}`,
      phone: e.phone,
      age: e.age,
      started_at: e.started_at,
    }));

    arr.sort((a, b) => new Date(b.started_at) - new Date(a.started_at));
    setSessions(arr);
  }

  // 3) Chọn session → load + subscribe realtime
  useEffect(() => {
    if (!currentSession) return;

    supabase
      .from("messages")
      .select("*")
      .eq("session_id", currentSession.session_id)
      .order("created_at", { ascending: true })
      .then(({ data }) => {
        setMessages(data);
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      });

    const chan = supabase
      .channel("admin_channel")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `session_id=eq.${currentSession.session_id}`,
        },
        ({ new: m }) => {
          setMessages((prev) => [...prev, m]);
          scrollRef.current?.scrollIntoView({ behavior: "smooth" });
        }
      )
      .subscribe();
    return () => supabase.removeChannel(chan);
  }, [currentSession]);

  // 4) Gửi reply
  const sendReply = async () => {
    if (!reply.trim() || !currentSession) return;
    await supabase.from("messages").insert([
      {
        session_id: currentSession.session_id,
        name: "Phương Quỳnh Makeup",
        phone: "",
        age: null,
        message: reply.trim(),
        role: "admin",
      },
    ]);
    setReply("");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-4 overflow-auto border-r">
        <h2 className="font-heading text-xl font-semibold mb-4">
          Các phiên đã bật
        </h2>
        {sessions.map((s) => {
          const active = currentSession?.session_id === s.session_id;
          return (
            <div
              key={s.session_id}
              onClick={() => setCurrentSession(s)}
              className={`p-3 mb-2 rounded-lg cursor-pointer transition ${
                active
                  ? "bg-[var(--color-accent)] text-black"
                  : "hover:bg-gray-100 text-gray-800"
              }`}
            >
              <p className="font-medium">{s.name}</p>
              <p className="text-sm">SĐT: {s.phone || "—"}</p>
              <p className="text-sm">Tuổi: {s.age ?? "—"}</p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(s.started_at).toLocaleString()}
              </p>
            </div>
          );
        })}
      </aside>

      {/* Chat Panel */}
      <main className="flex-1 bg-gradient-to-tr from-[#ff8000] via-[#ff3d9a] to-[#7000ff] h-screen flex flex-col">
        {/* Header – cố định */}
        {currentSession && (
          <div className="h-[60px] shrink-0 px-6 py-3 bg-white bg-opacity-90 shadow flex justify-between items-center">
            <h1 className="text-xl font-heading text-black">
              {currentSession.name}
            </h1>
            <span className="text-sm text-black opacity-90">
              Bắt đầu: {new Date(currentSession.started_at).toLocaleString()}
            </span>
          </div>
        )}

        {/* Message list – cuộn riêng */}
        <div className="flex-1 overflow-y-auto px-4 py-2 bg-white bg-opacity-90 space-y-2">
          {currentSession ? (
            <>
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${
                    m.role === "guest" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] px-4 py-2 rounded-lg ${
                      m.role === "admin"
                        ? "bg-[var(--color-accent)] text-black"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    <p className="text-xs text-gray-500 mb-1">
                      {m.role === "admin"
                        ? "Phương Quỳnh Makeup"
                        : currentSession.name}
                    </p>
                    <p className="text-sm">{m.message}</p>
                  </div>
                </div>
              ))}
              <div ref={scrollRef} />
            </>
          ) : (
            <div className="h-full flex items-center justify-center text-white text-lg">
              Vui lòng chọn một phiên chat bên trái
            </div>
          )}
        </div>

        {/* Footer – cố định */}
        {currentSession && (
          <div className="h-[60px] shrink-0 px-4 py-2 bg-white flex gap-2 items-center">
            <input
              type="text"
              placeholder="Nhập phản hồi..."
              className="flex-1 border p-2 rounded-lg bg-gray-100 text-black placeholder-gray-500 focus:ring-2 focus:ring-[var(--color-accent)]"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && (e.preventDefault(), sendReply())
              }
            />
            <button
              onClick={sendReply}
              className="px-4 py-2 bg-[var(--color-accent)] rounded-lg text-black"
            >
              Gửi
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
