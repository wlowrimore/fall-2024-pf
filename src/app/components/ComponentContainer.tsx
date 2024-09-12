"use client";

import { useEffect, useState } from "react";
import HomeComp from "../components/HomeComp";
import About from "../components/About";
import Projects from "./project-components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";
import FloatingMenu from "./ui/FloatingMenu";
import Loader from "./ui/Loader";

const ComponentContainer: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading === true) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <main className="min-h-screen max-w-screen mx-auto flex flex-col items-center">
      <FloatingMenu />
      <HomeComp id="/" />
      <About id="about" />
      <Projects id="projects" />
      <br />
      <br />
      <br />
      <br />
      <Services id="services" />
      <Contact id="contact" />
    </main>
  );
};

export default ComponentContainer;
