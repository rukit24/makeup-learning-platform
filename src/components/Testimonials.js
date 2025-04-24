"use client";

import {
  StarIcon,
  HeartIcon,
  AcademicCapIcon,
  UserGroupIcon,
  SignalIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

/* --------- FAKE REVIEWS (18) --------- */
const reviews = [
  {
    name: "Lan Phương",
    role: "Cô dâu",
    rating: 5,
    text: "Makeup cực tự nhiên, lên hình xinh vô cùng! Cảm ơn ekip vì đã chăm chút từng chi tiết nhỏ trong ngày cưới của mình.",
  },
  {
    name: "Mai Chi",
    role: "Khách đi tiệc",
    rating: 4,
    text: "Trang điểm đúng gu, giữ được suốt buổi tiệc. Sẽ quay lại ủng hộ!",
  },
  {
    name: "Ngọc Ánh",
    role: "Học viên cấp tốc",
    rating: 5,
    text: "2 tuần học mà mình đã tự tin tự makeup đi làm hằng ngày. Giáo viên cực kỳ tận tâm, chỉnh tay cho từng bạn.",
  },
  {
    name: "Hồng Nhung",
    role: "Chị cô dâu",
    rating: 5,
    text: "Tone cam đào nhẹ nhàng, không hề bị dày. Mọi người khen suốt buổi!",
  },
  {
    name: "Minh Thư",
    role: "Mẹ cô dâu",
    rating: 4,
    text: "Che khuyết điểm rất tốt, nhưng hơi lâu mới xong. Dù vậy mình vẫn hài lòng.",
  },
  {
    name: "Trâm Anh",
    role: "Makeup Artist học lại",
    rating: 5,
    text: "Khoá nâng cao đi thẳng vào thực hành, demo kỹ thuật trendy năm nay. Giá trị nhận được xứng đáng từng đồng học phí!",
  },
  {
    name: "Bích Ngọc",
    role: "Học viên Pro",
    rating: 5,
    text: "Giáo trình rõ ràng, được thực hành với model thật. Sau khoá mình nhận job ngay!",
  },
  {
    name: "Diễm My",
    role: "Học viên online",
    rating: 4,
    text: "Video bài giảng chi tiết, có bài tập quay lại nên dễ theo sát.",
  },
  {
    name: "Thanh Lam",
    role: "Khách tiệc cưới",
    rating: 5,
    text: "Đặt lịch gấp vẫn sắp xếp được, makeup xinh hết nấc.",
  },
  {
    name: "Thảo Vy",
    role: "Makeup đi sự kiện",
    rating: 4,
    text: "Concept khá mới, tuy nhiên son hơi trôi cuối buổi.",
  },
  {
    name: "Hoàng Yến",
    role: "Stylist",
    rating: 5,
    text: "Hợp tác ekip rất chuyên nghiệp, màu da lên sân khấu chuẩn ánh đèn.",
  },
  {
    name: "Gia Hân",
    role: "Cô dâu",
    rating: 5,
    text: "Tóc + makeup combo quá ưng ý, giá tốt hơn nơi khác.",
  },
  {
    name: "Khánh Ngọc",
    role: "Khách photoshoot",
    rating: 5,
    text: "Da mình khó nhưng vẫn xử lý mịn màng. Retouch hậu kỳ gần như không cần.",
  },
  {
    name: "Tú Anh",
    role: "Học viên trial",
    rating: 4,
    text: "Thầy cô hỗ trợ xuyên suốt, feedback bài tập mỗi ngày.",
  },
  {
    name: "Lan Phương",
    role: "Cô dâu",
    rating: 5,
    text: "Makeup cực tự nhiên, lên hình xinh vô cùng! Cảm ơn ekip vì đã chăm chút từng chi tiết nhỏ trong ngày cưới của mình, từ kiểu tóc tới phụ kiện đều được mix tinh tế.",
  },
  {
    name: "Minh Khuê",
    role: "Khách khai trương",
    rating: 5,
    text: "Lần đầu trang điểm chuyên nghiệp mà mình cảm thấy tự tin suốt 10 giờ sự kiện. Nhân viên chu đáo, còn hướng dẫn mình giữ lớp nền không trôi.",
  },
  {
    name: "Khánh Ngọc",
    role: "Khách photoshoot",
    rating: 4,
    text: "Da mình khó nhưng vẫn xử lý mịn màng. Retouch hậu kỳ gần như không cần. Concept khá mới, tuy nhiên son hơi trôi cuối buổi, mong academy khắc phục.",
  },
  {
    name: "Đan Thư",
    role: "Học viên cá nhân",
    rating: 4,
    text: "Khoá cá nhân 6 buổi nhưng kiến thức siêu dày! Giảng viên kèm tay chỉ từng lỗi cọ và bố cục ánh sáng. Mình áp dụng makeup cho khách ngay tuần sau và nhận feedback tốt.",
  },
];

/* --------- “Con số biết nói” --------- */
const kpis = [
  { icon: HeartIcon, value: "10+", label: "Năm kinh nghiệm" },
  { icon: AcademicCapIcon, value: "28+", label: "Khóa đào tạo" },
  { icon: UserGroupIcon, value: "30+", label: "Nhân sự" },
  { icon: SignalIcon, value: "8+", label: "Kênh truyền thông" },
];

/* render sao vàng / xám */
const Stars = ({ rating }) => (
  <div className="flex gap-[2px] mb-3">
    {[1, 2, 3, 4, 5].map((n) => (
      <StarIcon
        key={n}
        className={`w-4 h-4 ${
          n <= rating ? "text-yellow-400" : "text-gray-600"
        }`}
      />
    ))}
  </div>
);
// … import StarIcon, Swiper, v.v. giữ nguyên …

/* ---------- helper random row-span dựa vào độ dài text ---------- */
const spanClass = (txt) => {
  const len = txt.length;
  if (len > 160) return "row-span-3";
  if (len > 90) return "row-span-2";
  return "row-span-1";
};

export default function Testimonials() {
  // chia 2 slide, giống trước
  const size = 9;
  const slides = [...Array(Math.ceil(reviews.length / size))].map((_, i) =>
    reviews.slice(i * size, (i + 1) * size)
  );

  return (
    <section
      className="
        min-h-screen flex flex-col
        py-12 md:py-20 px-4
        bg-gradient-to-b
        from-[#392067] via-[#8f2bd9] via-60% to-[#d00072] to-90%
        text-white
      "
    >
      {/* --- Title --- */}
      <h2 className="text-center font-heading text-3xl md:text-4xl font-bold mb-10">
        Feedback từ khách hàng & học viên
      </h2>

      {/* --- Swiper Masonry (flex-grow) --- */}
      <div className="flex-grow">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
        >
          {slides.map((chunk, idx) => (
            <SwiperSlide key={idx}>
              {/* CSS-Grid Masonry dense */}
              <div
                className="
                  grid
                  grid-auto-rows-[10px]     /* chiều cao hàng 10px -> row-span=1≈10px */
                  grid-auto-flow-dense
                  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                  gap-6 max-w-7xl mx-auto
                "
              >
                {chunk.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                    className={`
                      ${spanClass(r.text)}
                      bg-black/70 backdrop-blur-md relative overflow-hidden
                      rounded-xl p-6
                      border border-white/10
                      shadow-[0_4px_20px_rgba(255,255,255,0.05)]
                      hover:shadow-[0_8px_32px_rgba(255,255,255,0.08)]
                      hover:scale-105 hover:rotate-[1deg] transition
                    `}
                  >
                    {/* overlay champagne nhạt */}
                    <span className="absolute inset-0 bg-[rgba(220,201,154,0.07)] rounded-xl pointer-events-none" />
                    <Stars rating={r.rating} />
                    <p className="relative z-10 italic text-sm md:text-base mb-4 leading-relaxed">
                      “{r.text}”
                    </p>
                    <p className="relative z-10 font-semibold text-sm">
                      {r.name}
                    </p>
                    <p className="relative z-10 text-xs text-gray-300">
                      {r.role}
                    </p>
                  </motion.div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- KPI block luôn trong khung nhìn --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
      >
        {kpis.map(({ icon: Icon, value, label }, i) => (
          <div key={i} className="text-center">
            <Icon className="w-14 h-14 mx-auto text-[var(--color-accent)] mb-3" />
            <p className="text-4xl font-bold text-champagne">{value}</p>
            <p className="text-sm md:text-base text-gray-200 mt-1">{label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
