import ConsoleLog from "@/components/ConsoleLog";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import type { Metadata } from "next";
import config from "@/site.config";
import "@/app/globals.css";

const misans = localFont({
  src: [
    {
      path: "../fonts/MiSansVF.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-misans",
  display: "swap",
});

export const metadata: Metadata = {
  title: config.author,
  description: config.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${misans.variable} grid gap-10 antialiased selection:bg-sky-400/30`}
      >
        {children}
        <Footer />
        <ConsoleLog />
      </body>
    </html>
  );
}
