import { useRef, useEffect } from "react";
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
    var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw(n|u)|c55\/|capi|ccwa|cdm|cell|chtm|cldc|cmd|co(mp|nd)|craw|da(it|ll|ng)|dbte|dcs|devi|dica|dmob|do(c|p)o|ds(12|d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(|_)|g1 u|g560|gene|gf5|gmo|go(\.w|od)|gr(ad|un)|haie|hcit|hd(m|p|t)|hei|hi(pt|ta)|hp( i|ip)|hsc|ht(c(| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i(20|go|ma)|i230|iac( ||\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|[a-w])|libw|lynx|m1w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|mcr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|([1-8]|c))|phil|pire|pl(ay|uc)|pn2|po(ck|rt|se)|prox|psio|ptg|qaa|qc(07|12|21|32|60|[2-7]|i)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h|oo|p)|sdk\/|se(c(|0|1)|47|mc|nd|ri)|sgh|shar|sie(|m)|sk0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h|v|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl|tdg|tel(i|m)|tim|tmo|to(pl|sh)|ts(70|m|m3|m5)|tx9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }
    return isMobile;
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
            focusableElementsOffsetX: 5,
            focusableElementsOffsetY: 5,
            color: '#9ca3af',
            dotColor: '#93c5fd',
            invert: false,
            mode: 'bouncy',
            focusableElements:
                '[data-blobity], a:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]',
            font: "Inter",
            fontSize: 14,
            fontWeight: 600,
            opacity: 0.75,
            fontColor: '#000000',
            zIndex: -1,
            size: 40,
            radius: 4,
        }
    }
    const blobity = useBlobity(blobProps);
    useEffect(() => {
        if (blobity.current) {
            window.blobity = blobity.current;
        }
    }, [blobity]);
    var challengeBtnCount = 0;
    var challengeBtnCountMax = 10;
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
                    <AnimatePresence>
                        <Routes>
                            <Route path="/" element={<Introduction />} />
                            <Route path="/about" element={<About btnCount={challengeBtnCount} btnCountMax={challengeBtnCountMax} />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </AnimatePresence>
                </Router>
            </div>
        </>
    );
}

export default App;
