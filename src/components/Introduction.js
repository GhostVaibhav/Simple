import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const pageTransition = {
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        x: '-100vw',
    },
    zoomInit: {
        scale: 0,
    },
    zoomFinal: {
        scale: 1,
    }
}

function Introduction() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <div className='flex justify-center items-center text-white bg-gray-900 h-screen w-screen'>
                <div className='w-[90%] md:w-3/4 flex justify-between'>
                    <div className='flex flex-col'>
                        <div className='relative p-1 m-1 text-5xl overflow-hidden'>
                            <div className='text-gray-900 select-none'>V</div>
                            <motion.div initial="out" animate="in" exit="out" variants={pageTransition} className='absolute text-4xl md:text-5xl'>
                                <span className='py-2 spin_words font-bold block'>Hi</span>
                                <span data-blobity-magnetic="true" data-blobity-tooltip="Hi in Hindi" className='py-2 spin_words font-bold block'>नमस्ते</span>
                                <span data-blobity-magnetic="true" data-blobity-tooltip="Hi in Spanish" className='py-2 spin_words first-letter:font-bold block'>Hola</span>
                                <span data-blobity-magnetic="true" data-blobity-tooltip="Hi in German" className='py-2 spin_words first-letter:font-bold block'>Hallo</span>
                                <span data-blobity-magnetic="true" data-blobity-tooltip="Hi in French" className='py-2 spin_words first-letter:font-bold block'>Salut</span>
                            </motion.div>
                        </div>
                        <motion.span initial="out" animate="in" exit="out" variants={pageTransition} data-blobity-offset-x="10" style={{ "fontFamily": "Caveat" }} className='text-indigo-500 text-5xl md:text-6xl'>
                            I'm Vaibhav
                        </motion.span>
                    </div>
                    <motion.div initial="zoomInit" animate="zoomFinal" exit="zoomInit" transition={{ duration: 0.25 }} variants={pageTransition} id="wave" className='self-center text-5xl md:text-7xl select-none'>
                        <span data-blobity-magnetic="true" data-blobity-offset-x="8" data-blobity-offset-y="8" data-blobity-radius="48">👋</span>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Introduction