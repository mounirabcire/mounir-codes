function TechItem({ tech, borderColor }) {
    if (borderColor === "white")
        return (
            <div
                className={`tech flex h-[34px] min-w-[118px] flex-1 items-center justify-center rounded-sm border border-white px-5 text-small lg:flex-none`}
            >
                {tech}
            </div>
        );
    if (borderColor === "black")
        return (
            <div
                className={`tech flex h-[34px] min-w-[118px] flex-1 items-center justify-center rounded-sm border border-black px-5 text-small lg:flex-none dark:border-white`}
            >
                {tech}
            </div>
        );
}

export default TechItem;
