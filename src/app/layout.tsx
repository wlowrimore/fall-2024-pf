import type { Metadata } from "next";
// import GoogleAnalytics from "../_compontents/GoogleAnalytics";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Poppins as Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "William Lowrimore",
  description: "William Lowrimore - Software Engineer",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "William Lowrimore - Software Engineer",
    description: "William Lowrimore - Software Engineer",
    url: "https://williamlowrimore.com/",
    siteName: "William Lowrimore",
    images: [
      {
        url: "https://github.com/wlowrimore.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen">
      <GoogleAnalytics gaId="G-S4JQ23H9QC" />
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
