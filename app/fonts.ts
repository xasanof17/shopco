import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
});

export const integralCf = localFont({
  variable: "--font-integral",
  src: [
    {
      path: "../assets/fonts/Integralcf-bold.otf",
      weight: "700",
    },
    {
      path: "../assets/fonts/Integralcf-extrabold.otf",
      weight: "800",
    },
    {
      path: "../assets/fonts/Integralcf-heavy.otf",
      weight: "900",
    },
    {
      path: "../assets/fonts/Integralcf-medium.otf",
      weight: "500",
    },
    {
      path: "../assets/fonts/Integralcf-regular.otf",
      weight: "400",
    },
    {
      path: "../assets/fonts/Integralcf-semibold.otf",
      weight: "600",
    },
  ],
});
