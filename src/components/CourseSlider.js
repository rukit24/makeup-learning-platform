"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

/* Danh sách khóa học (có thể cập nhật tại đây) */
const courses = [
  {
    title: "MAKEUP CÁ NHÂN",
    caption: "Phong cách tự nhiên – trang điểm hằng ngày",
    image: "/courses/canhan.png",
  },
  {
    title: "NÂNG CAO 1",
    caption: "Bắt kịp xu hướng makeup 2025",
    image: "/courses/nangcao1.png",
  },
  {
    title: "NÂNG CAO 2",
    caption: "Chuyên sâu cô dâu & photoshoot",
    image: "/courses/nangcao2.png",
  },
  {
    title: "CẤP TỐC",
    caption: "Thành thạo sau 2 tuần thực chiến",
    image: "/courses/captoc.png",
  },
  {
    title: "CHUYÊN ĐỀ PRO",
    caption: "Dành cho chuyên gia nâng cấp kỹ thuật",
    image: "/courses/chuyendepro.png",
  },
];

export default function CourseSlider() {
  return (
    <section className="py-14 bg-[var(--color-surface)]">
      {/* Tiêu đề */}
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10 text-[var(--color-primary)]">
        CÁC KHÓA ĐÀO TẠO MAKE UP
      </h2>

      <div className="relative max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{ nextEl: ".btn-next", prevEl: ".btn-prev" }}
          className="pb-8"
        >
          {courses.map((c, i) => (
            <SwiperSlide key={i}>
              {/* Card */}
              <div className="group overflow-hidden rounded-lg shadow-md">
                {/* Ảnh (zoom nhẹ) */}
                <Image
                  src={c.image}
                  alt={c.title}
                  width={400}
                  height={550}
                  className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Caption đè lên ảnh */}
                <div className="absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-md py-4 px-3 text-center">
                  <h3 className="font-caption text-champagne text-lg md:text-2xl font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
                    {c.title}
                  </h3>
                  <p className="font-caption text-champagne text-sm md:text-base drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                    {c.caption}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Nút điều hướng trái */}
          <button className="btn-prev absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-[var(--color-accent)] transition">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24">
              <path
                d="M15 18l-6-6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>

          {/* Nút điều hướng phải */}
          <button className="btn-next absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-[var(--color-accent)] transition">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24">
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </Swiper>
      </div>
    </section>
  );
}
