import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "暮らしの喫茶ひとひ｜佐潟公園前の小さなカフェ｜新潟市西区",
  description:
    "佐潟公園前の「暮らしの喫茶ひとひ」。ほほのパンでつくるサンドやスープ、野草茶、コーヒーなどを紹介。営業日やイベントの最新情報は公式Instagramでご確認ください。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
