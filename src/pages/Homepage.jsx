import { motion } from "framer-motion";

import About from "../components/About";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import { anim, enterPage } from "../utils/animations";

function Homepage({ updateMouseAnim }) {
    return (
        <PageTransition>
            <motion.div
                {...anim(enterPage)}
                className="pointer-events-none fixed left-0 top-0 z-50 h-screen w-screen origin-bottom bg-black"
            />
            <Header updateMouseAnim={updateMouseAnim} />
            <About updateMouseAnim={updateMouseAnim} />
        </PageTransition>
    );
}

export default Homepage;
