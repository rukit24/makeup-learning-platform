// /components/CallButton.js
"use client";

import { PhoneIcon } from "@heroicons/react/24/solid";

export default function CallButton() {
  return (
    <a href="tel:0397161105" className="fixed bottom-6 left-6 z-50 group">
      <div className="relative">
        {/* Hiệu ứng gợn sóng */}
        <span className="absolute inset-0 rounded-full bg-yellow-400 opacity-30 group-hover:opacity-50 animate-ping"></span>
        {/* Icon điện thoại */}
        <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-[var(--color-accent)] text-black animate-shake-glow hover:scale-110 transition-transform">
          <PhoneIcon className="w-8 h-8" />
        </div>
        {/* Số điện thoại trượt ra + nổi bật */}
        <div
          className="absolute left-full ml-3 top-1/2 -translate-y-1/2
          bg-[#ffd700] text-black text-sm font-bold rounded px-3 py-1
          opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-300 shadow-lg drop-shadow-md whitespace-nowrap"
        >
          0397161105
        </div>
      </div>
    </a>
  );
}
