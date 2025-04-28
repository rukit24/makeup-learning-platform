"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] text-[var(--color-primary)] py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-8">
        {/* ── Cột 1: Logo + Thông tin liên hệ ── */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/logo.png"
            alt="PQ Makeup Logo"
            width={200}
            height={200}
            priority
          />
          <h3 className="font-heading text-xl mt-4">Phương Quỳnh Makeup</h3>
          <p className="mt-2 text-sm leading-relaxed">
            CS1: Số 2G, Khu TT Dệt, Ao Sen, Hà Đông, Hà Nội
            <br />
            Fanpage:{" "}
            <a
              href="https://www.facebook.com/phuongquynhmakeup"
              className="underline hover:text-[var(--color-accent)]"
            >
              fb.com/phuongquynhmakeup
            </a>
            <br />
            Email:{" "}
            <a
              href="mailto:phuongquynh261096@gmail.com"
              className="underline hover:text-[var(--color-accent)]"
            >
              lienhe@pqmakeup
            </a>
            <br />
            Hotline: 0374.346.162 – 0397.161.105
          </p>
        </div>

        {/* ── Cột 2: Quick Links ── */}
        <div className="md:w-1/3 grid grid-cols-2 gap-4 text-center md:text-left">
          <ul className="space-y-2">
            <li>
              <Link
                href="/khoa-hoc"
                className="hover:text-[var(--color-accent)]"
              >
                Khóa học chuyên nghiệp
              </Link>
            </li>
            <li>
              <Link
                href="/khoa-hoc-ca-nhan"
                className="hover:text-[var(--color-accent)]"
              >
                Khóa học cá nhân
              </Link>
            </li>
            <li>
              <Link
                href="/khoa-hoc-co-dau"
                className="hover:text-[var(--color-accent)]"
              >
                Khóa học cô dâu
              </Link>
            </li>
            <li>
              <Link
                href="/makeup-du-tiec"
                className="hover:text-[var(--color-accent)]"
              >
                Trang điểm dự tiệc
              </Link>
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)]">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link
                href="/gioi-thieu"
                className="hover:text-[var(--color-accent)]"
              >
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link
                href="/cam-nhan"
                className="hover:text-[var(--color-accent)]"
              >
                Cảm nhận khách hàng
              </Link>
            </li>
            <li>
              <Link
                href="/lien-he"
                className="hover:text-[var(--color-accent)]"
              >
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>

        {/* ── Cột 3: Social Icons (kích thước to, animation tự chạy) ── */}
        <div className="md:w-1/3 flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="font-heading text-xl mb-4">KẾT NỐI VỚI CHÚNG TÔI</h3>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/phuongquynhmakeup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl md:text-5xl text-[var(--color-accent)] animate-shake-zoom"
            >
              <FaFacebook />
            </a>
            <a
              href="https://youtube.com/…"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl md:text-5xl text-[var(--color-accent)] animate-shake-zoom"
            >
              <FaYoutube />
            </a>
            <a
              href="https://tiktok.com/@tinalemakeup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl md:text-5xl text-[var(--color-accent)] animate-shake-zoom"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm opacity-50">
        © {new Date().getFullYear()} Powered by Finn
      </div>
    </footer>
  );
}
