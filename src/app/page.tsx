import { Metadata } from "next";

import ComponentContainer from "./components/ComponentContainer";

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
export default function Home() {
  return (
    <main className="max-w-[80rem] min-h-screen flex flex-col items-center mx-auto pb-20">
      <ComponentContainer />
    </main>
  );
}
