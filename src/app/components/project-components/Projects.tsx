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
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isSmallScreen } = useScreen();

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/projects.json");
      const data = await res.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  const handleModalOpen = (project: ProjectProps) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <main
      id="projects"
      className="rounded-2xl max-w-[80rem] min-h-screen flex flex-col justify-center mx-auto px-4 pt-24"
    >
      <Fade cascade damping={0.5} direction="left" triggerOnce>
        <div className="w-full">
          <h1 className="text-xl md:text-3xl pb-2 md:pb-4 border-b border-neutral-400 uppercase text-neutral-950 font-semibold">
            Portfolio Projects
          </h1>
        </div>
      </Fade>

      {/* Featured Projects */}
      <section className="max-w-[78rem] w-[78rem] pt-4">
        <Fade cascade damping={0.5} direction="up" triggerOnce>
          <div className="flex flex-col gap-6 lg:gap-12 md:py-3 justify-items-center">
            {projects.length > 0 &&
              projects.map((project: ProjectProps, index: number) => (
                <div
                  key={project.id || ""}
                  className={`flex max-h-[20rem] justify-between rounded-xl shadow-md shadow-neutral-600 ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-neutral-700 to-[#f5f5f5] pr-12"
                      : "bg-gradient-to-l from-neutral-700 to-[#f5f5f5] pl-12"
                  }`}
                >
                  {index % 2 === 0 ? (
                    <>
                      <ProjectImage project={project} />
                      <ProjectDetails
                        project={project}
                        isSmallScreen={isSmallScreen}
                        onModalOpen={() => handleModalOpen(project)}
                        isOpen={isOpen}
                        onModalClose={handleModalClose}
                        selectedProject={selectedProject}
                      />
                    </>
                  ) : (
                    <>
                      <ProjectDetails
                        project={project}
                        isSmallScreen={isSmallScreen}
                        onModalOpen={() => handleModalOpen(project)}
                        isOpen={isOpen}
                        onModalClose={handleModalClose}
                        selectedProject={selectedProject}
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
