import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
                            <div className='text-gray-900'>V</div>
                            <div className='absolute text-4xl md:text-5xl'>
                                <span className='py-2 spin_words font-bold block'>Hi</span>
                                <span className='py-2 spin_words font-bold block'>नमस्ते</span>
                                <span className='py-2 spin_words first-letter:font-bold block'>Hola</span>
                                <span className='py-2 spin_words first-letter:font-bold block'>Hallo</span>
                                <span className='py-2 spin_words first-letter:font-bold block'>Salut</span>
                            </div>
                        </div>
                        <h2 style={{ "fontFamily": "Caveat" }} className='text-indigo-500 text-5xl md:text-6xl'>
                            I'm Vaibhav
                        </h2>
                    </div>
                    <div data-aos="zoom-in" id="wave" className='self-center text-5xl md:text-7xl select-none cursor-pointer'>
                        👋
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction