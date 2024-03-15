import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { anim, open, openChild } from "../utils/animations";
import Container from "./Container";

function NavBar({ updateMouseAnim }) {
    const [isOpen, setIsOpen] = useState(false);

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

    return (
        <Container className="fixed top-0 left-1/2 -translate-x-1/2">
            <nav className="w-full py-20 flex items-center justify-between bg-transparent backdrop-blur-sm z-50">
                <div {...mouseEvents()}>
                    <h3 className="text-[18px]">mounir.codes</h3>
                </div>
                <div {...mouseEvents()} className="relative">
                    <div
                        onClick={() => setIsOpen((prev) => !prev)}
                        className={`menu ${isOpen === true ? "active" : ""}`}
                    />
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div {...anim(open)} className="links">
                                <motion.div variants={openChild}>
                                    <Link>projects</Link>
                                </motion.div>
                                <motion.div variants={openChild}>
                                    <Link>contact</Link>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </Container>
    );
}

export default NavBar;
