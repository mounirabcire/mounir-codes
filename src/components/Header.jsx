import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useMousePosition } from "../hooks/useMousePosition";
import { useMouseAnimation } from "../hooks/useMouseAnimation";

import {
    anim,
    expand,
    balanceChildren,
    balanceParent,
} from "../utils/animations";
import Container from "./Container";
import NavBar from "./NavBar";

const letters = ["front-end", "web-designer", "freelancer", "content-creator"];

function Header() {
    const [x, y] = useMousePosition();
    const { mouseAnim, updateMouseAnim, mouseEvents } = useMouseAnimation();

    const [currentLetter, setCurrentLetter] = useState(0);
    //  When the currentLetter is 4 it'll set immdediatly to 0,
    // Because of the condition of the useEffect()
    const letter =
        currentLetter === 4
            ? letters[0].split("")
            : letters[currentLetter].split("");
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

    useEffect(() => {
        let set;

        // Once the currentLetter is set to 4 it will trigger this effect (currentLetter is in the dependency) and immdeiatly will update the currentLetter state to 0 (it won't wait 5 seconds),
        if (currentLetter < letters.length) {
            set = setInterval(() => {
                setCurrentLetter((prev) => prev + 1);
            }, 5000);
        } else setCurrentLetter(0);
        return () => clearInterval(set);
    }, [currentLetter]);

    return (
        <header className="header overflow-hidden text-black">
            <motion.div
                {...animMouse(mouseMove)}
                className={`fixed top-0 left-0 w-[37px] h-[37px] bg-black z-50 pointer-events-none rounded-full`}
            />
            <Container className="relative h-full">
                <NavBar updateMouseAnim={updateMouseAnim} />
                <section className="h-full text-center uppercase flex flex-col items-center justify-center">
                    <div {...mouseEvents()} className="space-y-20">
                        <div className="relative max-w-[350px] lg:max-w-[450px] 2xl:max-w-[1000px]">
                            <h1 className="lg:text-xl 2xl:text-2xl font-light relative z-10">
                                <span>hey, i'm</span> <span>mounir</span>
                            </h1>
                            <h1 className="lg:text-xl w-full 2xl:text-2xl font-light absolute top-5 left-10 2xl:left-20 lg:top-10  text-brown-light">
                                <span>hey, i'm</span> <span>mounir</span>
                            </h1>
                        </div>
                        <div>
                            <AnimatePresence mode="wait">
                                <motion.p
                                    {...anim(balanceParent)}
                                    key={currentLetter}
                                    className="tracking-[10px] text-smaller xl:text-small overflow-hidden"
                                >
                                    {letter.map((char, i) => (
                                        <motion.span
                                            key={i}
                                            variants={balanceChildren}
                                            className="inline-block"
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </div>
                </section>
                <motion.div
                    {...mouseEvents()}
                    className="scroll absolute bottom-15  right-[1rem] sm:right-[2rem] lg:right-[4rem] xl:right-[5rem] 2xl:right-[6rem]"
                >
                    <p className="text-smaller xl:text-small">
                        {"SCROLL".split("").map((char, i) => (
                            <span key={i} className="block rotate-90">
                                {char}
                            </span>
                        ))}
                    </p>
                    <motion.div
                        {...anim(expand)}
                        className="absolute top-5 -left-5 h-[80%] w-[.75px] bg-black"
                    />
                </motion.div>
            </Container>
        </header>
    );
}

export default Header;
