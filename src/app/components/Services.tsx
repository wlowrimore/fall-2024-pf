"use client";

import Speedometer from "./ui/Speedometer";
import { Fade } from "react-awesome-reveal";

const Services = () => {
  return (
    <Fade cascade damping={0.5} duration={3000} triggerOnce>
      <main
        id="services"
        className="w-screen max-w-[80rem] min-h-screen flex flex-col justify-center mx-auto p-4 bg-white"
      >
        <div className="w-full">
          <h1 className="text-3xl pb-4 border-b border-neutral-400 uppercase text-neutral-950 font-semibold">
            My Services
          </h1>
        </div>
        <section className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 justify-items-center">
            <Speedometer percentage={98} title="Dynamic UI Development" />
            <Speedometer percentage={82} title="SEO Conversion" />
            <Speedometer percentage={64} title="AI Integration" />
            <Speedometer percentage={90} title="Full Stack Web Development" />
            <Speedometer percentage={75} title="API Data Integration" />
            <Speedometer percentage={75} title="API Data Integration" />
          </div>
          <div className="py-6 text-2xl text-neutral-600 font-bold px-14">
            <p className="text-justify">
              While the above mentioned services are my most commonly used, they
              are not the only services I offer. If you would like to to learn
              more about other services such as SaaS and BaaS, please contact
              me. I will be happy to help you with any questions you may have.
            </p>
          </div>
        </section>
      </main>
    </Fade>
  );
};

export default Services;
