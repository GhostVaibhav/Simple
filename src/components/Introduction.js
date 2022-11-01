import React, { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const pageTransition = {
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        x: "-100vw",
    },
    zoomInit: {
        scale: 0,
    },
    zoomFinal: {
        scale: 1,
    },
    zoomBig: {
        scale: 2,
    }
}

function Introduction(props) {
    const navigate = useNavigate();
    let clickCounter = 1;
    function toAbout() {
        if(clickCounter === 7)
            navigate("./about");
        else
            clickCounter++;
    }
    const colors = {
        green: {
            textColor: "text-green-500",
        },
        red: {
            textColor: "text-red-500",
        },
        blue: {
            textColor: "text-indigo-500",
        }
    };
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <div className="-z-10 bg-gray-900 absolute h-screen w-screen overflow-hidden">
                <div className="stars" />
                <div className="twinkling" />
                {!props.isPhone() && <motion.div initial="zoomBig" animate="zoomFinal" exit="zoomBig" transition={{ transition: "linear", duration: 16, delay: 1 }} variants={pageTransition} className="clouds" />}
            </div>
            <div className="flex justify-center items-center text-white h-screen w-screen">
                <div className="w-[90%] md:w-3/4 flex justify-between">
                    <div className="flex flex-col">
                        <div className="relative p-1 md:p-2 m-1 text-5xl overflow-hidden">
                            <div className="opacity-0 select-none">.</div>
                            <motion.div initial="out" animate="in" exit="out" variants={pageTransition} className="absolute text-4xl md:text-5xl">
                                <span data-blobity-magnetic="true" className="py-2 spin_words font-bold block">Hi</span>
                                <span data-blobity-magnetic="true" data-blobity-tooltip="Hi in Hindi" className="py-2 spin_words font-bold block">नमस्ते</span>
                                <span data-blobity-magnetic="true" data-blobity-tooltip="Hi in Spanish" className="py-2 spin_words first-letter:font-bold block">Hola</span>
                                <span data-blobity-magnetic="true" data-blobity-tooltip="Hi in German" className="py-2 spin_words first-letter:font-bold block">Hallo</span>
                                <span data-blobity-magnetic="true" data-blobity-tooltip="Hi in French" className="py-2 spin_words first-letter:font-bold block">Salut</span>
                            </motion.div>
                        </div>
                        <motion.span onClick={toAbout} initial="out" animate="in" exit="out" variants={pageTransition} data-blobity-offset-x="10" style={{ "fontFamily": "Caveat" }} className={`${colors[props.theme].textColor} transition-colors ease-linear duration-500 text-5xl md:text-6xl select-none`}>
                            I'm Vaibhav
                        </motion.span>
                    </div>
                    <motion.div initial="zoomInit" animate="zoomFinal" exit="zoomInit" transition={{ duration: 0.25, delay: 1 }} variants={pageTransition} id="wave" className="self-center text-5xl md:text-7xl select-none">
                        <span data-blobity-magnetic="true" data-blobity-offset-x="8" data-blobity-offset-y="8" data-blobity-radius="48">👋</span>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Introduction