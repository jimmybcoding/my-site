'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { domine } from "@/app/fonts/fonts";

const Intro = () => {
  const strings = [
    'Software Developer', 'Father', 'Tailwind Enthusiast', 'NBA Fan', 
    'U of Guelph Grad', 'Lab Tech', 'Swimmer', 'Dog Person', 
    'Dark Souls Player', 'Canadian', 'Husband'
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % strings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [strings.length]);

  return (
    <div className="
      w-full h-screen min-h-screen z-10 
      bg-[url('/background.gif')] bg-cover 
      bg-no-repeat bg-center
    ">
      <div className={`
        ${domine.className} flex flex-col gap-4 
        justify-center items-center w-4/5 min-w-72 
        h-screen mx-auto text-3xl
      `}>
        <div className="text-4xl justify-self-start">
          Hi, I&apos;m James!
        </div>
        <Image
          src="/jimmy.jpg"
          alt="Profile picture of James"
          height={100}
          width={100}
          sizes="100vw"
          className="shadow-multiple rounded-md w-1/5 mb-6 sm:w-2/5"
        />
        <div className="flex gap-4 w-4/5 justify-center">
          <div className="skew-y-12 skew-x-6 flex-nowrap">
            I am a
          </div> 
          <div className="border-blue-500 border-b-4">
            {strings[index]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

