import React from 'react'

function Contact() {
    return (
        <div className='text-white bg-gray-900 w-screen h-screen flex justify-center items-center'>
            <div className='flex justify-center'>
                <div className='drop-shadow-lg flex flex-col md:flex-row items-center border border-gray-800 bg-opacity-80 bg-gray-700 rounded-lg'>
                    <div style={{ fontFamily: 'Caveat' }} className='font-extrabold mt-3 m-2 text-indigo-500 text-5xl w-full md:ml-6 md:mr-20'>📑Contact Me</div>
                    <form action="https://formcarry.com/s/rJM8b8RJ5Ob" method="POST" acceptCharset="UTF-8" className='flex flex-col my-4 md:mr-6 m-2 justify-center w-[90%]'>
                        <input name='firstName' spellCheck='false' className='w-full m-2 self-center p-2 rounded-md bg-gray-800' placeholder='Name' type="text" />
                        <input name="email" className='w-full m-2 self-center p-2 rounded-md bg-gray-800' placeholder='Email' type="email" />
                        <input name='anotherInput' spellCheck='false' className='resize-none w-full m-2 self-center p-2 rounded-md bg-gray-800' placeholder='Message' type="text" />
                        <button className='m-2 w-fit self-end p-1 border-2 border-transparent focus:border-indigo-900 bg-indigo-700 rounded-md' type='submit'>Submit</button>
                        <input type="hidden" name="_gotcha" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
