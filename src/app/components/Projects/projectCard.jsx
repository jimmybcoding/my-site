import Project from './project';
import { RiNextjsFill } from 'react-icons/ri';
import { SiTailwindcss, SiTypescript, SiVite, SiJavascript } from 'react-icons/si';
import { FaReact, FaCss3 } from 'react-icons/fa';

const ICON_SIZE = "2em";

const ProjectCard = () => {
    const projectInfo = {
        titles: [
            "Infection Control Quality Indicator Guide",
            "Wordle",
            "E-commerce Store",
            "Harry Potter Sorting Hat"
        ],
        descriptions: [
            "A Guide to the infection control quality indicators used at Hamilton Health Sciences. Uses graphJS to generate charts using real hospital compliance data. Includes information on every quality indicator and a tool to calculate quality measures.",
            "I love the game wordle so much that I wanted to recreate it! Hosted on Vercel, my game fetches a random five-letter word through the Wordnik API. The game is styled in Tailwind CSS and gives the user dark and light modes to switch between two themes.",
            "An E-commerce app using data served by the DummyJSON API. Uses React hooks including useContext to give users shopping cart functionality. Includes a contact section to send/receive messages to a personal email.",
            "I am a millennial, so it goes without saying that I grew up with Harry Potter. The user takes a quiz, with answers awarding points to each of the four houses. At the end of the quiz, the winning house is revealed and changes dynamically."
        ],
        skills: [
            [
                <RiNextjsFill key="nextjs" size={ICON_SIZE} />, 
                <FaReact key="react" size={ICON_SIZE} />, 
                <SiTypescript key="typescript" size={ICON_SIZE} />, 
                <SiTailwindcss key="tailwind" size={ICON_SIZE} />
            ],
            [
                <RiNextjsFill key="nextjs" size={ICON_SIZE} />, 
                <FaReact key="react" size={ICON_SIZE} />, 
                <SiTypescript key="typescript" size={ICON_SIZE} />, 
                <SiTailwindcss key="tailwind" size={ICON_SIZE} />
            ],
            [
                <SiVite key="vite" size={ICON_SIZE} />, 
                <FaReact key="react" size={ICON_SIZE} />, 
                <SiJavascript key="javascript" size={ICON_SIZE} />, 
                <FaCss3 key="css3" size={ICON_SIZE} />
            ],
            [
                <SiVite key="vite" size={ICON_SIZE} />, 
                <FaReact key="react" size={ICON_SIZE} />, 
                <SiJavascript key="javascript" size={ICON_SIZE} />, 
                <FaCss3 key="css3" size={ICON_SIZE} />
            ]
        ],
        liveUrls: [
            "https://infection-control.vercel.app/",
            "https://wordle-nextjs-six.vercel.app/",
            "https://jimmybcoding.github.io/e-commerce-react/",
            "https://jimmybcoding.github.io/HarryPotter/"
        ],
        gitUrls: [
            "https://github.com/jimmybcoding/infection-control",
            "https://github.com/jimmybcoding/wordle-nextjs",
            "https://github.com/jimmybcoding/e-commerce-react",
            "https://github.com/jimmybcoding/HarryPotter"
        ],
        images: [
            "/infection.jpg",
            "/wordle.jpg",
            "/commerce.jpg",
            "/harrypotter.jpg"
        ]
    };

    return (
        <div>
            {projectInfo.titles.map((title, index) => (
                <Project
                    key={index}
                    title={title}
                    description={projectInfo.descriptions[index]}
                    skills={projectInfo.skills[index]}
                    liveUrl={projectInfo.liveUrls[index]}
                    gitUrl={projectInfo.gitUrls[index]}
                    pic={projectInfo.images[index]}
                />
            ))}
        </div>
    );
};

export default ProjectCard;

