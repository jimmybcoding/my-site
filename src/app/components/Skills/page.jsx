"use client";

import { FaHtml5, FaCss3, FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiVite, SiDrizzle, SiJavascript, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiResponsive } from "react-icons/di";
import { TbApi } from "react-icons/tb";

const ICON_SIZE = "4em";

const skillsData = [
    { icon: <FaHtml5 size={ICON_SIZE} />, label: "HTML5" },
    { icon: <FaCss3 size={ICON_SIZE} />, label: "CSS3" },
    { icon: <SiJavascript size={ICON_SIZE} />, label: "JavaScript" },
    { icon: <FaReact size={ICON_SIZE} />, label: "React" },
    { icon: <FaNodeJs size={ICON_SIZE} />, label: "NodeJS" },
    { icon: <SiTailwindcss size={ICON_SIZE} />, label: "Tailwind CSS" },
    { icon: <FaGitAlt size={ICON_SIZE} />, label: "Git" },
    { icon: <RiNextjsFill size={ICON_SIZE} />, label: "Next.js" },
    { icon: <SiVite size={ICON_SIZE} />, label: "Vite" },
    { icon: <SiDrizzle size={ICON_SIZE} />, label: "Drizzle" },
    { icon: <DiResponsive size={ICON_SIZE} />, label: "Responsive Design" },
    { icon: <TbApi size={ICON_SIZE} />, label: "REST API" }
];

const Skills = () => {
    return (
        <div className="container bg-fuchsia-800 min-h-screen" id="skills">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 py-5 ml-6 text-5xl text-white font-bold">
                Skills
            </h1>
            <h2 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5  ml-6 text-sm text-blue-500 font-bold">
                ...that thrill
            </h2>
            <div className="w-4/5 mx-auto text-center">
                <ul className="grid grid-cols-4 justify-center gap-4 w-full sm:grid-cols-2">
                    {skillsData.map((skill, index) => (
                        <li
                            key={index}
                            className="border-b-blue-500 border-b-4 mx-auto my-4"
                        >
                            {skill.icon} {skill.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;