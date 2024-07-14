import { useRef, useEffect, useState, lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import useBlobity from "blobity/lib/useBlobity";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
const About = lazy(() => import("./components/About"));
const OutsideAlerter = lazy(() => import("./components/OutsideAlerter"));
const Introduction = lazy(() => import("./components/Introduction"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Credits = lazy(() => import("./components/Credits"));

function isPhone() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

function useKey(key, cb) {
    const callbackRef = useRef(cb);
    useEffect(() => {
        callbackRef.current = cb;
    });

    useEffect(() => {
        function handle(event) {
            if (event.code === key)
                callbackRef.current(event)
        }
        document.addEventListener("keydown", handle)
        return () => document.removeEventListener("keydown", handle);
    }, [key]);
}

function App() {
    const [sidebar, setSidebar] = useState(false);
    var blobProps;
    if (!isPhone()) {
        blobProps = {
            licenseKey: "...",
            focusableElementsOffsetX: 2,
            focusableElementsOffsetY: 2,
            color: "#9ca3af",
            dotColor: "#93c5fd",
            invert: false,
            mode: "bouncy",
            focusableElements:
                "[data-blobity], input:not([data-no-blobity]), img:not([data-no-blobity]), article:not([data-no-blobity]), span:not([data-no-blobity]), a:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
            font: "Inter",
            fontSize: 14,
            fontWeight: 600,
            opacity: 0.5,
            fontColor: "#000000",
            zIndex: 99,
            size: 40,
            radius: 4,
        }
    }
    else {
        blobProps = {
            licenseKey: "...",
            opacity: 0,
            zIndex: -999,
            size: 0,
            radius: 0,
        }
    }
    const blobity = useBlobity(blobProps);
    useEffect(() => {
        if (blobity.current) {
            window.blobity = blobity.current;
        }
    }, [blobity]);
    const [verified, setVerified] = useState(false);
    const challengeBtnCountMax = 10;
    const [challengeBtn, setChallengeBtn] = useState(1);
    const [theme, setTheme] = useState("dark");
    function inInput() {
        var elem = [
            document.getElementById("in-name"),
            document.getElementById("in-email"),
            document.getElementById("in-msg"),
        ];
        if(document.getElementById("theme-switch") !== null)
            elem.push(...document.getElementById("theme-switch").childNodes);
        if (document.activeElement in elem)
            return true;
        return false;
    }
    function handleOpen() {
        if (!inInput() && document.querySelector(".sidebar").classList.contains("-translate-x-[11rem]")) {
            document.querySelector(".sidebar").classList.toggle("-translate-x-[11rem]");
            document.querySelector("#menu-button").classList.toggle("hidden");
            document.querySelector("#close-button").classList.toggle("hidden");
            if (isPhone())
                document.querySelector(".open-button").classList.toggle("hidden");
        }
        setSidebar(true);
    }
    function handleClose() {
        if (!inInput() && !document.querySelector(".sidebar").classList.contains("-translate-x-[11rem]")) {
            document.querySelector(".sidebar").classList.toggle("-translate-x-[11rem]");
            document.querySelector("#menu-button").classList.toggle("hidden");
            document.querySelector("#close-button").classList.toggle("hidden");
            if (isPhone())
                document.querySelector(".open-button").classList.toggle("hidden");
        }
        setSidebar(false);
    }
    useKey("ArrowRight", handleOpen);
    useKey("ArrowLeft", handleClose);
    useKey("Escape", handleClose);
    return (
        <>
            <div className="scroll-smooth">
                <Suspense fallback={<Loader theme={theme} />}>
                    <Router>
                        <OutsideAlerter isPhone={isPhone}>
                            <Navbar isPhone={isPhone} sidebar={sidebar} theme={theme} setTheme={setTheme} setSidebar={setSidebar} handleClose={handleClose} handleOpen={handleOpen} useKey={useKey} />
                        </OutsideAlerter>
                        <AnimatePresence>
                            <Routes>
                                <Route path="/" element={<Introduction isPhone={isPhone} theme={theme} />} />
                                <Route path="/about" element={<About isPhone={isPhone} theme={theme} setChallengeBtn={setChallengeBtn} challengeBtn={challengeBtn} btnCountMax={challengeBtnCountMax} />} />
                                <Route path="/projects" element={<Projects theme={theme} isPhone={isPhone} />} />
                                <Route path="/contact" element={<Contact theme={theme} verified={verified} setVerified={setVerified} />} />
                                <Route path="/credits" element={<Credits theme={theme} />} />
                            </Routes>
                        </AnimatePresence>
                    </Router>
                </Suspense>
            </div>
        </>
    );
}

export default App;
