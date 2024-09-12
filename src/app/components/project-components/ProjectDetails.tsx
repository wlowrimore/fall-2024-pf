"use client";

import { useState, useEffect, useRef } from "react";
import { ProjectProps } from "../project-components/Projects";
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
  const descriptionRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const onModalOpen = () => setIsOpen(true);
  const onModalClose = () => setIsOpen(false);

  useEffect(() => {
    if (
      isOpen &&
      descriptionRef.current &&
      modalRef.current &&
      containerRef.current
    ) {
      const descRect = descriptionRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      const topOffset = descRect.top - containerRect.top - 95;
      const leftOffset = descRect.left - containerRect.left;

      modalRef.current.style.position = "absolute";
      modalRef.current.style.top = `${topOffset}px`;
      modalRef.current.style.left = `${leftOffset}px`;
      modalRef.current.style.width = `${descRect.width}px`;
      modalRef.current.style.maxHeight = `${window.innerHeight - topOffset}px`; // 20px buffer
    }
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="relative max-w-[38rem] max-h-[70rem] p-4 flex flex-col overflow-y-auto justify-center"
    >
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
      <div ref={descriptionRef} className="pt-1">
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
      {isOpen && (
        <div
          ref={modalRef}
          className="absolute z-50 bg-white shadow-lg rounded-lg p-4 overflow-auto"
        >
          <div className="w-full flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{project.title || ""}</h2>
            <button
              onClick={onModalClose}
              className="text-2xl hover:bg-neutral-300 rounded-full p-2 transition duration-200"
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="overflow-y-auto">
            <p className="text-neutral-700">{project.xtdesc || ""}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
