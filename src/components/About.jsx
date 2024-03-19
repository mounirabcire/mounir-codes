import { mouseEvents } from "../utils/animations";
import Container from "./Container";

function About({ updateMouseAnim }) {
    return (
        <main>
            <Container>
                <section className="flex h-screen flex-col items-center justify-center space-y-40 text-center">
                    <div className="space-y-20">
                        <div
                            {...mouseEvents(updateMouseAnim)}
                            className="relative inline-block uppercase"
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
                            <p className="font-medium leading-[180%]">
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
                    <div
                        {...mouseEvents(updateMouseAnim)}
                        className="flex items-center gap-30 font-medium text-brown-light"
                    >
                        <button className="multiBtn h-[55px] w-[155px] bg-black">
                            see my work
                        </button>
                        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-black text-[23px]">
                            +
                        </div>
                    </div>
                </section>
                <section className="flex h-screen flex-col items-center justify-center space-y-40 text-center">
                    <div className="space-y-20">
                        <div
                            {...mouseEvents(updateMouseAnim)}
                            className="relative inline-block uppercase"
                        >
                            <h1 className="relative z-10 text-[60px] font-light sm:text-[75px] lg:text-xl 2xl:text-2xl">
                                what i do
                            </h1>
                            <h1 className="absolute left-10 top-5 w-full text-[60px] font-light text-brown-light sm:text-[75px] lg:top-10 lg:text-xl 2xl:left-20  2xl:text-2xl">
                                what i do
                            </h1>
                        </div>
                        <div className="space-y-40">
                            <div className="mx-auto space-y-10 lg:max-w-[848px]">
                                <h3 className="subHead inline-block capitalize">
                                    web design
                                </h3>
                                <p className="font-medium leading-[180%]">
                                    I design beautiful and powerful websites for
                                    modern businesses. Any business today needs
                                    a website that wins customers’ trust and
                                    helps you do your business well. I make sure
                                    your website is up to that standard.
                                </p>
                                <div className="inline-block">
                                    <div className="skill">Figma</div>
                                </div>
                            </div>
                            <div className="mx-auto space-y-10 lg:max-w-[848px]">
                                <h3 className="subHead inline-block capitalize">
                                    front-end development
                                </h3>
                                <p className="font-medium leading-[180%]">
                                    I build websites in Webflow where I can
                                    create responsive, powerful and fully custom
                                    websites. Plus, Webflow has an incredibly
                                    simple Content Editor for you and your team
                                    to edit website content quickly and easily.
                                </p>
                                <div className="flex items-center justify-center">
                                    <div className="flex flex-wrap items-center gap-10">
                                        <div className="skill">HTML</div>
                                        <div className="skill">CSS</div>
                                        <div className="skill">tailwindcss</div>
                                        <div className="skill">JavaScript</div>
                                        <div className="skill">React</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </main>
    );
}

export default About;
