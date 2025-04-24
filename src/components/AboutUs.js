// src/components/AboutUs.js
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="relative w-full h-[650px] md:h-[720px] overflow-hidden">
      {/* ------------- ẢNH NỀN B&W ------------- */}
      <Image
        src="/AboutUs.png"
        alt="Makeup Artist Việt Nam"
        fill
        className="object-cover grayscale"
        priority
      />

      {/* Phủ tối toàn màn hình */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* ------------- BOX THÔNG TIN ------------- */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          absolute top-1/2 -translate-y-1/2   /* lơ lửng giữa chiều cao */
          left-12                               /* cách mép trái 2rem → sửa left-* */
          z-10 w-[90%] md:w-[40%] lg:w-[45%]   /* chiều rộng box */
          bg-black/70 backdrop-blur-md
          px-8 py-10
          shadow-xl shadow-black/50
          border-4 rounded-md
          [border-image:linear-gradient(135deg,#dcc99a,#dcc99a22)1]  /* gradient viền */
        "
      >
        {/* ----- Nội dung ----- */}
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-8 text-[var(--color-primary)]">
          Về&nbsp;Chúng&nbsp;Tôi
        </h2>

        <p className="font-caption-ita text-champagne text-base md:text-lg leading-loose">
          Phương Quỳnh Bridal&nbsp;Makeup&nbsp;Academy là nơi hội tụ đam mê và
          kỹ thuật trang điểm hiện&nbsp;đại. Chúng tôi kiến&nbsp;tạo không gian
          học tập đầy cảm&nbsp;hứng, thực hành trực tiếp cùng chuyên gia hàng
          đầu Việt&nbsp;Nam. <br className="hidden md:block" />
          Sứ mệnh của chúng tôi là giúp bạn tự tin tỏa sáng và tạo nên
          dấu&nbsp;ấn riêng trong ngành&nbsp;làm&nbsp;đẹp.
        </p>
      </motion.div>
    </section>
  );
}
