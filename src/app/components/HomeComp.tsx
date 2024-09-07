"use client";

import { useScreen } from "../../hooks/useScreen";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const Comp1 = ({ id }: { id: string }) => {
  const { isSmallScreen } = useScreen();
  return (
    <Fade cascade damping={1} duration={1000} triggerOnce>
      <main
        id="/"
        className="max-w-[80rem] min-h-screen flex flex-col justify-center mx-auto md:py-12 md:ml-2"
      >
        <div className="ml-1 lg:ml-0 font-bold uppercase space-y-[-0.5rem]">
          <h1 className="text-2xl md:text-3xl lg:text-5xl">
            William Lowrimore
          </h1>
          <p className="lg:pl-1 md:text-xl lg:text-3xl">Software Engineer</p>
        </div>
        <section className="flex flex-col md:flex-row">
          {/* Colored Panels */}
          <div className="flex gap-x-[0.15rem] bg-bg-me bg-no-repeat bg-top bg-cover">
            <Link
              href="#about"
              className="opacity-75 cursor-pointer hover:opacity-90 transition duration-200 flex flex-col min-h-[20rem] max-h-[42rem] lg:w-[6rem] bg-amber-800 uppercase text-xs lg:text-xl font-extrabold text-black lg:rounded-l-2xl p-2"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="opacity-75 cursor-pointer hover:opacity-90 transition duration-200 flex flex-col min-h-[20rem] max-h-[42rem] lg:w-[9rem] bg-red-900 uppercase text-xs lg:text-xl font-extrabold text-black p-2"
            >
              {isSmallScreen ? "Work" : "My Work"}
            </Link>
            <Link
              href="#services"
              className="opacity-75 cursor-pointer hover:opacity-90 transition duration-200 flex flex-col min-h-[20rem] max-h-[42rem] lg:w-[16rem] bg-amber-500 uppercase text-xs lg:text-xl font-extrabold text-black p-2"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="opacity-75 cursor-pointer hover:opacity-90 transition duration-200 flex flex-col min-h-[20rem] max-h-[42rem] lg:w-[7rem] bg-amber-600 uppercase text-xs lg:text-xl font-extrabold text-black p-2"
            >
              Contact
            </Link>
            <Link
              href="/resume/william-lowrimore-fall-2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-75 cursor-pointer hover:opacity-90 transition duration-200 flex flex-col min-h-[20rem] max-h-[42rem] lg:w-[12rem] bg-amber-900 uppercase text-xs lg:text-xl font-extrabold text-black lg:rounded-r-md p-2"
            >
              Resume
            </Link>
          </div>

          {/* Adjective text column */}
          <div className="flex justify-between items-center md:flex-col md:items-start mx-1 lg:ml-3 mt-1 lg:mt-0 lg:space-y-2 bg-gradient-to-b from-neutral-950 to-neutral-100 bg-clip-text text-transparent">
            <h1 className="text-xs md:text-3xl lg:text-5xl lg:font-bold uppercase text-neutral-600 md:text-transparent">
              Creative
            </h1>
            <h1 className="text-xs md:text-3xl lg:text-5xl lg:font-bold uppercase text-neutral-950 md:text-transparent">
              Dynamic
            </h1>
            <h1 className="hidden md:block md:text-3xl lg:text-5xl lg:font-bold uppercase">
              Innovative
            </h1>
            <h1 className="text-xs md:text-3xl lg:text-5xl lg:font-bold uppercase text-neutral-600 md:text-transparent">
              Modern
            </h1>
            <h1 className="text-xs md:text-3xl lg:text-5xl lg:font-bold uppercase text-neutral-950 md:text-transparent">
              Agile
            </h1>
            <h1 className="hidden md:block md:text-3xl lg:text-5xl lg:font-bold uppercase">
              Intuitive
            </h1>
            <h1 className="hidden md:block md:text-3xl lg:text-5xl lg:font-bold uppercase">
              Robust
            </h1>
            <h1 className="text-xs md:text-3xl lg:text-5xl lg:font-bold uppercase text-neutral-600 md:text-transparent">
              Scalable
            </h1>
            <h1 className="hidden md:block md:text-3xl lg:text-5xl lg:font-bold uppercase">
              Efficient
            </h1>
            <h1 className="text-xs md:text-3xl lg:text-5xl lg:font-bold uppercase text-neutral-950 md:text-transparent">
              Reliable
            </h1>
          </div>
        </section>
        <h2 className="text-xl lg:text-4xl lg:font-bold lg:mt-0 ml-1 lg:ml-0">
          Web Designs For Modern Times
        </h2>
      </main>
    </Fade>
  );
};

export default Comp1;
