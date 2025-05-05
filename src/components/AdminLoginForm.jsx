// src/components/AdminLoginForm.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginForm() {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");
    if (pw === "Matkhau@123") {
      sessionStorage.setItem("isAdmin", "true");
      router.push("/admin-dashboard");
    } else {
      setErr("Sai mật khẩu! Vui lòng thử lại.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#ff8000] via-[#ff3d9a] to-[#7000ff]">
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-heading font-bold mb-6 text-center text-gray-800">
          🔒 Đăng nhập Quản lý
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Nhập mật khẩu quản lý"
            className="w-full border border-gray-300 bg-gray-100 text-black p-3 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] placeholder-gray-500"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-[var(--color-accent)] text-black py-3 rounded font-semibold hover:brightness-110 transition"
          >
            Đăng nhập
          </button>
          {err && <p className="text-red-600 text-sm text-center">{err}</p>}
        </form>
      </div>
    </div>
  );
}
