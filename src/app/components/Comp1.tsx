import Link from "next/link";
import React from "react";

const Comp1 = () => {
  return (
    <main className="w-full flex flex-col mx-auto">
      <div className="font-bold uppercase">
        <h1 className="text-4xl">William Lowrimore</h1>
        <p className="pl-1 text-lg">Software Engineer</p>
      </div>
      <section className="flex">
        <div className="flex gap-x-1 bg-bg-me bg-no-repeat bg-top bg-cover">
          <div className="opacity-75 cursor-pointer hover:opacity-90 transition duration-200 flex flex-col max-h-[42rem] w-[6rem] bg-amber-800 text-white font-bold rounded-l-2xl p-2">
            <Link href="#">About</Link>
          </div>
          <div className="opacity-75 cursor-pointer hover:opacity-90 transition duration-200 flex flex-col max-h-[42rem] w-[9rem] bg-red-900 text-white font-bold p-2">
            <Link href="#">My Work</Link>
          </div>
          <div className="opacity-75 cursor-pointer hover:opacity-90 transition duration-200 flex flex-col max-h-[42rem] w-[16rem] bg-amber-500 text-white font-bold p-2">
            <Link href="#">Skills</Link>
          </div>
          <div className="opacity-75 cursor-pointer hover:opacity-90 transition duration-200 flex flex-col max-h-[42rem] w-[7rem] bg-amber-600 text-white font-bold p-2">
            <Link href="#">Contact</Link>
          </div>
          <div className="opacity-75 cursor-pointer hover:opacity-90 transition duration-200 flex flex-col max-h-[42rem] w-[12rem] bg-amber-900 text-white font-bold rounded-r-md p-2">
            <Link href="#">Resume</Link>
          </div>
        </div>
        <div className="flex-1 ml-3 space-y-2 bg-gradient-to-b from-neutral-950 to neutral-400 bg-clip-text text-transparent">
          <h1 className="text-6xl font-bold uppercase">Creative</h1>
          <h1 className="text-6xl font-bold uppercase">Dynamic</h1>
          <h1 className="text-6xl font-bold uppercase">Innovative</h1>
          <h1 className="text-6xl font-bold uppercase">Modern</h1>
          <h1 className="text-6xl font-bold uppercase">Agile</h1>
          <h1 className="text-6xl font-bold uppercase">Intuitive</h1>
          <h1 className="text-6xl font-bold uppercase">Robust</h1>
          <h1 className="text-6xl font-bold uppercase">Scalable</h1>
          <h1 className="text-6xl font-bold uppercase">Efficient</h1>
          <h1 className="text-6xl font-bold uppercase">Reliable</h1>
        </div>
      </section>
    </main>
  );
};

export default Comp1;
