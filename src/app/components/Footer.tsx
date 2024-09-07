import React from "react";

const Footer = () => {
  return (
    <main className="w-full max-w-[80rem] mx-auto flex flex-col md:flex-row justify-center items-center md:gap-4 p-4 fixed bottom-0 left-[50%] translate-x-[-50%] text-sm md:text-base bg-white">
      <div>&copy; 2024. All Rights Reserved FakeNameDev</div>
      <div className="-mt-[0.25rem] md:mt-0">
        Designed and Developed by William Lowrimore
      </div>
    </main>
  );
};

export default Footer;
