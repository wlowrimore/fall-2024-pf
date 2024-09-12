import Image from "next/image";
import { ProjectProps } from "../project-components/Projects";
const ProjectImage = ({ project }: { project: ProjectProps }) => (
  <div className="flex flex-col rounded-xl">
    <div className="justify-center lg:w-[32rem] px-10 flex flex-col overflow-y-auto h-full w-full">
      <Image
        src={project.imageUrl}
        alt="William Lowrimore"
        width={500}
        height={500}
        className="rounded-md sm:w-full max-h-[10rem] object-cover object-top overflow-hidden"
      />
    </div>
  </div>
);

export default ProjectImage;
