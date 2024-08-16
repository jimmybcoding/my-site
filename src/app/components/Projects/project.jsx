import Image from "next/image";
import Link from "next/link";

const Project = ({ title, description, skills, liveUrl, gitUrl, pic }) => (
    <div className="container mx-auto flex flex-col lg:flex-row lg:gap-8 items-center text-blue-700">
        {/* Left Column: Content */}
        <div className="lg:w-1/2 sm:w-full border-2 border-yellow-500 rounded-xl my-6 p-6 bg-yellow-300">
            <h2 className="font-bold text-xl border-b-yellow-500 border-b-2 mb-4 w-fit">{title}</h2>
            <p className="mb-6">{description}</p>
            <div className="flex gap-2 justify-center mb-6">
                {skills}
            </div>
            <div className="flex gap-10 justify-center">
                <Link 
                    href={liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border-2 border-blue-500 rounded-lg p-2 hover:bg-blue-500 hover:text-white transition-colors"
                    aria-label={`Visit live site for ${title}`}
                >
                    Visit Site
                </Link>
                <Link 
                    href={gitUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border-2 border-blue-500 rounded-lg p-2 hover:bg-blue-500 hover:text-white transition-colors"
                    aria-label={`View GitHub repository for ${title}`}
                >
                    GitHub Repo
                </Link>
            </div>
        </div>

        {/* Right Column: Image */}
        <div className="my-6 flex items-center justify-center">
            <Image 
                src={pic}
                alt={`Screenshot of my ${title} project`}
                height={100}
                width={100}
                sizes="100vw"
                className="w-full sm:w-4/5 max-h-[400px] rounded-2xl"
            />
        </div> 
    </div>
);

export default Project;


