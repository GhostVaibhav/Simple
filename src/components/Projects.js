import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import markImg from "../images/markit.png";
import portfolioImg from "../images/portfolio.png";
import vupdateImg from "../images/vupdate.png";
import { motion } from "framer-motion";

const pageTransition = {
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        x: "-100vw",
    },
    comeLeftOut: {
        opacity: 0,
        x: "100vw",
    },
    zoomInit: {
        scale: 0.8,
    },
    zoomFinal: {
        scale: 1,
    }
}

function Projects(props) {
    const colors = {
        green: {
            headingColor: "text-green-300",
            backgroundColor: "bg-green-800",
            boxColor: "bg-green-600",
            hoverColor: "bg-green-900",
            borderColor: "border-green-600",
        },
        red: {
            headingColor: "text-red-300",
            backgroundColor: "bg-red-800",
            boxColor: "bg-red-600",
            hoverColor: "bg-red-700",
            borderColor: "border-pink-600",
        },
        blue: {
            headingColor: "text-indigo-500",
            backgroundColor: "bg-gray-900",
            boxColor: "bg-gray-700",
            hoverColor: "bg-indigo-500",
            borderColor: "border-gray-600",
        }
    };
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <div className={`${props.isPhone() ? "scroll-auto snap-both snap-mandatory snap-always overflow-scroll" : ""} overflow-x-hidden duration-500 transition h-screen w-screen ${colors[props.theme].backgroundColor}`}>
                <div className={`${props.isPhone() ? "snap-start" : ""} relative flex flex-col justify-center items-center sm:flex-row h-screen w-screen`}>
                    <div data-aos="zoom-in" data-aos-once="false" className="relative w-screen sm:place-self-center md:h-screen h-[30%] sm:w-1/2 !opacity-60 blur-2xl">
                        <div className="absolute top-[70%] sm:top-[25%] md:top-[35%] left-[30%] md:left-[25%] w-1/3 aspect-square bg-purple-300 rounded-full mix-blend-multiply filter animate-something animation-delay-2000"></div>
                        <div className="absolute top-[70%] sm:top-[25%] md:top-[35%] left-[40%] md:left-[35%] w-1/3 aspect-square bg-yellow-300 rounded-full mix-blend-multiply filter animate-something"></div>
                        <div className="absolute top-[80%] sm:top-[35%] md:top-[50%] left-[30%] md:left-[25%] w-1/3 aspect-square bg-pink-300 rounded-full mix-blend-multiply filter animate-something animation-delay-4000"></div>
                    </div>
                    <div className="relative flex justify-center items-end sm:items-center w-screen md:h-screen h-[70%] sm:w-1/2">
                        <div className="flex flex-col w-[90%] phone_landscape:w-[80%]">
                            <motion.div transition={{ duration: 0.5 }} initial="comeLeftOut" animate="in" exit="comeLeftOut" variants={pageTransition} className="drop-shadow-xl">
                                <div className={`flex flex-wrap justify-between items-center  transition-colors duration-500 phone_landscape:p-1 phone_landscape:pr-2 p-2 pr-4 md:pr-6 md:p-4 ${colors[props.theme].boxColor} bg-opacity-80 ${colors[props.theme].borderColor} border-b-0 border rounded-t-lg`}>
                                    <h1 className="phone_landscape:p-1 p-2 text-2xl lg:text-4xl text-white font-bold">
                                        <span data-blobity-offset-x="16" className={`${colors[props.theme].headingColor} transition-colors duration-500 text-4xl lg:text-5xl`} style={{ "fontFamily": "Caveat" }}>MarkIt </span>
                                        <div>
                                            <span data-blobity-offset-x="4" data-blobity-offset-y="4" data-blobity-magnetic="true" data-blobity-radius="16" className="mr-2 px-2 py-1 bg-indigo-200 hover:bg-indigo-300 rounded-full text-xs font-semibold text-indigo-600">
                                                C++
                                            </span>
                                            <span data-blobity-offset-x="4" data-blobity-offset-y="4" data-blobity-magnetic="true" data-blobity-radius="16" className="px-2 py-1 bg-green-200 hover:bg-green-300 rounded-full text-xs font-semibold text-green-600">
                                                CMake
                                            </span>
                                            <span data-blobity-offset-x="4" data-blobity-offset-y="4" data-blobity-magnetic="true" data-blobity-radius="16" className="mx-2 px-2 py-1 bg-red-200 hover:bg-red-300 rounded-full text-xs font-semibold text-red-600">
                                                Docker
                                            </span>
                                            <span data-blobity-offset-x="4" data-blobity-offset-y="4" data-blobity-magnetic="true" data-blobity-radius="16" className="px-2 py-1 bg-teal-200 hover:bg-teal-300 rounded-full text-xs font-semibold text-teal-600">
                                                Git
                                            </span>
                                        </div>
                                    </h1>
                                    <h1 className="inline text-2xl lg:text-4xl text-white font-bold hover:scale-110 transition duration-100 ease-in-out">
                                        <a data-blobity-offset-x="10" data-blobity-offset-y="10" target="_blank" rel="noreferrer" href="https://github.com/GhostVaibhav/MarkIt"><svg className="h-8 aspect-square" fill="white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a>
                                    </h1>
                                </div>
                                <article className={`hover:${colors[props.theme].hoverColor} transition-all duration-500 phone_landscape:p-1 md:p-4 ${colors[props.theme].boxColor} bg-opacity-80 ${colors[props.theme].borderColor} border rounded-b-lg`}>
                                    <div className="sm:text-sm md:text-base phone_landscape:text-sm phone_landscape:p-1 phone_landscape:py-2 text-center py-3 md:py-0 px-4 text-white">
                                        A cross-platform TODO terminal app
                                    </div>
                                </article>
                            </motion.div>
                            <motion.img initial="comeLeftOut" animate="in" exit="comeLeftOut" transition={{ duration: 0.5 }} variants={pageTransition} data-blobity-radius="10" src={markImg} alt="MarkIt" className={`drop-shadow-xl phone_landscape:mb-0 phone_landscape:mt-2 mb-2 mt-2 md:mt-4 md:mb-0 border ${colors[props.theme].borderColor} rounded-lg w-full h-auto`} />
                        </div>
                    </div>
                </div>
                <div className="snap-start relative flex flex-col justify-center items-center sm:flex-row h-screen w-screen">
                    <div className="relative flex justify-center items-start sm:items-center w-screen md:h-screen h-[70%] sm:w-1/2">
                        <div className="flex flex-col-reverse md:flex-col w-[90%] phone_landscape:w-[80%] mt-16 sm:mt-0">
                            <motion.div transition={{ duration: 0.5 }} initial="out" animate="in" viewport={{ once: true }} exit="out" variants={pageTransition} className="drop-shadow-xl">
                                <div className={`flex flex-wrap justify-between items-center  transition-colors duration-500 phone_landscape:p-0 phone_landscape:pr-2 p-2 pr-4 md:pr-6 md:p-4 ${colors[props.theme].boxColor} bg-opacity-80 ${colors[props.theme].borderColor} border-b-0 border rounded-t-lg`}>
                                    <h1 className="p-2 text-2xl lg:text-4xl text-white font-bold">
                                        <span data-blobity-offset-x="10" className={`${colors[props.theme].headingColor} transition-colors duration-500 text-4xl lg:text-5xl`} style={{ "fontFamily": "Caveat" }}>Portfolio </span>
                                        <div>
                                            <span data-blobity-offset-x="4" data-blobity-offset-y="4" data-blobity-magnetic="true" data-blobity-radius="16" className="mr-2 px-2 py-1 bg-indigo-200 hover:bg-indigo-300 rounded-full text-xs font-semibold text-indigo-600">
                                                React
                                            </span>
                                            <span data-blobity-offset-x="4" data-blobity-offset-y="4" data-blobity-magnetic="true" data-blobity-radius="16" className="px-2 py-1 bg-green-200 hover:bg-green-300 rounded-full text-xs font-semibold text-green-600">
                                                Tailwind
                                            </span>
                                            <span data-blobity-offset-x="4" data-blobity-offset-y="4" data-blobity-magnetic="true" data-blobity-radius="16" className="hidden md:inline mx-2 px-2 py-1 bg-red-200 hover:bg-red-300 rounded-full text-xs font-semibold text-red-600">
                                                JavaScript
                                            </span>
                                            <span data-blobity-offset-x="4" data-blobity-offset-y="4" data-blobity-magnetic="true" data-blobity-radius="16" className="inline md:hidden mx-2 px-2 py-1 bg-red-200 hover:bg-red-300 rounded-full text-xs font-semibold text-red-600">
                                                JS
                                            </span>
                                            <span data-blobity-offset-x="4" data-blobity-offset-y="4" data-blobity-magnetic="true" data-blobity-radius="16" className="px-2 py-1 bg-teal-200 hover:bg-teal-300 rounded-full text-xs font-semibold text-teal-600">
                                                JSX
                                            </span>
                                        </div>
                                    </h1>
                                    <div className="inline text-2xl lg:text-4xl text-white font-bold hover:scale-110 transition duration-100 ease-in-out">
                                        <a data-blobity-offset-x="10" data-blobity-offset-y="10" target="_blank" rel="noreferrer" href="https://github.com/GhostVaibhav/Simple"><svg className="h-8 aspect-square" fill="white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a>
                                    </div>
                                </div>
                                <article className={`hover:${colors[props.theme].hoverColor} transition-all phone_landscape:p-1 duration-500 md:p-4 ${colors[props.theme].boxColor} bg-opacity-80 ${colors[props.theme].borderColor} border rounded-b-lg`}>
                                    <div className="sm:text-sm md:text-base phone_landscape:text-sm phone_landscape:p-1 text-center py-3 md:py-0 px-4 text-white">
                                        My personal website built with React using TailwindCSS
                                    </div>
                                </article>
                            </motion.div>
                            <motion.img initial="out" animate="in" exit="out" transition={{ duration: 0.5 }} variants={pageTransition} data-blobity-radius="10" src={portfolioImg} alt="My Portfolio Website" className={`drop-shadow-xl phone_landscape:mt-2 mb-2 mt-2 md:mt-4 md:mb-0 border ${colors[props.theme].borderColor} rounded-lg w-full h-auto`} />
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-once="false" className="relative w-screen md:h-screen h-[30%] sm:w-1/2 !opacity-60 blur-2xl">
                        <div className="absolute -top-16 md:top-[15%] left-[30%] sm:left-[10%] md:left-[10%] w-[33.33vw] aspect-square bg-green-300 rounded-full mix-blend-multiply filter animate-something animation-delay-2000"></div>
                        <div className="absolute -top-16 md:top-[15%] left-[40%] sm:left-[20%] md:left-[10%] w-[33.33vw] aspect-square bg-red-300 rounded-full mix-blend-multiply filter animate-something"></div>
                        <div className="absolute top-[5%] md:top-[30%] left-[30%] sm:left-[10%] md:left-[0%] w-[33.33vw] aspect-square bg-blue-300 rounded-full mix-blend-multiply filter animate-something animation-delay-4000"></div>
                    </div>
                </div>
                <div className="snap-start relative flex flex-col justify-center items-center sm:flex-row h-screen w-screen">
                    <div data-aos="zoom-in" data-aos-once="false" className="relative w-screen sm:place-self-center md:h-screen h-[30%] sm:w-1/2 !opacity-60 blur-2xl">
                        <div className="absolute top-[70%] sm:top-[25%] md:top-[35%] left-[30%] md:left-[25%] w-1/3 aspect-square bg-purple-300 rounded-full mix-blend-multiply filter animate-something animation-delay-2000"></div>
                        <div className="absolute top-[70%] sm:top-[25%] md:top-[35%] left-[40%] md:left-[35%] w-1/3 aspect-square bg-yellow-300 rounded-full mix-blend-multiply filter animate-something"></div>
                        <div className="absolute top-[80%] sm:top-[35%] md:top-[50%] left-[30%] md:left-[25%] w-1/3 aspect-square bg-pink-300 rounded-full mix-blend-multiply filter animate-something animation-delay-4000"></div>
                    </div>
                    <div className="relative flex justify-center items-end sm:items-center w-screen md:h-screen h-[70%] sm:w-1/2">
                        <div className="flex flex-col w-[90%] phone_landscape:w-[80%]">
                            <motion.div transition={{ duration: 0.5 }} initial="comeLeftOut" animate="in" exit="comeLeftOut" variants={pageTransition} className="drop-shadow-xl">
                                <div className="flex flex-wrap justify-between items-center phone_landscape:p-1 phone_landscape:pr-2 p-2 pr-4 md:pr-6 md:p-4 bg-gray-700 bg-opacity-80 border-gray-600 border-b-0 border rounded-t-lg">
                                    <h1 className="phone_landscape:p-1 p-2 text-2xl lg:text-4xl text-white font-bold">
                                        <span data-blobity-offset-x="16" className="text-indigo-500 text-4xl lg:text-5xl" style={{ "fontFamily": "Caveat" }}>vupdate </span>
                                        <div>
                                            <span data-blobity-offset-x="4" data-blobity-offset-y="4" data-blobity-magnetic="true" data-blobity-radius="16" className="mr-2 px-2 py-1 bg-indigo-200 hover:bg-indigo-300 rounded-full text-xs font-semibold text-indigo-600">
                                                C++
                                            </span>
                                            <span data-blobity-offset-x="4" data-blobity-offset-y="4" data-blobity-magnetic="true" data-blobity-radius="16" className="px-2 py-1 bg-green-200 hover:bg-green-300 rounded-full text-xs font-semibold text-green-600">
                                                CMake
                                            </span>
                                            <span data-blobity-offset-x="4" data-blobity-offset-y="4" data-blobity-magnetic="true" data-blobity-radius="16" className="mx-2 px-2 py-1 bg-red-200 hover:bg-red-300 rounded-full text-xs font-semibold text-red-600">
                                                Curl
                                            </span>
                                            <span data-blobity-offset-x="4" data-blobity-offset-y="4" data-blobity-magnetic="true" data-blobity-radius="16" className="px-2 py-1 bg-teal-200 hover:bg-teal-300 rounded-full text-xs font-semibold text-teal-600">
                                                Git
                                            </span>
                                        </div>
                                    </h1>
                                    <h1 className="inline text-2xl lg:text-4xl text-white font-bold hover:scale-110 transition duration-100 ease-in-out">
                                        <a data-blobity-offset-x="10" data-blobity-offset-y="10" target="_blank" rel="noreferrer" href="https://github.com/GhostVaibhav/vupdate"><svg className="h-8 aspect-square" fill="white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a>
                                    </h1>
                                </div>
                                <article className="hover:bg-indigo-500 transition-all duration-300 phone_landscape:p-1 md:p-4 bg-gray-700 bg-opacity-80 border-gray-600 border rounded-b-lg">
                                    <div className="sm:text-sm md:text-base phone_landscape:text-sm phone_landscape:p-1 phone_landscape:py-2 text-center py-3 md:py-0 px-4 text-white">
                                        The most basic updater for any C++ application
                                    </div>
                                </article>
                            </motion.div>
                            <motion.img initial="comeLeftOut" animate="in" exit="comeLeftOut" transition={{ duration: 0.5 }} variants={pageTransition} data-blobity-radius="10" src={vupdateImg} alt="MarkIt" className="drop-shadow-xl phone_landscape:mb-0 phone_landscape:mt-2 mb-2 mt-2 md:mt-4 md:mb-0 border border-gray-600 rounded-lg w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
