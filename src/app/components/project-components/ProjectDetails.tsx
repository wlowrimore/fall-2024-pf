"use client";

import { useState, useEffect, useRef } from "react";
import { ProjectProps } from "../project-components/Projects";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

import Logo from "../ui/Logo";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";

interface ProjectDetailsProps {
  project: ProjectProps;
  isSmallScreen: boolean;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  project,
  isSmallScreen,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [visibleOverlayId, setVisibleOverlayId] = useState<string | null>(null);
  const projectId = project.id;
  const handleShowFullDescription = (projectId: string): void => {
    setVisibleOverlayId(projectId);
    setIsOpen(true);
  };

  const handleCloseFullDescription = (): void => {
    setVisibleOverlayId(null);
    setIsOpen(false);
  };

  return (
    <div className="relative max-w-[24rem] lg:max-w-[38rem] max-h-[70rem] p-4 flex flex-col md:overflow-y-auto justify-center">
      <div className="flex items-center  border-b border-neutral-500 pt-3 pb-1">
        <div className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-xl md:text-2xl text-neutral-950 font-semibold tracking-wide">
              {project.title || ""}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            {project.stack.map((tech) => (
              <Logo key={tech} name={tech} className="w-4 h-4 md:w-6 md:h-6" />
            ))}
          </div>
        </div>
      </div>
      <div className="pt-1">
        <p className="text-neutral-950">
          {project.desc || ""}
          <span
            className="text-red-500 font-semibold tracking-wider cursor-pointer hover:text-neutral-950 hover:underline transition duration-500"
            onClick={handleShowFullDescription.bind(null, projectId)}
          >
            ...read more
          </span>
        </p>
      </div>
      <section className="w-[28rem] flex flex-col md:flex-row items-start md:items-center md:text-xl font-bold py-4">
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[12rem] flex items-center py-3 md:p-3 rounded-full gap-2 hover:bg-neutral-300 transition duration-200"
        >
          {isSmallScreen ? (
            <TfiArrowCircleRight size={24} />
          ) : (
            <TfiArrowCircleRight size={32} />
          )}
          <span>View Site</span>
        </Link>
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[12rem] flex items-center md:p-3 rounded-full gap-2 hover:bg-neutral-300 transition duration-200"
        >
          {isSmallScreen ? (
            <TfiArrowCircleRight size={24} />
          ) : (
            <TfiArrowCircleRight size={32} />
          )}
          <span>View Code</span>
        </Link>
      </section>

      {/* Modal */}
      {isOpen && (
        <div className="absolute z-50 bg-neutral-950/80 text-white shadow-lg rounded-lg p-4 overflow-auto">
          <Fade damping={0.5} duration={500} triggerOnce>
            <div className="w-full flex justify-between items-center mb-1">
              <h2 className="text-2xl font-bold">{project.title || ""}</h2>
              <button
                onClick={handleCloseFullDescription}
                className="text-2xl hover:bg-neutral-600 rounded-full p-2"
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className="w-full h-[0.025rem] bg-neutral-400 rounded-xl"></div>
            <div className="overflow-y-auto mt-2">
              <p className="text-white">{project.xtdesc || ""}</p>
            </div>
          </Fade>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
