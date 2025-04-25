"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 1.3, staggerChildren: 0.6 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  useEffect(() => {
    const vDesktop = desktopVideoRef.current;
    const vMobile = mobileVideoRef.current;
    if (vDesktop) {
      vDesktop.muted = true;
      vDesktop.play().catch(() => {});
    }
    if (vMobile) {
      vMobile.muted = true;
      vMobile.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video desktop (ngang) */}
      <video
        ref={desktopVideoRef}
        className="hidden sm:block absolute inset-0 w-full h-full object-cover object-center z-0 filter brightness-40"
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

      {/* Video mobile (dọc) */}
      <video
        ref={mobileVideoRef}
        className="block sm:hidden absolute inset-0 w-full h-full object-cover object-center z-0 filter brightness-60"
        src="/ads-video/hero-vertical.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/ads-video/hero-poster.jpg"
      >
        <source src="/ads-video/hero-vertical.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Nội dung */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-8 lg:px-12 text-white"
      >
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6 md:mb-8">
          <Image
            src="/logo.png"
            alt="Phương Quỳnh Logo"
            width={240}
            height={100}
            className="w-32 sm:w-40 md:w-48 lg:w-60 h-auto mx-auto"
            priority
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--color-secondary)] max-w-xs sm:max-w-md md:max-w-lg mb-6 sm:mb-8"
        >
          Học makeup cá nhân & chuyên nghiệp – hiện đại, cảm hứng, sáng tạo.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-6"
        >
          <a
            href="/khoa-hoc-cua-toi"
            className="px-4 py-2 sm:px-6 sm:py-3 border border-white text-white rounded hover:bg-white hover:text-black transition text-sm sm:text-base"
          >
            KHÓA HỌC CỦA TÔI
          </a>
          <a
            href="/dang-ky"
            className="px-4 py-2 sm:px-6 sm:py-3 bg-[var(--color-accent)] text-black font-bold rounded hover:brightness-110 transition text-sm sm:text-base"
          >
            ĐĂNG KÝ HỌC
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
