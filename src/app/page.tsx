import Image from "next/image";
import Comp1 from "./components/Comp1";

export default function Home() {
  return (
    <main className="w-screen max-w-[80rem] flex flex-col items-center mx-auto py-24">
      <Comp1 />
    </main>
  );
}
