import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MessengerChat from "@/components/MessengerChat";
import CallButton from "@/components/CallButton";

import { Playfair_Display, Montserrat } from "next/font/google";

/* Caption serif */
const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700"],
  variable: "--font-caption",
});

/* Heading sans-serif */
const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Khóa học Makeup",
  description: "Trang web khóa học makeup chuyên nghiệp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        {/* favicon & font Be Vietnam Pro (body) */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/Icon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/Icon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/Icon/favicon-16x16.png"
        />
        <link rel="manifest" href="/Icon/site.webmanifest" />
        <link rel="shortcut icon" href="/Icon/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-custom text-custom min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MessengerChat />
        <CallButton />
      </body>
    </html>
  );
}
