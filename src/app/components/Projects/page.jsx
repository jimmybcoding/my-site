'use client';

import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import ProjectCard from "./projectCard";

const MotionDiv = motion.div;

const Projects = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0 });

    useEffect(() => {
        if (isInView) {
            setShowAnimation(true);
        } else {
            setShowAnimation(false);
        }
    }, [isInView]);

    return (
        <div className="min-h-screen bg-blue-500" ref={ref}>
            <h1 
                className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 py-5 ml-6 text-5xl text-white font-bold"
                id="projects"
            >
                Projects
            </h1>
        
            <AnimatePresence>
                {showAnimation && (
                    <MotionDiv
                        className="w-4/5 mx-auto my-6"
                        initial={{ opacity: 0 }}
                        animate={{
                            scale: [0, 0.25, 0.5, 0.75, 1],
                            opacity: [0, 0.25, 0.5, 0.75, 1],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                            duration: 1.5,
                            ease: "linear"
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
