import Hero from "@/components/Hero"; // Hero section
import CourseSlider from "@/components/CourseSlider"; // Slider mới cho khóa học
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <CourseSlider />
      <AboutUs />
      <Testimonials />
    </main>
  );
}
