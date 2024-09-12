"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { ProjectProps } from "../project-components/Projects";
import { AiOutlineClose } from "react-icons/ai";
const ProjectImage = ({ project }: { project: ProjectProps }) => {
  const [isImgModalOpen, setIsImgModalOpen] = useState<boolean>(false);

  const handleShowLargeImage = (projectId: string): void => {
    setIsImgModalOpen(true);
  };

  const handleCloseLargeImage = (): void => {
    setIsImgModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col rounded-xl">
        <div className="justify-center lg:w-[32rem] px-10 flex flex-col overflow-y-auto h-full w-full cursor-pointer border border-transparent">
          <Image
            src={project.imageUrl}
            alt="William Lowrimore"
            width={500}
            height={500}
            onClick={handleShowLargeImage.bind(null, project.id)}
            className="rounded-md sm:w-full max-h-[12rem] object-cover object-top overflow-hidden hover:opacity-80 hover:border border-[#F8B648] transition-all ease-in-out durattion-300"
          />
        </div>
      </div>

      {isImgModalOpen && (
        <div className="fixed inset-0 z-50 bg-neutral-950/80 shadow-lg rounded-lg p-4 overflow-auto">
          <Fade damping={0.5} duration={500} triggerOnce>
            <div className="w-full flex flex-col mb-1">
              <div className="w-full flex justify-end items-center mb-3">
                <button
                  onClick={handleCloseLargeImage}
                  className="text-2xl text-white w-fit hover:bg-neutral-600 transition-hover duration-200 rounded-full p-2"
                >
                  <AiOutlineClose />
                </button>
              </div>
              <Image
                src={project.imageUrl}
                alt="William Lowrimore"
                width={1000}
                height={1000}
                className="rounded-md sm:w-full object-cover"
              />
            </div>
          </Fade>
        </div>
      )}
    </>
  );
};

export default ProjectImage;
