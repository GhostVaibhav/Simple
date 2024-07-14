import React, { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
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
    upIn: {
        opacity: 1,
        y: 0,
    },
    upOut: {
        opacity: 0,
        y: "-100vh",
    },
    downOut: {
        opacity: 0,
        y: "100vh",
    },
    comeLeftOut: {
        opacity: 0,
        x: "100vw",
    },
    zoomInit: {
        scale: 0,
    },
    zoomFinal: {
        scale: 1,
    }
}

const trans = {
    transition: "linear",
    duration: 4
}

function Credits(props) {
    const colors = {
        light: {
            textColor: "text-black",
            subTextColor: "",
            bgColor: "bg-white",
            boxColor: "bg-gray-300",
            borderColor: "border-gray-500",
        },
        sw: {
            textColor: "text-black",
            subTextColor: "",
            bgColor: "bg-black",
            boxColor: "bg-yellow-300",
            borderColor: "border-yellow-200",
        },
        dark: {
            textColor: "text-indigo-500",
            subTextColor: "text-white",
            bgColor: "bg-gray-900",
            boxColor: "bg-gray-700",
            borderColor: "border-gray-800",
        }
    };
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <div className={`transition ease-linear duration-500 h-fit min-h-screen min-w-full w-fit ${colors[props.theme].bgColor} flex justify-center items-center`}>
                <div className="z-10 absolute h-screen w-screen !opacity-60 blur-2xl overflow-hidden">
                    <div className="absolute top-1/2 md:top-1/4 left-[10%] md:left-1/4 h-1/3 md:h-auto md:w-1/3 aspect-square bg-purple-300 rounded-full mix-blend-multiply filter animate-something animation-delay-2000" />
                    <div className="absolute top-1/2 md:top-1/4 left-[15%] md:left-[45%] h-1/3 md:h-auto md:w-1/3 aspect-square bg-yellow-300 rounded-full mix-blend-multiply filter animate-something" />
                    <motion.div transition={trans} initial="upOut" animate="upIn" exit="upOut" variants={pageTransition} className="absolute top-1/3 md:top-[20%] left-[15%] md:left-[45%] h-1/3 md:h-auto md:w-1/3 aspect-square bg-pink-300 rounded-full mix-blend-multiply filter animate-something animation-delay-4000" />
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="z-20 phone_landscape:my-2 flex justify-center backdrop-blur-2xl rounded-lg">
                    <div className={`transition-all ease-linear duration-500 flex flex-col items-center border ${colors[props.theme].borderColor} bg-opacity-80 ${colors[props.theme].boxColor} rounded-lg`}>
                        <div data-blobity-offset-y="10" style={{ fontFamily: "Caveat" }} className={`transition-all ease-linear duration-500 text-center phone_landscape:mx-1 font-extrabold mt-6 pr-3 md:pr-0 m-2 ${colors[props.theme].textColor} text-5xl w-full md:ml-6 md:mr-20`}>
                            Credits
                        </div>
                        <div className={`${colors[props.theme].subTextColor} mx-12 mb-8`}>
                            <div className="transition-all ease-linear duration-500 flex">
                                <div className="text-3xl font-bold my-2">
                                    Icons
                                </div>
                                <div className="text-xs font-mono">
                                    (Thank you so much for these icons!)
                                </div>
                            </div>
                            <ul style={{ listStyleType: "disc" }} className="transition-all ease-linear duration-500">
                                <li>
                                    sun by Kosong Tujuh from <a href="https://thenounproject.com/browse/icons/term/sun/" rel="noreferrer" target="_blank" title="sun Icons">Noun Project</a> (CC BY 3.0)
                                </li>
                                <li>
                                    Moon by Chehuna from <a href="https://thenounproject.com/browse/icons/term/moon/" rel="noreferrer" target="_blank" title="Moon Icons">Noun Project</a> (CC BY 3.0)
                                </li>
                                <li>
                                    Space by Flatart from <a href="https://thenounproject.com/browse/icons/term/space/" rel="noreferrer" target="_blank" title="Space Icons">Noun Project</a> (CC BY 3.0)
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Credits
