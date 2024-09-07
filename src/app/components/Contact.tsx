"use client";

import { useScreen } from "../../hooks/useScreen";
import ContactForm from "./forms/ContactForm";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

import { MdEmail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

const Contact = ({ id }: { id: string }) => {
  const { isSmallScreen } = useScreen();

  return (
    <Fade cascade damping={0.5} duration={1000} triggerOnce>
      <main
        id="contact"
        className="w-screen max-w-[80rem] min-h-screen flex flex-col justify-center mx-auto p-4"
      >
        <div className="w-full mb-16">
          <h1 className="text-xl md:text-3xl pb-2 md:pb-4 border-b border-neutral-400 uppercase text-neutral-950 font-semibold">
            Contact Me
          </h1>
          <p className="pt-3 md:text-xl">
            I am always open to new opportunities. Please fel free to reach out
            to me by either filling out this messaging form, or by clicking one
            of the contact links provided below.
            <Link
              href="/resume/william-lowrimore-fall-2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ml-4 uppercase text-xs md:text-sm bg-[#A92E2E] text-white px-2 rounded-full hover:brightness-125 transition duration-200">
                View Resume
              </span>
            </Link>
          </p>
        </div>
        <ContactForm />
        <section className="">
          <div className="flex flex-col text-xl">
            <Link
              href="#"
              className="md:py-2 px-2 flex items-center rounded-full md:gap-2 hover:bg-neutral-300 w-full md:w-[40%] transition duration-200"
            >
              <MdEmail
                size={45}
                className="md:border-2 border-neutral-600 rounded-full p-2"
              />{" "}
              <span className="text-base md:text-lg font-semibold text-neutral-600">
                wlowrimore@gmail.com
              </span>
            </Link>
            <Link
              href="#"
              className="md:py-2 px-2 flex items-center rounded-full md:gap-2 hover:bg-neutral-300 w-full md:w-[40%] transition duration-200"
            >
              <SiGithub
                size={44}
                className="md:border-2 border-neutral-600 rounded-full p-2"
              />{" "}
              <span className="text-base md:text-lg font-semibold text-neutral-600">
                github.com/wlowrimore
              </span>
            </Link>
            <Link
              href="#"
              className="md:py-2 px-2 flex items-center rounded-full md:gap-2 hover:bg-neutral-300 w-full md:w-[40%] transition duration-200"
            >
              <SiLinkedin
                size={44}
                className="md:border-2 border-neutral-600 rounded-full p-2"
              />{" "}
              <span className="text-base md:text-lg font-semibold text-neutral-600">
                {isSmallScreen
                  ? "linkedin.com/in/"
                  : "linkedin.com/in/william-lowrimore-dev"}
              </span>
            </Link>
          </div>
        </section>
      </main>
    </Fade>
  );
};

export default Contact;
