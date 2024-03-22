import TechList from "./TechList";

function ProjectItem({ project }) {
    const { imgSrc, name, description, github, live, tech } = project;
    return (
        <div className="relative z-10 space-y-10 overflow-hidden px-30 py-20 ">
            <div className="absolute left-0 top-0 -z-[5] h-full w-full rounded-md bg-[#000000bd] backdrop-blur-sm " />
            <img
                src={imgSrc}
                alt="project picutre"
                className="absolute left-0 top-0 -z-[10] h-full w-full object-cover"
            />
            <h4 className="text-brown-light">{name}</h4>
            <p className="text-small font-medium leading-[180%]">
                {description}
            </p>
            <TechList tech={tech} borderColor={"white"} />
            <div className="flex items-center space-x-15">
                <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="multiBtn flex h-[35px] w-auto items-center justify-center bg-black px-15"
                >
                    go live
                </a>
                <a
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                    className="multiBtn flex h-[35px] w-auto items-center justify-center bg-black px-15"
                >
                    see code
                </a>
            </div>
        </div>
    );
}

export default ProjectItem;
