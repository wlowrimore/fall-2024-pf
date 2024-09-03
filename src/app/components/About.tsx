import Image from "next/image";
import Link from "next/link";
import WillBass from "../../../public/images/will-bass.jpg";
import HikingFam from "../../../public/images/hiking-fam.jpg";
import { TfiArrowCircleRight } from "react-icons/tfi";

const About = () => {
  return (
    <main
      id="about"
      className="w-screen max-w-[80rem] min-h-screen flex flex-col justify-center mx-auto p-4"
    >
      <div className="w-full">
        <h1 className="text-3xl pb-4 border-b border-neutral-400 uppercase text-neutral-950 font-semibold">
          My Story...
        </h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-3">
        <article className="text-xl text-neutral-800 tracking-wide space-y-3 py-2">
          <p>
            I&apos;m William Lowrimore, a Software Engineer from Nashville, TN.
            I have been studying and building web applications since graduating
            Vanderbilt University Code Bootcamp in the Spring of 2022, and
            recently completed a fellowship with Headstarters where I worked
            with the latest AI technologies under the direction of some of the
            most knowledgeable and experienced AI engineers in the business.
            This very exciting opportunity has allowed me to expand my
            experience, knowledge, and skills so that I may implement and share
            my technilogical growth with my existing and future clients and
            stakeholders.
          </p>
          <p>
            While working as a Junior Software Engineer, I became very
            passionate about Frontend Engineering and all of its moving parts. I
            develop mobile-first, always keeping the users&apos; experience at
            the forefront of each design, and I&apos;m always excited to learn
            new skills while seeking to grow with technological advancements.
          </p>

          <div className="w-full h-[55%]">
            <Image
              src={WillBass}
              alt="William Lowrimore"
              width={500}
              height={500}
              className="rounded-2xl w-full h-1/2 object-cover object-top border border-neutral-400 shadow-md shadow-neutral-600"
            />
          </div>
        </article>
        <div className="pt-4 w-full">
          <Image
            src={HikingFam}
            alt="William Lowrimore"
            width={500}
            height={500}
            className="rounded-2xl w-full h-[45%] object-cover border border-neutral-400 shadow-md shadow-neutral-600"
          />
          <p className="text-xl text-neutral-800 tracking-wide space-y-3 pt-6 pb-12">
            As a life-long student, teacher, and performer of music, as well as
            the devotion that I have for my family and their best interests, I
            have developed a rich and diverse set of soft skills, and an
            unwavering humility. These skills and traits are what drive me to
            succeed as a Software Engineer with a collaborative mind-set.
          </p>
          <div className="py-2 pl-2 pr-5 w-fit border-2 border-black rounded-full bg-neutral-800 text-white shadow-md shadow-neutral-600 hover:bg-amber-950/90 transition duration-200">
            <Link
              href="#"
              className="flex items-center gap-1.5 uppercase text-xl text-white font-bold"
            >
              <TfiArrowCircleRight size={38} />
              <span className="tracking-wider">View | Download Resume</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
