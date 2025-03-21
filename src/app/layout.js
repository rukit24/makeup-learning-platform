import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Khóa học Makeup",
  description: "Trang web khóa học makeup chuyên nghiệp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="bg-custom text-custom min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
