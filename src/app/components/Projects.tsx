import Image from "next/image";
import Link from "next/link";
import Memoize from "../../../public/images/site-samples/generate.webp";
import { TfiArrowCircleRight } from "react-icons/tfi";

import NextJSLogo from "../../../public/logos/nextJS.png";
import TailwindLogo from "../../../public/logos/tailwind.png";
import FirebaseLogo from "../../../public/logos/firebase.png";
import OpenAILogo from "../../../public/logos/openAI.png";

const Projects = () => {
  return (
    <main
      id="projects"
      className="w-screen rounded-2xl max-w-[80rem] min-h-screen flex flex-col mx-auto p-4"
    >
      <div className="w-full">
        <h1 className="text-3xl pb-4 border-b border-neutral-400 uppercase text-neutral-950 font-semibold">
          Portfolio Projects
        </h1>
      </div>

      {/* Featured Projects */}
      <section className="py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-3">
          <div className="bg-[#f5f5f5] w-[30rem] rounded-xl shadow-md shadow-neutral-600">
            <div className="max-w-[30rem] max-h-[20rem] p-4 border-b-0 border-2 border-neutral-800 rounded-t-lg flex flex-col overflow-y-auto">
              <Image
                src={Memoize}
                alt="William Lowrimore"
                width={500}
                height={500}
                className="rounded-md w-full max-h-[32rem]"
              />
            </div>
            <div className="max-w-[30rem] max-h-[70rem] p-4 border-t-0 border-2 border-neutral-800 rounded-b-lg flex flex-col overflow-y-auto">
              <div className="flex items-center space-x-3 w-full border-b border-neutral-500 py-3">
                <h1 className="text-3xl text-neutral-950 font-semibold tracking-wide">
                  Memoize
                </h1>

                <Image
                  src={NextJSLogo}
                  alt="William Lowrimore"
                  width={500}
                  height={500}
                  className="rounded-md w-7 h-7"
                />
                <Image
                  src={TailwindLogo}
                  alt="William Lowrimore"
                  width={500}
                  height={500}
                  className="rounded-md w-7 h-7"
                />
                <Image
                  src={FirebaseLogo}
                  alt="William Lowrimore"
                  width={500}
                  height={500}
                  className="rounded-md w-7 h-7 opacity-70"
                />
                <Image
                  src={OpenAILogo}
                  alt="William Lowrimore"
                  width={500}
                  height={500}
                  className="rounded-md w-7 h-7"
                />
              </div>
              <div className="py-4 space-y-3">
                <p>
                  Memoize is an AI powered flashcard generator built with
                  Next.JS and OpenAI.
                </p>
                <p>
                  The user can sign-up and Sign-in via Google to create a user
                  session which is stored in a Firestore database. Using AI
                  technology, the user can generate flashcards on any topic and
                  store them on the database in their personalized flashcard
                  deck(s). By using Stripe, I&apos;ve added the availability of
                  paying with credit card or Google Pay with the option of 3
                  different packages.
                </p>
                {/* <br /> */}
              </div>
              <section className="flex flex-col pt-1 pb-4 px-4 space-y-3 text-xl font-bold">
                <Link href="#" className="flex items-center gap-2">
                  <TfiArrowCircleRight size={32} />
                  <span>View Code</span>
                </Link>
                <Link href="#" className="flex items-center gap-2">
                  <TfiArrowCircleRight size={32} />
                  <span>View Site</span>
                </Link>
                <Link href="#" className="flex items-center gap-2">
                  <TfiArrowCircleRight size={32} />
                  <span>View Resume</span>
                </Link>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
