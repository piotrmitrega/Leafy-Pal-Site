import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leafy Pal - Your Plant Care Companion",
  description:
    "Track, identify, diagnose, and organize your plants with ease using Leafy Pal.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <GoogleAnalytics /> */}
        {children}
      </body>
    </html>
  );
}
