import { useRef, useEffect, useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import OutsideAlerter from "./components/OutsideAlerter";
import Introduction from "./components/Introduction";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import useBlobity from 'blobity/lib/useBlobity';
import { AnimatePresence } from 'framer-motion';

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
    var blobProps;
    if (!isPhone()) {
        blobProps = {
            licenseKey: '...',
            focusableElementsOffsetX: 2,
            focusableElementsOffsetY: 2,
            color: '#9ca3af',
            dotColor: '#93c5fd',
            invert: false,
            mode: 'bouncy',
            focusableElements:
                '[data-blobity], input:not([data-no-blobity]), img:not([data-no-blobity]), article:not([data-no-blobity]), span:not([data-no-blobity]), a:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]',
            font: "Inter",
            fontSize: 14,
            fontWeight: 600,
            opacity: 0.5,
            fontColor: '#000000',
            zIndex: 99,
            size: 40,
            radius: 4,
        }
    }
    else {
        blobProps = {
            licenseKey: '...',
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
    var challengeBtnCount = 0;
    var challengeBtnCountMax = 10;
    function handleOpen() {
        const elem = document.getElementById('in-name');
        const elem2 = document.getElementById('in-email');
        const elem3 = document.getElementById('in-msg');
        if (elem !== document.activeElement && elem2 !== document.activeElement && elem3 !== document.activeElement && document.querySelector(".sidebar").classList.contains("-translate-x-full")) {
            document.querySelector(".sidebar").classList.toggle("-translate-x-full");
            document.querySelector("#menu-button").classList.toggle("hidden");
            document.querySelector("#close-button").classList.toggle("hidden");
        }
    }
    function handleClose() {
        if (!document.querySelector(".sidebar").classList.contains("-translate-x-full")) {
            document.querySelector(".sidebar").classList.toggle("-translate-x-full");
            document.querySelector("#menu-button").classList.toggle("hidden");
            document.querySelector("#close-button").classList.toggle("hidden");
        }
    }
    useKey("ArrowRight", handleOpen);
    useKey("ArrowLeft", handleClose);
    useKey("Escape", handleClose);
    return (
        <>
            <div className="scroll-smooth">
                <Router>
                    <OutsideAlerter>
                        <Navbar />
                    </OutsideAlerter>
                    <AnimatePresence>
                        <Routes>
                            <Route path="/" element={<Introduction />} />
                            <Route path="/about" element={<About isPhone={isPhone} btnCount={challengeBtnCount} btnCountMax={challengeBtnCountMax} />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact verified={verified} setVerified={setVerified} />} />
                        </Routes>
                    </AnimatePresence>
                </Router>
            </div>
        </>
    );
}

export default App;
