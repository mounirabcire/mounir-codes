import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { useMouseAnimation } from "./hooks/useMouseAnimation";
import { useMousePosition } from "./hooks/useMousePosition";
import { motion } from "framer-motion";

function App() {
    const { mouseAnim, updateMouseAnim } = useMouseAnimation();
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
        <>
            <motion.div
                {...animMouse(mouseMove)}
                className={`pointer-events-none fixed left-0 top-0 z-50 h-[37px] w-[37px] rounded-full bg-black`}
            />
            <Routes>
                <Route
                    index
                    path="/"
                    element={<Homepage updateMouseAnim={updateMouseAnim} />}
                />
            </Routes>
        </>
    );
}

export default App;
