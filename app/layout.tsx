import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "منصة التحليل الذكي",
  description:
    "منصة عربية للتحليل الذكي للأسواق المالية مع مخططات وأدوات تداول مدمجة."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
