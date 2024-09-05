"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./ui/Logo";
import { Fade } from "react-awesome-reveal";
import { TfiArrowCircleRight } from "react-icons/tfi";

interface ProjectProps {
  id: string;
  title: string;
  desc: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  stack: string[];
}

const Projects = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

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
      className="w-screen rounded-2xl max-w-[80rem] min-h-screen flex flex-col mx-auto p-4"
    >
      <Fade cascade damping={0.5} direction="left" triggerOnce>
        <div className="w-full">
          <h1 className="text-3xl pb-4 border-b border-neutral-400 uppercase text-neutral-950 font-semibold">
            Portfolio Projects
          </h1>
        </div>
      </Fade>

      {/* Featured Projects */}
      <section className="py-4">
        <Fade cascade damping={0.5} direction="up" triggerOnce>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-3 justify-items-center">
            {projects.length > 0 &&
              projects.map((project: ProjectProps) => (
                <div
                  key={project.id || ""}
                  className="bg-[#f5f5f5] w-[38rem] rounded-xl shadow-md shadow-neutral-600"
                >
                  <div className="justify-center max-w-[38rem] p-4 flex flex-col overflow-y-auto mt-4">
                    <Image
                      src={project.imageUrl}
                      alt="William Lowrimore"
                      width={500}
                      height={500}
                      className="rounded-md w-full max-h-[32rem] object-cover object-top"
                    />
                  </div>
                  <div className="max-w-[38rem] max-h-[70rem] p-4 flex flex-col overflow-y-auto">
                    <div className="flex items-center w-full border-b border-neutral-500 py-3">
                      <h1 className="w-1/2 text-3xl text-neutral-950 font-semibold tracking-wide">
                        {project.title || ""}
                      </h1>
                      <div className="w-1/2 flex items-center justify-end space-x-2">
                        {project.stack.map((tech) => (
                          <Logo key={tech} name={tech} />
                        ))}
                      </div>
                    </div>
                    <div className="py-4 pr-2 max-h-[10rem] overflow-y-auto mb-4">
                      <p className="text-neutral-950">{project.desc || ""}</p>
                    </div>
                    <section className="flex flex-col pt-1 pb-4 space-y-3 text-xl font-bold">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[96%] flex items-center p-3 rounded-full gap-2 hover:bg-neutral-300 transition duration-200"
                      >
                        <TfiArrowCircleRight size={32} />
                        <span>View Code</span>
                      </Link>
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[96%] flex items-center p-3 rounded-full gap-2 hover:bg-neutral-300 transition duration-200"
                      >
                        <TfiArrowCircleRight size={32} />
                        <span>View Site</span>
                      </Link>
                      <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[96%] flex items-center p-3 rounded-full gap-2 hover:bg-neutral-300 transition duration-200"
                      >
                        <TfiArrowCircleRight size={32} />
                        <span>View Resume</span>
                      </Link>
                    </section>
                  </div>
                </div>
              ))}
          </div>
        </Fade>
      </section>
    </main>
  );
};

export default Projects;
