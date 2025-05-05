"use client";

import { useState, useEffect, useRef } from "react";
import { supabase } from "@/utils/supabaseClient";

const TIMEOUT_MS = 30 * 60 * 1000; // 30 phút

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("choice");
  const [sessionId, setSessionId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();

  // 1) Khi mount, kiểm tra session cũ + timeout
  useEffect(() => {
    const storedId = localStorage.getItem("chat_session_id");
    const storedTs = localStorage.getItem("chat_session_ts");
    if (storedId && storedTs && Date.now() - Number(storedTs) < TIMEOUT_MS) {
      setSessionId(storedId);
    } else {
      localStorage.removeItem("chat_session_id");
      localStorage.removeItem("chat_session_ts");
    }
  }, []);

  // 2) Load + subscribe realtime khi vào chat
  useEffect(() => {
    if (step !== "chat" || !sessionId) return;

    supabase
      .from("messages")
      .select("*")
      .eq("session_id", sessionId)
      .order("created_at", { ascending: true })
      .then(({ data }) => {
        setMessages(data);
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      });

    const channel = supabase
      .channel("chat_channel")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `session_id=eq.${sessionId}`,
        },
        ({ new: m }) => {
          setMessages((prev) => [...prev, m]);
          scrollRef.current?.scrollIntoView({ behavior: "smooth" });
        }
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [step, sessionId]);

  // 3) Khách chọn chat guest → tạo mới session
  const handleGuestChoice = () => {
    const id = window.crypto.randomUUID();
    localStorage.setItem("chat_session_id", id);
    localStorage.setItem("chat_session_ts", Date.now().toString());
    setSessionId(id);
    setStep("form");
  };

  // 4) Submit form → gửi greeting
  const handleStartGuest = async (e) => {
    e.preventDefault();
    setStep("chat");
    await supabase.from("messages").insert([
      {
        session_id: sessionId,
        name: "Phương Quỳnh Makeup",
        phone,
        age: age || null,
        message: `Xin chào ${name}, mình có thể giúp gì cho bạn?`,
        role: "admin",
      },
    ]);
  };

  // 5) Gửi tin nhắn của khách
  const sendMessage = async () => {
    if (!message.trim()) return;
    await supabase.from("messages").insert([
      {
        session_id: sessionId,
        name,
        phone,
        age: age || null,
        message: message.trim(),
        role: "guest",
      },
    ]);
    setMessage("");
  };

  return (
    <>
      {/* Nút Chat góc phải */}
      <button
        onClick={() => {
          setOpen(true);
          setStep("choice");
        }}
        className="fixed bottom-6 right-6 z-50 animate-shake-glow bg-[var(--color-accent)] p-4 rounded-full shadow-lg"
      >
        💬
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-80 h-[40vh] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-[var(--color-accent)] text-black font-semibold">
            <span>Chat Hỗ Trợ</span>
            <button
              onClick={() => setOpen(false)}
              className="text-xl leading-none"
            >
              ✕
            </button>
          </div>

          {/* Step 1: Choice */}
          {step === "choice" && (
            <div className="flex-1 flex flex-col items-center justify-center p-4 gap-2">
              <button
                onClick={handleGuestChoice}
                className="w-full py-2 bg-[var(--color-accent)] text-black rounded-lg"
              >
                Chat với Guest
              </button>
              <button
                onClick={() => {
                  window.open("https://m.me/1851922904818709", "_blank");
                  setOpen(false);
                }}
                className="w-full py-2 bg-blue-600 text-white rounded-lg"
              >
                Mở Messenger
              </button>
            </div>
          )}

          {/* Step 2: Form */}
          {step === "form" && (
            <form
              onSubmit={handleStartGuest}
              className="flex-1 flex flex-col p-4 gap-2 overflow-auto"
            >
              <input
                type="text"
                placeholder="Tên của bạn"
                className="border p-2 rounded-lg text-black"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Số điện thoại"
                className="border p-2 rounded-lg text-black"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="number"
                placeholder="Tuổi (tùy chọn)"
                className="border p-2 rounded-lg text-black"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <button
                type="submit"
                className="mt-auto py-2 bg-[var(--color-accent)] text-black rounded-lg"
              >
                Bắt đầu Chat
              </button>
            </form>
          )}

          {/* Step 3: Chat */}
          {step === "chat" && (
            <>
              <div className="flex-1 overflow-auto px-3 py-2 space-y-2 scrollbar-thin scrollbar-thumb-[var(--color-accent)]">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      m.role === "guest" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] p-2 rounded-lg ${
                        m.role === "guest"
                          ? "bg-[var(--color-accent)] text-black"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      <p className="text-xs text-gray-600 mb-1">
                        {m.role === "admin" ? "Phương Quỳnh Makeup" : name}
                      </p>
                      <p className="text-sm">{m.message}</p>
                    </div>
                  </div>
                ))}
                <div ref={scrollRef} />
              </div>

              <div className="flex-none p-2 border-t flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Nhập tin nhắn..."
                  className="flex-1 border p-2 rounded-lg text-black focus:ring-2 focus:ring-[var(--color-accent)]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && (e.preventDefault(), sendMessage())
                  }
                />
                <button
                  onClick={sendMessage}
                  className="px-3 py-2 bg-[var(--color-accent)] rounded-lg text-black"
                >
                  Gửi
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
