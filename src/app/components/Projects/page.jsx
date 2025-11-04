"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import ProjectCard from "./projectCard";

const MotionDiv = motion.div;

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0, once: true });

  return (
    <div
      className="flex flex-col min-h-screen bg-gradient-to-b from-blue-800 to-black via-purple-900"
      ref={ref}
    >
      <div className="pt-10 pb-6 px-6">
        <h1
          className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-purple-500 py-5 ml-6 text-5xl text-white font-bold"
          id="projects"
        >
          Projects
        </h1>
      </div>
      <AnimatePresence>
        {isInView && (
          <MotionDiv
            className="w-4/5 mx-auto my-6"
            initial={{ opacity: 0 }}
            animate={{
              scale: [0, 0.25, 0.5, 0.75, 1],
              opacity: [0, 0.25, 0.5, 0.75, 1],
            }}
            transition={{
              duration: 2.0,
              ease: "linear",
            }}
          >
            <ProjectCard />
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
