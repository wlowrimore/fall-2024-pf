"use client";

import Link from "next/link";
import Speedometer from "./ui/Speedometer";
import { Fade } from "react-awesome-reveal";

const Services = ({ id }: { id: string }) => {
  return (
    <Fade cascade damping={0.5} duration={3000} triggerOnce>
      <main
        id="services"
        className="w-screen max-w-[79rem] min-h-screen flex flex-col justify-center mx-auto p-4 -mt-10 md:mt-0 bg-white"
      >
        <div className="w-full">
          <h1 className="flex flex-col md:flex-row items-center text-xl md:text-3xl pb-4 border-b border-neutral-400 uppercase text-neutral-950 font-semibold">
            My Services
            <Link
              href="/resume/william-lowrimore-fall-2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="md:ml-4 w-fit uppercase text-xs md:text-sm bg-[#A92E2E] text-white px-2 rounded-full hover:brightness-125 transition duration-200">
                View Resume
              </p>
            </Link>
          </h1>
        </div>
        <section className="py-2 md:py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 py-4 justify-items-center">
            <Speedometer percentage={98} title="UI Dev" />
            <Speedometer percentage={82} title="SEO" />
            <Speedometer percentage={64} title="AI" />
            <Speedometer percentage={90} title="Web Dev" />
            <Speedometer percentage={75} title="REST API" />
            <Speedometer percentage={100} title="Agile Dev" />
          </div>
          <div className="py-6 md:text-2xl text-neutral-600 font-bold md:px-14">
            <p className="md:text-justify">
              While the above mentioned services are my most commonly used, they
              are not the only services I offer. If you would like to to learn
              more about other services such as SaaS and BaaS, please{" "}
              <Link href="#contact" className="text-[#A92E2E] hover:underline">
                contact me
              </Link>
              . I will be happy to help you with any questions you may have.
            </p>
          </div>
        </section>
      </main>
    </Fade>
  );
};

export default Services;
