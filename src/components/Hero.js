"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // ← import Framer Motion

// 1) Các biến variant để cấu hình animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // Thời gian delay trước khi children bắt đầu animate
      delayChildren: 1.3,
      // Thời gian giữa các lần animate của từng child
      staggerChildren: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      // Thời gian animate cho mỗi item
      duration: 0.6,
      // Tốc độ (easing) của animation: “easeOut” mượt, không gắt
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video nền */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-center z-0 filter brightness-30 contrast-110 saturate-105"
        src="/ads-video/hero-2.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/ads-video/hero-poster.jpg"
      >
        <source src="/ads-video/hero-2.mp4" type="video/mp4" />
        <source src="/ads-video/hero-2.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (bỏ tạm để tập trung animation) */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-20 z-10" /> */}

      {/* Nội dung với Framer Motion */}
      <motion.div
        // 2) Gán variants và trạng thái initial/animate
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white"
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="mb-6">
          <Image
            src="/logo.png"
            alt="Phương Quỳnh Logo"
            width={480}
            height={200}
            priority
          />
        </motion.div>

        {/* Mô tả */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-[var(--color-secondary)] max-w-2xl mb-8"
        >
          Học makeup cá nhân &amp; chuyên nghiệp – hiện đại, cảm hứng, sáng tạo.
        </motion.p>

        {/* Nút CTA */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="/khoa-hoc-cua-toi"
            className="px-6 py-3 border border-white text-white rounded hover:bg-white hover:text-black transition"
          >
            KHÓA HỌC CỦA TÔI
          </a>
          <a
            href="/dang-ky"
            className="px-6 py-3 bg-[var(--color-accent)] text-black font-bold rounded hover:brightness-110 transition"
          >
            ĐĂNG KÝ HỌC
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
