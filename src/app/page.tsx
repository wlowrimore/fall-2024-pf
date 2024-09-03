import Image from "next/image";
import HomeComp from "./components/HomeComp";
import About from "./components/About";

export default function Home() {
  return (
    <main className="w-screen max-w-[80rem] min-h-screen flex flex-col items-center mx-auto py-24">
      <HomeComp />
      <About />
    </main>
  );
}
