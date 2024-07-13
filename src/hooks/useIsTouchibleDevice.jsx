import { useState, useEffect } from "react";

function useIsTouchableDevice() {
    const [isTouchable, setIsTouchable] = useState(window.innerWidth <= 1024);
    const [hasMouseHover, setHasMouseHover] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsTouchable(window.innerWidth <= 1024);
        };

        const handleMouseMove = () => {
            setHasMouseHover(true);
        };

        const handleMouseLeave = () => {
            setHasMouseHover(false);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        // Initial check for mouse hover
        setHasMouseHover(window.matchMedia("(hover: hover)").matches);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return isTouchable && !hasMouseHover;
}

export { useIsTouchableDevice };

