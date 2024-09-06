import HomeComp from "../components/HomeComp";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";
import FloatingMenu from "./ui/FloatingMenu";

const ComponentContainer = () => {
  return (
    <>
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
    </>
  );
};

export default ComponentContainer;
