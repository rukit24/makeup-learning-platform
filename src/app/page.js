// src/app/page.js
export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="min-h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 text-center rounded">
          <h1 className="text-3xl font-bold mb-4">
            Khóa học Makeup chuyên nghiệp
          </h1>
          <p className="mb-6">
            Mô tả ngắn gọn về khóa học – Trải nghiệm học makeup từ cơ bản đến
            nâng cao.
          </p>
          <button className="btn-accent hover:opacity-90">Đăng ký ngay</button>
        </div>
      </section>

      {/* GIỚI THIỆU DOANH NGHIỆP */}
      <section className="py-12 container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Ảnh/Video minh họa */}
        <div className="w-full md:w-1/2">
          <img
            src="/intro-img.jpg"
            alt="Giới thiệu"
            className="rounded shadow-lg"
          />
          {/* Hoặc thay bằng video nếu cần */}
        </div>
        {/* Đoạn text giới thiệu */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Về chúng tôi</h2>
          <p className="text-[var(--color-secondary)]">
            Chúng tôi là trung tâm đào tạo makeup hàng đầu, mang đến trải nghiệm
            học tập và làm đẹp sang trọng, hiện đại. Với đội ngũ chuyên gia giàu
            kinh nghiệm, chúng tôi luôn cập nhật xu hướng và kỹ thuật mới nhất
            trong ngành làm đẹp.
          </p>
        </div>
      </section>

      {/* SLIDER KHÓA HỌC/SẢN PHẨM NỔI BẬT */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Khóa học nổi bật</h2>
        <div className="bg-[var(--color-surface)] p-6 rounded">
          <p className="text-[var(--color-secondary)] text-center">
            [Carousel cho các khóa học sẽ được tích hợp ở đây]
          </p>
        </div>
      </section>

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
