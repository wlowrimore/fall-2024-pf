"use client";

import { useState, useEffect } from "react";
import ProjectImage from "./ProjectImage";
import ProjectDetails from "./ProjectDetails";
import { Fade } from "react-awesome-reveal";
import { useScreen } from "../../../hooks/useScreen";

export interface ProjectProps {
  id: string;
  title: string;
  desc: string;
  xtdesc: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  stack: string[];
}

const Projects = ({ id }: { id: string }) => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const { isSmallScreen } = useScreen();

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/projects.json");
      const data = await res.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <main
      id="projects"
      className="rounded-2xl w-[24rem] md:w-[80rem] md:-ml-[15rem] lg:ml-0 flex flex-col justify-center md:justify-start mx-auto px-4 pt-24"
    >
      <Fade cascade damping={0.5} direction="left" triggerOnce>
        <div className="w-full">
          <h1 className="text-xl md:text-3xl pb-2 md:pb-4 border-b border-neutral-400 uppercase text-neutral-950 font-semibold">
            Portfolio Projects
          </h1>
        </div>
      </Fade>

      {/* Featured Projects */}
      <section className="w-[24rem] pr-8 md:pr-0 md:w-[80rem] lg:w-[78rem] pt-4">
        <Fade cascade damping={0.5} direction="up" triggerOnce>
          <div className="flex flex-col gap-6 lg:gap-12 md:py-3 justify-items-center">
            {projects.length > 0 &&
              projects.map((project: ProjectProps, index: number) => (
                <div
                  key={project.id || ""}
                  className={`flex flex-col justify-center md:flex-row h-[30rem] md:max-h-[20rem] md:justify-between rounded-xl shadow-md shadow-neutral-600 ${
                    index % 2 === 0
                      ? "bg-gradient-to-b md:bg-gradient-to-r from-neutral-700 to-[#f5f5f5] md:pr-12"
                      : "bg-gradient-to-t md:bg-gradient-to-l from-neutral-700 to-[#f5f5f5] md:pl-12"
                  }`}
                >
                  {index % 2 === 0 ? (
                    <>
                      <ProjectImage project={project} />
                      <ProjectDetails
                        project={project}
                        isSmallScreen={isSmallScreen}
                      />
                    </>
                  ) : (
                    <>
                      <ProjectDetails
                        project={project}
                        isSmallScreen={isSmallScreen}
                      />
                      <ProjectImage project={project} />
                    </>
                  )}
                </div>
              ))}
          </div>
        </Fade>
      </section>
    </main>
  );
};

export default Projects;
