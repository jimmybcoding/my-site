import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col justify-end items-center w-full h-20 bg-black text-slate-100 pb-4">
      <p className="font-thin">Designed by Jimmy B</p>
      <Link
        href="https://github.com/jimmybcoding?tab=repositories"
        target="_blank"
      >
        <FaGithub
          className="mx-auto h-6 w-6"
          title="Github"
          aria-label="Github"
        />
      </Link>
      © {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
