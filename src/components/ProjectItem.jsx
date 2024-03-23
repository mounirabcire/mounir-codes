import { mouseEvents } from "../utils/animations";
import TechList from "./TechList";

function ProjectItem({ project, updateMouseAnim }) {
    const { imgSrc, name, description, github, live, tech } = project;
    return (
        <div
            {...mouseEvents(updateMouseAnim)}
            className="relative z-10 space-y-20 overflow-hidden px-30 py-20 "
        >
            <div className="absolute left-0 top-0 -z-[5] h-full w-full rounded-md bg-[#000000bd] backdrop-blur-sm " />
            <img
                src={imgSrc}
                alt="project picutre"
                className="absolute left-0 top-0 -z-[10] h-full w-full object-cover"
            />
            <div className="space-y-10">
                <h4 className="text-brown-light dark:text-brown-dark">
                    {name}
                </h4>
                <p className="text-small leading-[180%]">{description}</p>
                <TechList tech={tech} borderColor={"white"} />
            </div>
            <div className="flex items-center space-x-15">
                <a
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-[35px] w-auto items-center justify-center rounded-sm bg-brown-light px-15 text-white dark:bg-brown-dark cursor-pointer"
                >
                    go live
                </a>
                <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-[35px] w-auto items-center justify-center rounded-sm border-2 border-brown-light px-15 text-white dark:border-brown-dark cursor-pointer"
                >
                    see code
                </a>
            </div>
        </div>
    );
}

export default ProjectItem;
