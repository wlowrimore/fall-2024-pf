"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { HiHome } from "react-icons/hi2";
import { HiUserCircle } from "react-icons/hi2";
import { HiBriefcase } from "react-icons/hi2";
import { HiMiniCog8Tooth } from "react-icons/hi2";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { PiReadCvLogoFill } from "react-icons/pi";
const FloatingMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isHoveringHome, setIsHoveringHome] = useState<boolean>(false);
  const [isHoveringAbout, setIsHoveringAbout] = useState<boolean>(false);
  const [isHoveringProjects, setIsHoveringProjects] = useState<boolean>(false);
  const [isHoveringServices, setIsHoveringServices] = useState<boolean>(false);
  const [isHoveringContact, setIsHoveringContact] = useState<boolean>(false);
  const [isHoveringResume, setIsHoveringResume] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerHeight = 60 * 16;
      setShowMenu(scrollY > triggerHeight);
      console.log("scrollY", scrollY, "triggerHeight", triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {showMenu && (
        <nav className="fixed z-50 top-0 md:top-1 lg:right-[26.5%] mr-2 p-4 bg-[#252a2f] text-white text-sm rounded-2xl">
          <ul className="flex gap-4 w-full">
            <li>
              <Link
                href="#home"
                className="flex flex-col items-center justify-center gap-3 px-3 w-[5rem]"
                onMouseEnter={() => setIsHoveringHome(true)}
                onMouseLeave={() => setIsHoveringHome(false)}
              >
                <HiHome size={28} />
                {isHoveringHome && "Home"}
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="flex flex-col items-center justify-center gap-3 px-2 w-[5rem]"
                onMouseEnter={() => setIsHoveringAbout(true)}
                onMouseLeave={() => setIsHoveringAbout(false)}
              >
                <HiUserCircle size={28} />
                {isHoveringAbout && "About"}
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="flex flex-col items-center justify-center gap-3 px-2 w-[5rem]"
                onMouseEnter={() => setIsHoveringProjects(true)}
                onMouseLeave={() => setIsHoveringProjects(false)}
              >
                <HiBriefcase size={28} />
                {isHoveringProjects && "Projects"}
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="flex flex-col items-center justify-center gap-3 px-2 w-[5rem]"
                onMouseEnter={() => setIsHoveringServices(true)}
                onMouseLeave={() => setIsHoveringServices(false)}
              >
                <HiMiniCog8Tooth size={28} />
                {isHoveringServices && "Services"}
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="flex flex-col items-center justify-center gap-3 px-2 w-[5rem]"
                onMouseEnter={() => setIsHoveringContact(true)}
                onMouseLeave={() => setIsHoveringContact(false)}
              >
                <PiContactlessPaymentFill size={28} />
                {isHoveringContact && "Contact"}
              </Link>
            </li>
            <li>
              <Link
                href="/resume/william-lowrimore-fall-2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-3 px-2 w-[5rem]"
                onMouseEnter={() => setIsHoveringResume(true)}
                onMouseLeave={() => setIsHoveringResume(false)}
              >
                <PiReadCvLogoFill size={28} />
                {isHoveringResume && "Resume"}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default FloatingMenu;
