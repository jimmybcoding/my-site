"use client";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { TbApi } from "react-icons/tb";

const ICON_SIZE = "4em";

const skillsData = [
  { icon: <FaHtml5 size={ICON_SIZE} />, label: "HTML5" },
  { icon: <FaCss3 size={ICON_SIZE} />, label: "CSS3" },
  { icon: <SiTailwindcss size={ICON_SIZE} />, label: "TailwindCSS" },
  { icon: <SiJavascript size={ICON_SIZE} />, label: "JavaScript" },
  { icon: <FaReact size={ICON_SIZE} />, label: "React" },
  { icon: <FaNodeJs size={ICON_SIZE} />, label: "Node.js" },
  { icon: <SiExpress size={ICON_SIZE} />, label: "Express.js" },
  { icon: <SiPostgresql size={ICON_SIZE} />, label: "PostgreSQL" },
  { icon: <FaDocker size={ICON_SIZE} />, label: "Docker" },
  { icon: <FaGitAlt size={ICON_SIZE} />, label: "Git" },
  { icon: <DiResponsive size={ICON_SIZE} />, label: "Responsive Design" },
  { icon: <TbApi size={ICON_SIZE} />, label: "REST API" },
];

const Skills = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-gradient-to-b from-purple-800 via-pink-600 to-blue-800"
      id="skills"
    >
      <div className="pt-10 pb-6 px-6">
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-purple-500 py-5 ml-6 text-5xl text-white font-bold">
          Skills
        </h1>
        <h2 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-purple-500 py-5 ml-6 text-sm text-white font-bold">
          ...that thrill
        </h2>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="w-4/5 mx-auto text-center">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skillsData.map((skill, index) => (
              <li
                key={index}
                className="flex flex-col items-center justify-center text-white hover:scale-110 transition-transform duration-200"
              >
                {skill.icon}
                <span className="mt-2 text-lg font-semibold">
                  {skill.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
