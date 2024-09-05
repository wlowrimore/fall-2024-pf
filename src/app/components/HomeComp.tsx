"use client";

import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const Comp1 = () => {
  return (
    <Fade cascade damping={1} duration={1000} triggerOnce>
      <main className="w-full min-h-screen flex flex-col mx-auto">
        <div className="font-bold uppercase">
          <h1 className="text-5xl">William Lowrimore</h1>
          <p className="pl-1 text-3xl">Software Engineer</p>
        </div>
        <section className="flex">
          {/* Colored Panels */}
          <div className="flex gap-x-[0.15rem] bg-bg-me bg-no-repeat bg-top bg-cover">
            <Link
              href="#about"
              className="opacity-75 cursor-pointer hover:opacity-90 transition duration-200 flex flex-col max-h-[42rem] w-[6rem] bg-amber-800 uppercase text-xl font-bold text-white rounded-l-2xl p-2"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="opacity-75 cursor-pointer hover:opacity-90 transition duration-200 flex flex-col max-h-[42rem] w-[9rem] bg-red-900 uppercase text-xl font-bold text-white p-2"
            >
              My Work
            </Link>
            <Link
              href="#"
              className="opacity-75 cursor-pointer hover:opacity-90 transition duration-200 flex flex-col max-h-[42rem] w-[16rem] bg-amber-500 uppercase text-xl font-bold text-white p-2"
            >
              Skills
            </Link>
            <Link
              href="#"
              className="opacity-75 cursor-pointer hover:opacity-90 transition duration-200 flex flex-col max-h-[42rem] w-[7rem] bg-amber-600 uppercase text-xl font-bold text-white p-2"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="opacity-75 cursor-pointer hover:opacity-90 transition duration-200 flex flex-col max-h-[42rem] w-[12rem] bg-amber-900 uppercase text-xl font-bold text-white rounded-r-md p-2"
            >
              Resume
            </Link>
          </div>

          {/* Adjective text column */}
          <div className="flex-1 ml-3 space-y-2 bg-gradient-to-b from-neutral-950 to-neutral-100 bg-clip-text text-transparent">
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
        <h2 className="text-4xl text-neutral-700 font-bold">
          Web Designs For Modern Times
        </h2>
      </main>
    </Fade>
  );
};

export default Comp1;
