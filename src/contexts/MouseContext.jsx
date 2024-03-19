import { createContext, useContext } from "react";
import { useMouseAnimation } from "../hooks/useMouseAnimation";
import { useMousePosition } from "../hooks/useMousePosition";

const MouseContext = createContext();

function MouseProvider({ children }) {
    const { mouseEvents } = useMouseAnimation();
    const { mouseAnim } = useMouseAnimation();
    const [x, y] = useMousePosition();

    const animMouse = (variants) => {
        return {
            initial: "initial",
            animate: mouseAnim,
            variants,
        };
    };

    const mouseMove = {
        out: {
            left: x - 37 / 2 + "px",
            top: y - 37 / 2 + "px",
            transition: {
                type: "tween",
                duration: 0,
            },
        },
        in: {
            left: x - 140 / 2 + "px",
            top: y - 140 / 2 + "px",
            opacity: 1,
            width: "140px",
            height: "140px",
            backgroundColor: "#FEFAE0",
            mixBlendMode: "difference",
            transition: {
                duration: 0.3,
                ease: "backOut",
            },
        },
    };

    return (
        <MouseContext.Provider value={{ mouseEvents, animMouse, mouseMove }}>
            {children}
        </MouseContext.Provider>
    );
}

function useMouse() {
    const context = useContext(MouseContext);

    if (!context) {
        throw new Error("useMouse must be used within a MouseProvider");
    }
    return context;
}

export { MouseProvider, useMouse };
