"use client";

import { useState, useEffect } from "react";
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
  // Slide 1: short, medium, long, short, medium, long
  {
    name: "Nguyễn Thị An",
    role: "Học viên cấp tốc",
    rating: 5,
    text: "Tôi học chỉ trong hai buổi workshop và đã tự tin thực hiện make-up cơ bản cho bản thân, hiệu quả ngay lập tức.",
  },
  {
    name: "Trần Văn Bảo",
    role: "Khách đi tiệc",
    rating: 4,
    text: "Buổi makeup tiệc tối được giữ màu suốt 6 giờ đồng hồ dù mồ hôi cũng không làm nhòe phấn, tôi rất hài lòng với kỹ thuật blend tinh tế của team.",
  },
  {
    name: "Lê Minh Châu",
    role: "Stylist",
    rating: 5,
    text: "Trong khóa nâng cao với 8 buổi thực hành sâu khách hàng, tôi được hướng dẫn chi tiết từng bước contour, highlight, phối màu mắt và môi, cùng bộ kit chuyên nghiệp, giúp tôi thành thạo kỹ thuật airbrush và nhận dự án freelance ngay sau khi hoàn thành.",
  },
  {
    name: "Phạm Thị Dung",
    role: "Học viên cá nhân",
    rating: 4,
    text: "Lớp makeup cá nhân 6 buổi thị phạm trực tiếp, giải đáp chi tiết từng thắc mắc nhỏ ở bước đánh phấn.",
  },
  {
    name: "Hoàng Anh Đức",
    role: "Makeup Artist học lại",
    rating: 5,
    text: "Khóa học tuần vừa rồi thực hành make-up cô dâu phong cách nhẹ nhàng, màu pastel lên đi tiệc rất tự nhiên, lớp nền giữ chắc và độ che phủ tốt, cảm ơn giảng viên tận tâm.",
  },
  {
    name: "Võ Thị Hồng",
    role: "Cô dâu",
    rating: 5,
    text: "Ngày cưới của tôi trở nên trọn vẹn hơn bao giờ hết khi lớp makeup giữ nguyên nét tự nhiên, highlight và contour hài hòa, ekip còn chuẩn bị set touch-up gọn nhẹ giúp tôi luôn tươi tắn xuyên suốt buổi lễ và tiệc tối.",
  },

  // Slide 2: medium, long, short, medium, long, short
  {
    name: "Đặng Quỳnh Hoa",
    role: "Khách khai trương",
    rating: 5,
    text: "Makeup sáng tạo cho sự kiện khai trương, phong cách tươi trẻ, giữ màu chuẩn dưới ánh đèn showroom.",
  },
  {
    name: "Trần Thị Mai",
    role: "Học viên Pro",
    rating: 5,
    text: "Khóa đào tạo chuyên sâu 10 buổi, bao gồm lý thuyết và thực hành, tôi được giảng viên hỗ trợ kỹ thuật blend với độ chính xác cao, sau khóa tôi có thể nhận đơn hàng trang điểm cho khách VIP.",
  },
  {
    name: "Bùi Thanh Hùng",
    role: "Khách photoshoot",
    rating: 4,
    text: "Bộ ảnh thời trang nhờ makeup mà hoàn hảo hơn, ánh sáng lên chuẩn, team chuyên nghiệp.",
  },
  {
    name: "Đỗ Thị Kim",
    role: "Mẹ cô dâu",
    rating: 5,
    text: "Khóa học online với video hướng dẫn cận cảnh, bài tập thực hành thường xuyên, feedback nhanh chóng, giúp tôi nắm chắc kỹ thuật và tự tin makeup cho chính mình và bạn bè.",
  },
  {
    name: "Phan Văn Nam",
    role: "Chuyên gia makeup",
    rating: 5,
    text: "Chất phấn mịn, phù hợp da nhờn và da khô, team tư vấn sản phẩm chuyên nghiệp, hỗ trợ chăm sóc da trước và sau mỗi buổi thực hành.",
  },
  {
    name: "Lý Thanh Oanh",
    role: "Makeup Artist học lại",
    rating: 4,
    text: "Khóa workshop cuối tuần, thời gian ngắn nhưng đầy đủ kỹ thuật cơ bản, dễ áp dụng.",
  },

  // Slide 3: long, short, medium, long, short, medium
  {
    name: "Nguyễn Anh Quân",
    role: "Stylist",
    rating: 5,
    text: "Buổi chụp lookbook thời trang, make-up phong cách editorial, đội ngũ lắng nghe yêu cầu và phối hợp ăn ý, tạo nên shoot ảnh ấn tượng, màu sắc hài hòa dưới ánh đèn và hậu kỳ gần như không cần can thiệp.",
  },
  {
    name: "Vũ Hoàng Phúc",
    role: "Học viên cá nhân",
    rating: 5,
    text: "Lớp học 1:1, giáo viên chỉnh sửa từng nét cọ, giúp tôi tiến bộ nhanh chóng.",
  },
  {
    name: "Ngô Công Lực",
    role: "Makeup đi sự kiện",
    rating: 4,
    text: "Ekip makeup cho sự kiện ngoài trời nhưng lớp nền không bị trôi dù trời nắng gắt, kỹ thuật chống lem phấn cực xịn.",
  },
  {
    name: "Hoàng Thị Sen",
    role: "Cô dâu",
    rating: 5,
    text: "Ngày trọng đại của tôi thật hoàn hảo: lớp nền mỏng mịn, tone makeup hài hòa với váy cưới, ánh sáng hội trường làm da tôi phát sáng tự nhiên, cảm giác được tỏa sáng đúng nghĩa.",
  },
  {
    name: "Trương Văn Tùng",
    role: "Khách tiệc cưới",
    rating: 4,
    text: "Makeup tone trầm ấm cho buổi tiệc truyền thống, giữ nét thanh lịch và sang trọng suốt 5 giờ.",
  },
  {
    name: "Đỗ Mỹ Linh",
    role: "Học viên Pro",
    rating: 5,
    text: "Sau khóa học nâng cao kết hợp kỹ thuật airbrush và contour tối ưu, tôi đã tự tin nhận các hợp đồng trang điểm cô dâu và sự kiện với giá trị cao hơn mong đợi.",
  },
];

const kpis = [
  { icon: HeartIcon, value: "10+", label: "Năm kinh nghiệm" },
  { icon: AcademicCapIcon, value: "28+", label: "Khóa đào tạo" },
  { icon: UserGroupIcon, value: "30+", label: "Nhân sự" },
  { icon: SignalIcon, value: "8+", label: "Kênh truyền thông" },
];

function Stars({ rating }) {
  return (
    <div className="flex gap-1 mb-2">
      {[1, 2, 3, 4, 5].map((n) => (
        <StarIcon
          key={n}
          className={`w-5 h-5 ${
            n <= rating ? "text-yellow-400" : "text-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

const spanClass = (txt) => {
  const len = txt.length;
  if (len > 160) return "row-span-3";
  if (len > 90) return "row-span-2";
  return "row-span-1";
};

export default function Testimonials() {
  // Dynamic slide size: 3 on mobile, 6 on larger screens
  const [size, setSize] = useState(6);
  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth < 640 ? 3 : 6);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Split reviews into slides of `size`
  const slides = Array.from(
    { length: Math.ceil(reviews.length / size) },
    (_, i) => reviews.slice(i * size, i * size + size)
  );

  return (
    <section className="min-h-screen flex flex-col py-12 md:py-20 px-4 bg-gradient-to-tr from-[#ff8000] via-[#ff3d9a] to-[#7000ff] text-white">
      <h2 className="text-center font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
        Feedback từ khách hàng & học viên
      </h2>

      <div className="flex-grow">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
        >
          {slides.map((chunk, idx) => (
            <SwiperSlide key={idx}>
              <div className="grid grid-auto-rows-[10px] grid-auto-flow-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {chunk.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                    className={`${spanClass(
                      r.text
                    )} bg-black/70 backdrop-blur-md relative overflow-hidden rounded-xl p-6 border border-white/10 shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.08)] hover:scale-105 hover:rotate-[1deg] transition`}
                  >
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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 md:mt-16 grid grid-cols-4 gap-6 max-w-6xl mx-auto"
      >
        {kpis.map(({ icon: Icon, value, label }, i) => (
          <div key={i} className="flex flex-col items-center">
            <Icon className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[var(--color-accent)] mb-2" />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-champagne">
              {value}
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-200 text-center mt-1">
              {label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
