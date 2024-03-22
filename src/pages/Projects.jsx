import { motion } from "framer-motion";
import { anim, enterPage, mouseEvents } from "../utils/animations";

import Container from "../components/Container";
import NavBar from "../components/NavBar";
import PageTransition from "../components/PageTransition";
import ProjectList from "../components/ProjectList";
function Projects({ updateMouseAnim }) {
    return (
        <PageTransition>
            <motion.div
                {...anim(enterPage)}
                className="pointer-events-none fixed left-0 top-0 z-50 h-screen w-screen origin-bottom bg-black"
            />
            <main>
                <NavBar updateMouseAnim={updateMouseAnim} />
                <Container>
                    <section className="mb-20 mt-[165px] min-h-screen space-y-40 text-center">
                        <div className="space-y-10">
                            <div
                                {...mouseEvents(updateMouseAnim)}
                                className="relative inline-block uppercase"
                            >
                                <h1 className="relative z-10 text-[60px] font-light sm:text-[75px] lg:text-xl 2xl:text-2xl">
                                    my work
                                </h1>
                                <h1 className="absolute left-10 top-5 w-full text-[60px] font-light text-brown-light sm:text-[75px] lg:top-10 lg:text-xl 2xl:left-20  2xl:text-2xl">
                                    my work
                                </h1>
                            </div>
                            <div className="mx-auto space-y-10 lg:max-w-[848px]">
                                <h4 className="text-small font-bold lg:font-bold">
                                    My Awesome Work
                                </h4>
                                <p className="text-smaller font-medium leading-[180%] lg:text-small ">
                                    I make really cool stuff for people who want
                                    the best. If you like great stuff and hard
                                    work, you're in the right spot!
                                </p>
                            </div>
                        </div>
                        <ProjectList />
                    </section>
                </Container>
            </main>
        </PageTransition>
    );
}

export default Projects;
