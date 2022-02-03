import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';

const pageTransition = {
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        x: '-100vw',
    },
    upIn: {
        opacity: 1,
        y: 0,
    },
    upOut: {
        opacity: 0,
        y: '-100vh',
    },
    downOut: {
        opacity: 0,
        y: '100vh',
    },
    comeLeftOut: {
        opacity: 0,
        x: '100vw',
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

function Contact(props) {
    const success = () => {
        props.setVerified(true);
        document.getElementById("open").classList.remove("hidden");
        document.getElementById("dis").classList.add("hidden");
    }
    const expire = () => {
        props.setVerified(false);
        document.getElementById("open").classList.add("hidden");
        document.getElementById("dis").classList.remove("hidden");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(props.verified)
            document.getElementById("form").submit();
    }
    const rekey = process.env.REACT_APP_RECAPTCHA_KEY;
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <div className='h-screen w-screen bg-gray-900 flex justify-center items-center'>
                <div className='z-10 absolute h-screen w-screen !opacity-60 blur-2xl overflow-hidden'>
                    <div className='absolute top-1/2 md:top-1/4 left-[10%] md:left-1/4 h-1/3 md:h-auto md:w-1/3 aspect-square bg-purple-300 rounded-full mix-blend-multiply filter animate-something animation-delay-2000' />
                    <div className='absolute top-1/2 md:top-1/4 left-[15%] md:left-[45%] h-1/3 md:h-auto md:w-1/3 aspect-square bg-yellow-300 rounded-full mix-blend-multiply filter animate-something' />
                    <motion.div transition={trans} initial="upOut" animate="upIn" exit="upOut" variants={pageTransition} className='absolute top-1/3 md:top-[20%] left-[15%] md:left-[45%] h-1/3 md:h-auto md:w-1/3 aspect-square bg-pink-300 rounded-full mix-blend-multiply filter animate-something animation-delay-4000' />
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='z-20 flex justify-center backdrop-blur-2xl rounded-lg'>
                    <div className='flex flex-col md:flex-row items-center border border-gray-800 bg-opacity-80 bg-gray-700 rounded-lg'>
                        <div data-blobity-offset-y="10" style={{ fontFamily: 'Caveat' }} className='text-center font-extrabold mt-6 pr-3 md:pr-0 m-2 text-indigo-500 text-5xl w-full md:ml-6 md:mr-20'>📑Contact Me</div>
                        <form id="form" onSubmit={handleSubmit} action="https://formcarry.com/s/rJM8b8RJ5Ob" method="POST" acceptCharset="UTF-8" className='flex flex-col text-white my-4 md:mr-6 m-2 justify-center w-[90%]'>
                            <input id='in-name' data-blobity-radius="8" name='firstName' spellCheck='false' className='w-full m-2 self-center p-2 rounded-md bg-gray-800' placeholder='Name' type="text" />
                            <input id='in-email' data-blobity-radius="8" name="email" className='w-full m-2 self-center p-2 rounded-md bg-gray-800' placeholder='Email*' type="email" required />
                            <input id='in-msg' data-blobity-radius="8" name='anotherInput' spellCheck='false' autoComplete='off' className='resize-none w-full m-2 self-center p-2 rounded-md bg-gray-800' placeholder='Message*' type="text" required />
                            <span className='mr-4 md:mr-0 mt-1 w-fit' required>
                            <ReCAPTCHA onErrored={expire} onExpired={expire} onChange={success} className="w-fit" sitekey={rekey} theme="dark"/>
                            </span>
                            <button id="open" data-blobity-radius="8" className='hidden cursor-none m-2 w-fit self-end p-1 border-2 border-transparent focus:border-indigo-900 bg-indigo-700 rounded-md' type='submit'>Submit</button>
                            <button onClick={handleSubmit} disabled id="dis" data-blobity-radius="8" className='cursor-none m-2 w-fit self-end p-1 border-2 border-transparent focus:border-indigo-500 bg-indigo-400 rounded-md' type='button'>Submit</button>
                            <input type="hidden" name="_gotcha" />
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact
