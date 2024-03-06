import type { Metadata } from "next";
import { integralCf, inter } from "@/app/fonts";
import "@/style/globals.css";
import { Banner } from "./_components/banner";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Shop.co",
  description: "Shop.co - Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${integralCf.variable} ${inter.variable}`}>
        <Navbar />
        <main role="main">{children}</main>
      </body>
    </html>
  );
}
