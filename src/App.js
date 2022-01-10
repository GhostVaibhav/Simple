import { useRef, useEffect } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import OutsideAlerter from "./components/OutsideAlerter";
import Introduction from "./components/Introduction";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
    function handleOpen() {
        if (document.querySelector(".sidebar").classList.contains("-translate-x-full")) {
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
                    <Routes>
                        <Route path="/" element={<Introduction />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;
