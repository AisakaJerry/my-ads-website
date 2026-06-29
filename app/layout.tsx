import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ads — zeyuanfeng.com",
  description: "Promotions and referrals by Zeyuan Feng",
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
