import type { Metadata } from "next";
import GoogleAnalytics from "../_compontents/GoogleAnalytics";
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
        url: "/home/wlowrimore/ME/fall-2024-pf/public/favicon.ico",
        width: 96,
        height: 96,
      },
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
      <GoogleAnalytics />
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
