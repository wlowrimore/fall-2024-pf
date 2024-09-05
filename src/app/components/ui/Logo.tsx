import Image from "next/image";
import React from "react";

interface LogoProps {
  name: string;
  className?: string;
}

type LogoName =
  | "nextjs"
  | "tailwind"
  | "firebase"
  | "openai"
  | "postgres"
  | "prisma"
  | "stripe";

const Logo: React.FC<LogoProps> = ({ name, className = "" }) => {
  const logoPath = {
    nextjs: { src: "/logos/nextJS.png", height: 24, width: 24 },
    tailwind: { src: "/logos/tailwind.png", height: 24, width: 24 },
    firebase: { src: "/logos/firebase.png", height: 24, width: 24 },
    openai: { src: "/logos/openAI.png", height: 24, width: 24 },
    postgres: { src: "/logos/postgresql.png", height: 24, width: 24 },
    prisma: { src: "/logos/prisma.png", height: 24, width: 24 },
    stripe: { src: "/logos/stripeLogo.png", height: 24, width: 24 },
    newyorktimesapi: { src: "/logos/newyorktimes.png", height: 24, width: 24 },
  }[name.toLowerCase() as LogoName];

  return (
    <Image
      src={logoPath.src}
      width={logoPath.width}
      height={logoPath.height}
      alt={name}
      className={`w-6 h-6 ${className}`}
    />
  );
};

export default Logo;
