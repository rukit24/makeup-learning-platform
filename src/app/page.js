import Hero from "@/components/Hero"; // Hero section
import CourseSlider from "@/components/CourseSlider"; // Slider mới cho khóa học
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <>
      {/* HERO SECTION (video nền + logo) */}
      <Hero />

      {/* SLIDER KHÓA HỌC - THAY THẾ PHẦN CŨ BẰNG COMPONENT MỚI */}
      <CourseSlider />

      {/* ABOUT US */}
      <AboutUs />

      {/* FAKE REVIEWS */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Phản hồi học viên</h2>
        <div className="bg-[var(--color-surface)] p-6 rounded">
          <p className="text-[var(--color-secondary)] text-center">
            "[Review 1: ...] [Review 2: ...] [Review 3: ...]"
            <br />
            (Hiển thị dạng slider hoặc lưới)
          </p>
        </div>
      </section>
    </>
  );
}
