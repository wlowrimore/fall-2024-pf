"use client";

import { ProjectProps } from "../project-components/Projects";
import Link from "next/link";

import Logo from "../ui/Logo";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";

interface ProjectDetailsProps {
  project: ProjectProps;
  isSmallScreen: boolean;
  onModalOpen: () => void;
  isOpen: boolean;
  onModalClose: () => void;
  selectedProject: ProjectProps | null;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  project,
  isSmallScreen,
  onModalOpen,
  isOpen,
  onModalClose,
  selectedProject,
}) => (
  <div className="max-w-[38rem] max-h-[70rem] p-4 flex flex-col overflow-y-auto">
    <div className="flex items-center w-full border-b border-neutral-500 pt-3 pb-1">
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
          onClick={onModalOpen}
          className="text-[#A92E2E] cursor-pointer hover:text-neutral-950 hover:underline transition duration-200"
        >
          ...read more
        </span>
      </p>
    </div>
    <section className="w-[28rem] flex items-center md:text-xl font-bold py-4">
      <Link
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[12rem] flex items-center p-3 rounded-full gap-2 hover:bg-neutral-300 transition duration-200"
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

    {isOpen && selectedProject && (
      <div
        onClick={onModalClose}
        className="fixed inset-0 bg-neutral-700/40 backdrop-blur-sm flex items-center justify-center"
      >
        <div className="bg-white p-6 rounded-lg max-w-2xl">
          <div className="w-full flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">
              {selectedProject.title || ""}
            </h2>
            <button
              onClick={onModalClose}
              className="text-2xl hover:text-[#A92E2E] transition duration-200"
            >
              <AiOutlineClose />
            </button>
          </div>
          <p>{selectedProject.xtdesc || ""}</p>
        </div>
      </div>
    )}
  </div>
);

export default ProjectDetails;
