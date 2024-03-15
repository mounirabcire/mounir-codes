import { useState } from "react";

function useMouseAnimation() {
    const [mouseAnim, setMouseAnim] = useState("out");

    const mouseEvents = () => {
        return {
            onMouseEnter() {
                updateMouseAnim("in");
            },
            onMouseLeave() {
                updateMouseAnim("out");
            },
        };
    };

    function updateMouseAnim(animation) {
        setMouseAnim(animation);
    }

    return { mouseAnim, updateMouseAnim, mouseEvents };
}

export { useMouseAnimation };
