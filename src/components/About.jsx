import { mouseEvents } from "../utils/animations";
import Container from "./Container";

function About({ updateMouseAnim }) {
    return (
        <main>
            <Container>
                <section className="flex h-screen flex-col items-center justify-center text-center space-y-40">
                    <div className="space-y-20">
                        <div
                            {...mouseEvents(updateMouseAnim)}
                            className="relative uppercase"
                        >
                            <h1 className="relative z-10 text-[60px] font-light sm:text-[75px] lg:text-xl 2xl:text-2xl">
                                who am i
                            </h1>
                            <h1 className="absolute left-10 top-5 w-full text-[60px] font-light text-brown-light sm:text-[75px] lg:top-10 lg:text-xl 2xl:left-20  2xl:text-2xl">
                                who am i
                            </h1>
                        </div>
                        <div
                            {...mouseEvents(updateMouseAnim)}
                            className="mx-auto lg:max-w-[848px]"
                        >
                            <p className="leading-[180%]">
                                Hey there, I'm Mounir – your go-to web designer
                                and React front-end developer. 🚀 Specializing
                                in crafting stunning landing pages, websites,
                                and dynamic front-end applications, for
                                businesses around the globe. If you need a
                                modern and powerful website, send me an email.
                                if we are a good fit, I will give you a time and
                                cost estimate
                            </p>
                        </div>
                    </div>
                    <div className="bg-red-500">
                        <button>see my work</button>
                        <div className="inline-block">+</div>
                    </div>
                </section>
            </Container>
        </main>
    );
}

export default About;
