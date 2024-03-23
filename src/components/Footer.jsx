import { mouseEvents } from "../utils/animations";
import instaSvg from "../../public/assets/instagram.svg";
import gitSvg from "../../public/assets/github.svg";
import Container from "./Container";

function Footer({ updateMouseAnim }) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center text-black dark:text-white">
            <Container className="space-y-40">
                <div className="space-y-20">
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
                </div>
                <div {...mouseEvents(updateMouseAnim)}>
                    <p className="pb-5 text-small font-light">
                        &copy; {currentYear} Mounir Front-end Developer
                    </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
