import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { anim, open, openChild } from "../utils/animations";
import { mouseEvents } from "../utils/animations";

import Container from "./Container";

function NavBar({ updateMouseAnim }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container className="fixed left-1/2 top-0 z-40 -translate-x-1/2 bg-transparent backdrop-blur-sm">
            <nav className="flex w-full items-center justify-between py-20">
                <div {...mouseEvents(updateMouseAnim)}>
                    <h3 className="text-[18px]">mounir.codes</h3>
                </div>
                <div {...mouseEvents(updateMouseAnim)} className="relative">
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
