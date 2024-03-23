import { motion } from "framer-motion";
import { anim, enterPage, mouseEvents } from "../utils/animations";
import Container from "../components/Container";

import instaSvg from "../../public/assets/instagram.svg";
import gitSvg from "../../public/assets/github.svg";
import PageTransition from "../components/PageTransition";
import NavBar from "../components/NavBar";

function Contact({ updateMouseAnim }) {
    const currentYear = new Date().getFullYear();

    return (
        <PageTransition>
            <motion.div
                {...anim(enterPage)}
                className="pointer-events-none fixed left-0 top-0 z-50 h-screen w-screen origin-bottom bg-black dark:bg-white"
            />
            <main className="bg-white pt-[165px] dark:bg-black">
                <NavBar updateMouseAnim={updateMouseAnim} />
                <Container>
                    <section className="space-y-40 text-center text-black dark:text-white">
                        <div className="space-y-10">
                            <div
                                {...mouseEvents(updateMouseAnim)}
                                className="relative inline-block uppercase"
                            >
                                <h1 className="relative z-10 text-[60px] font-light sm:text-[75px] lg:text-xl 2xl:text-2xl">
                                    contact
                                </h1>
                                <h1 className="absolute left-10 top-5 w-full text-[60px] font-light text-brown-light dark:text-brown-dark sm:text-[75px] lg:top-10 lg:text-xl 2xl:left-20  2xl:text-2xl">
                                    contact
                                </h1>
                            </div>
                            <form
                                {...mouseEvents(updateMouseAnim)}
                                className="form space-y-20"
                                id="contact-form"
                            >
                                <div className="space-y-5">
                                    <h4 className="text-small font-bold lg:font-bold">
                                        let's have a chat!
                                    </h4>
                                    <p className="mx-auto max-w-[400px]  text-smaller leading-[180%] lg:text-small">
                                        I'm currently open for new
                                        opportunities.
                                    </p>
                                </div>
                                <div className="inputBox">
                                    <input
                                        className="inputText"
                                        type="text"
                                        name="user_name"
                                        id="contact-name"
                                        required
                                    />
                                    <span>FULL NAME</span>
                                </div>
                                <div className="inputBox">
                                    <input
                                        className="inputText"
                                        type="email"
                                        name="user_email"
                                        id="contact-email"
                                        required
                                    />
                                    <span>EMAIL</span>
                                </div>
                                <div className="inputBox">
                                    <textarea
                                        className="inputText msgArea"
                                        name="user_message"
                                        id="contact-message"
                                        required
                                    />
                                    <span>MESSAGE</span>
                                </div>
                                <input
                                    type="submit"
                                    value="SUBMIT"
                                    className="submitBox"
                                />
                            </form>
                        </div>
                        <div className="space-y-20">
                            <div
                                {...mouseEvents(updateMouseAnim)}
                                className="flex items-center justify-center gap-10"
                            >
                                <a
                                    className="cursor-pointer"
                                    href="https://github.com/mounirabcire"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={gitSvg}
                                        alt="github"
                                        className="h-20 w-20 cursor-pointer"
                                    />
                                </a>
                                <a
                                    className="cursor-pointer"
                                    href="https://www.instagram.com/mounir.codes"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={instaSvg}
                                        alt="instagram"
                                        className="h-20 w-20 cursor-pointer"
                                    />
                                </a>
                            </div>
                            <div {...mouseEvents(updateMouseAnim)}>
                                <p className="pb-5 text-small font-light">
                                    &copy; {currentYear} Mounir Front-end
                                    Developer
                                </p>
                            </div>
                        </div>
                    </section>
                </Container>
            </main>
        </PageTransition>
    );
}

export default Contact;
