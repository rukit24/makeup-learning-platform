import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[var(--color-surface)] py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center">
          {/* Cột 1: Logo */}
          <div>
            {/* Sử dụng Next.js Image để tối ưu hình ảnh */}
            <Image
              src="/logo.png"
              alt="MyBrand Logo"
              width={240} // Chiều rộng mong muốn
              height={80} // Chiều cao mong muốn
            />
          </div>

          {/* Cột 2: Menu ở giữa */}
          <ul className="text-2xl font-bold flex justify-center gap-14 flex-nowrap whitespace-nowrap">
            <li>
              <a href="/san-pham" className="hover:text-[var(--color-accent)]">
                Sản phẩm dịch vụ
              </a>
            </li>
            <li>
              <a href="/makeup" className="hover:text-[var(--color-accent)]">
                Khóa học
              </a>
            </li>
            <li>
              <a href="/presets" className="hover:text-[var(--color-accent)]">
                Liên hệ
              </a>
            </li>
            <li>
              <a href="/khoa-hoc" className="hover:text-[var(--color-accent)]">
                Khóa học của tôi
              </a>
            </li>
          </ul>

          {/* Cột 3: Nút Đăng nhập bên phải */}
          <div className="text-xl font-bold flex justify-end">
            <a
              href="/dang-nhap"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Đăng nhập
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
