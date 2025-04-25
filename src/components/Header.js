"use client";

import { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="bg-[var(--color-surface)] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="MyBrand Logo"
            width={150}
            height={50}
            className="w-24 sm:w-32 md:w-36 lg:w-40 h-auto"
            priority
          />
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 font-heading text-xs sm:text-sm md:text-base lg:text-lg font-bold">
          <a href="/trang-chu" className="hover:text-[var(--color-accent)]">
            Trang chủ
          </a>
          <a href="/san-pham" className="hover:text-[var(--color-accent)]">
            Sản phẩm dịch vụ
          </a>
          <a href="/makeup" className="hover:text-[var(--color-accent)]">
            Khóa học
          </a>
          <a href="/presets" className="hover:text-[var(--color-accent)]">
            Liên hệ
          </a>
          <a href="/khoa-hoc" className="hover:text-[var(--color-accent)]">
            Khóa học của tôi
          </a>
        </nav>

        {/* Auth button on desktop */}
        <div className="hidden md:flex">
          <a
            href="/dang-nhap"
            className="bg-[var(--color-accent)] text-black px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded hover:brightness-110 transition text-xs sm:text-sm md:text-base"
          >
            Đăng nhập
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="p-2 text-white bg-[var(--color-accent)] rounded hover:bg-opacity-90 transition"
            aria-label="Toggle navigation"
          >
            {navOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {navOpen && (
        <div className="md:hidden bg-[var(--color-surface)] shadow-lg">
          <nav className="flex flex-col space-y-2 py-4 px-4 font-heading text-sm sm:text-base md:text-lg font-bold">
            <a href="/trang-chu" className="hover:text-[var(--color-accent)]">
              Trang chủ
            </a>
            <a href="/san-pham" className="hover:text-[var(--color-accent)]">
              Sản phẩm dịch vụ
            </a>
            <a href="/makeup" className="hover:text-[var(--color-accent)]">
              Khóa học
            </a>
            <a href="/presets" className="hover:text-[var(--color-accent)]">
              Liên hệ
            </a>
            <a href="/khoa-hoc" className="hover:text-[var(--color-accent)]">
              Khóa học của tôi
            </a>
            <a
              href="/dang-nhap"
              className="mt-2 bg-[var(--color-accent)] text-black px-4 py-2 rounded hover:brightness-110 transition text-base text-center"
            >
              Đăng nhập
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
