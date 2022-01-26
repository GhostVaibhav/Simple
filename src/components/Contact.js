import React from 'react'

function getRandomInt(ranges) {
    var min = ranges[0]
    var max = ranges[1]
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function Contact() {
    const delay = [0, 8]
    const dur = [1, 5]
    return (
        <div>
            <div className='h-screen w-screen bg-gray-900 flex justify-center items-center'>
                <div className='z-10 absolute h-screen w-screen opacity-60 blur-2xl overflow-hidden'>
                    <div className='absolute top-1/2 md:top-1/4 left-[10%] md:left-1/4 h-1/3 md:h-auto md:w-1/3 aspect-square bg-purple-300 rounded-full mix-blend-multiply filter animate-something animation-delay-2000'></div>
                    <div className='absolute top-1/2 md:top-1/4 left-[15%] md:left-[45%] h-1/3 md:h-auto md:w-1/3 aspect-square bg-yellow-300 rounded-full mix-blend-multiply filter animate-something'></div>
                    <div className='absolute top-1/3 md:top-[20%] left-[15%] md:left-[45%] h-1/3 md:h-auto md:w-1/3 aspect-square bg-pink-300 rounded-full mix-blend-multiply filter animate-something animation-delay-4000'></div>
                </div>
                <div className='z-20 flex justify-center backdrop-blur-2xl rounded-lg'>
                    <div className='flex flex-col md:flex-row items-center border border-gray-800 bg-opacity-80 bg-gray-700 rounded-lg'>
                        <div style={{ fontFamily: 'Caveat' }} className='font-extrabold mt-3 m-2 text-indigo-500 text-5xl w-full md:ml-6 md:mr-20'>📑Contact Me</div>
                        <form action="https://formcarry.com/s/rJM8b8RJ5Ob" method="POST" acceptCharset="UTF-8" className='flex flex-col text-white my-4 md:mr-6 m-2 justify-center w-[90%]'>
                            <input name='firstName' spellCheck='false' className='w-full m-2 self-center p-2 rounded-md bg-gray-800' placeholder='Name' type="text" />
                            <input name="email" className='w-full m-2 self-center p-2 rounded-md bg-gray-800' placeholder='Email*' type="email" required />
                            <input name='anotherInput' spellCheck='false' autoComplete='off' className='resize-none w-full m-2 self-center p-2 rounded-md bg-gray-800' placeholder='Message*' type="text" required />
                            <button className='m-2 w-fit self-end p-1 border-2 border-transparent focus:border-indigo-900 bg-indigo-700 rounded-md' type='submit'>Submit</button>
                            <input type="hidden" name="_gotcha" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
