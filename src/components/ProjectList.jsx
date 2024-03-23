import ProjectItem from "./ProjectItem";

// "A banking application that allows users to create accounts, deposit and withdraw money.",
const projects = [
    {
        name: "myBanki",
        imgSrc: "../../public/assets/myBanki.png",
        description:
            "myBanki is a fun project that simulates an online banking platform. It consists of a static webpage providing bank information such as features and pricing, along with a user-friendly dashboard where users can view their balance and perform various actions.",
        github: "https://github.com/mounirabcire/myBanki",
        live: "https://my-banki.vercel.app/",
        tech: ["HTML", "CSS", "tailwindcss", "React", "Framer Motion"],
    },
    {
        name: "adventureMemo",
        imgSrc: "../../public/assets/adventureMemo.png",
        description:
            "adventureMemo is a simple React web application that allows users to manage their adventure memories.",
        github: "https://github.com/mounirabcire/adventureMemo",
        live: "https://github.com/mounirabcire/adventureMemo",
        tech: ["HTML", "CSS", "tailwindcss", "React", "React Leaflet"],
    },
];

function ProjectList({ updateMouseAnim }) {
    return (
        <div className="space-y-10 text-start text-white">
            {projects.map((project, i) => (
                <ProjectItem
                    project={project}
                    key={i}
                    updateMouseAnim={updateMouseAnim}
                />
            ))}
        </div>
    );
}

export default ProjectList;
