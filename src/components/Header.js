import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[var(--color-surface)] py-2 font-heading shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center">
          {/* Logo nhỏ hơn */}
          <div>
            <Image
              src="/logo.png"
              alt="MyBrand Logo"
              width={200} /* ↓ giảm */
              height={60}
              priority
            />
          </div>

          {/* Menu trung tâm */}
          <ul className="text-xl font-bold flex justify-center gap-10 whitespace-nowrap">
            <li>
              <a href="/trang-chu" className="hover:text-[var(--color-accent)]">
                Trang chủ
              </a>
            </li>
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

          {/* Nút đăng nhập */}
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
