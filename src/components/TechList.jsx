import TechItem from "./TechItem";

function TechList({ tech, borderColor = "black", justify = "center" }) {
    return (
        <div className="flex flex-wrap items-center  gap-10">
            {tech.map((tech, i) => (
                <TechItem key={i} tech={tech} borderColor={borderColor} />
            ))}
        </div>
    );
}

export default TechList;
