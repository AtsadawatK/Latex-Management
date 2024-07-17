import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ระบบการจัดการบัญชีการรับซื้อน้ำยางสด",
  description: "ระบบการจัดการบัญชีการรับซื้อน้ำยางสดสำหรับสถานที่รับซื้อน้ำยางสด",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
