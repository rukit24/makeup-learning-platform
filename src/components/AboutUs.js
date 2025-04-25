"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="relative w-full h-[420px] sm:h-[500px] md:h-[650px] lg:h-[720px] overflow-hidden">
      {/* Ảnh nền B&W */}
      <Image
        src="/AboutUs.png"
        alt="Makeup Artist Việt Nam"
        fill
        className="object-cover grayscale"
        priority
      />

      {/* Lớp phủ tối nhẹ hơn trên mobile, đậm dần trên desktop */}
      <div className="absolute inset-0 bg-black/30 sm:bg-black/40 md:bg-black/60 backdrop-blur-[2px]" />

      {/* Box thông tin */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          absolute top-1/2 -translate-y-1/2
          left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 md:left-12 lg:left-16
          z-10
          w-[92%] sm:w-[80%] md:w-[55%] lg:w-[45%]
          bg-black/40 sm:bg-black/60 md:bg-black/70 backdrop-blur-md
          px-4 sm:px-6 md:px-8 lg:px-10
          py-5 sm:py-7 md:py-10
          shadow-lg md:shadow-xl shadow-black/50
          border border-[#dcc99a55] sm:border-2 md:border-4 rounded-md
        "
      >
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-[var(--color-primary)]">
          Về Chúng Tôi
        </h2>

        <p className="font-caption-ita text-champagne text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
          Phương Quỳnh Bridal Makeup Academy là nơi hội tụ đam mê và kỹ thuật
          trang điểm hiện đại. Chúng tôi kiến tạo không gian học tập đầy cảm
          hứng, thực hành trực tiếp cùng chuyên gia hàng đầu Việt Nam.
          <br className="hidden md:block" />
          Sứ mệnh của chúng tôi là giúp bạn tự tin tỏa sáng và tạo nên dấu ấn
          riêng trong ngành làm đẹp.
        </p>
      </motion.div>
    </section>
  );
}
