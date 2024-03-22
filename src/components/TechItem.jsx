function TechItem({ tech, borderColor }) {
    return (
        <div
            className={`flex h-[34px] min-w-[118px] flex-1 items-center justify-center rounded-sm border border-${borderColor} px-5 lg:flex-none`}
        >
            {tech}
        </div>
    );
}

export default TechItem;
