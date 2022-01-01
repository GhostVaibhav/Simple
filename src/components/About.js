import React from 'react';
import { Popover } from '@headlessui/react'
import Github from '../images/github.svg'
import Gmail from '../images/gmail.svg'
import Linkedin from '../images/linkedin.svg'

function getRandomInt(ranges) {
    var min = ranges[0]
    var max = ranges[1]
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export default function About() {
    const delay = [0, 8]
    const dur = [1, 5]
    return (
        <div>
            <div className='relative overflow-x-hidden overflow-y-hidden max-h-max flex flex-col items-center p-10'>
                {/* Grid background */}
                <div className='absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-12 scale-150'>
                    {/* Row 1 */}
                    <div className='col-span-2 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-5 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-1 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-4 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    {/* Row 2 */}
                    <div className='col-span-5 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-3 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-2 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-2 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    {/* Row 3 */}
                    <div className='col-span-4 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-5 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-3 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    {/* Row 4 */}
                    <div className='col-span-4 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-4 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-3 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-1 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    {/* Row 5 */}
                    <div className='col-span-2 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-4 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-3 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-3 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    {/* Row 6 */}
                    <div className='col-span-5 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-1 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-6 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    {/* Row 7 */}
                    <div className='col-span-1 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-2 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-8 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-1 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    {/* Row 8 */}
                    <div className='col-span-6 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-4 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-2 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    {/* Row 9 */}
                    <div className='col-span-1 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-2 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-8 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-1 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    {/* Row 10 */}
                    <div className='col-span-4 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-4 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-2 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-2 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    {/* Row 11 */}
                    <div className='col-span-6 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-1 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-4 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-1 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    {/* Row 12 */}
                    <div className='col-span-1 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-2 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-8 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-1 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    {/* Row 13 */}
                    <div className='col-span-2 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-2 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-8 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    {/* Row 14 */}
                    <div className='col-span-1 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-2 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-4 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-2 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-3 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    {/* Row 15 */}
                    <div className='col-span-6 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-6 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    {/* Row 16 */}
                    <div className='col-span-2 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-5 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-1 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-4 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    {/* Row 17 */}
                    <div className='col-span-5 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-3 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-2 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-2 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    {/* Row 18 */}
                    <div className='col-span-4 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-5 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                    <div className='col-span-3 bg-gray-800 rounded animate-pulse' style={{ animationDelay: `${getRandomInt(delay)}s`, animationDuration: `${getRandomInt(dur)}s` }}></div>
                </div>
                {/* Content */}
                <div className='w-[90vw] h-min md:w-9/12 lg:w-7/12 relative'>
                    <div className='p-2 md:p-4 bg-gray-700 bg-opacity-80 border-gray-600 border rounded-lg'>
                        <h1 className='p-2 text-2xl lg:text-4xl text-white font-bold'>
                            <span className='text-indigo-500 text-3xl lg:text-5xl' style={{ "fontFamily": 'Caveat' }}>About </span> Me
                        </h1>
                        <article className='pt-2 md:pt-0 px-4 text-black dark:text-white'>
                            <span className="text-indigo-300">Hi</span>👋, my name is<a target="_blank" rel="noreferrer" className="lg:underline-offset-2 underline hover:decoration-transparent decoration-teal-500 hover:bg-gray-600 rounded-md p-1" href='https://www.linkedin.com/in/ghost-vaibhav/'><strong>Vaibhav Sharma!</strong></a>I am a student currently pursuing
                            <strong> Bachelor of Technology in Computer Science</strong> from<a target="_blank" rel="noreferrer" className="lg:underline-offset-2 underline hover:decoration-transparent decoration-blue-500 hover:bg-gray-600 rounded-md p-1" href='https://vit.ac.in'>Vellore Institute of Technology</a>,<a className="lg:underline-offset-2 underline decoration-indigo-500 hover:bg-gray-600 hover:decoration-transparent p-1 rounded-md" target="_blank" rel="noreferrer" href='https://goo.gl/maps/gosdtXmyUZt5scTE8'>Vellore</a>🏛️.
                            I am a keen learner proficient in C, C++, HTML, CSS, Python, JavaScript, React, TailwindCSS, Bootstrap, Git, Docker, deployment tools <i>(Heroku, Netlify, etc.)</i> and various CI/CD tools <i>(GitHub Actions, TravisCI, CircleCI, etc.)</i>.
                        </article>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                        <div className='my-2 mt-4 md:m-2 md:mt-4 md:ml-0 md:w-2/3 p-2 md:p-4 bg-gray-700 bg-opacity-80 border-gray-600 border rounded-lg'>
                            <h1 className='p-2 text-2xl lg:text-4xl text-white font-bold'>
                                <span className='text-indigo-500 text-3xl lg:text-5xl' style={{ "fontFamily": 'Caveat' }}>Education</span>
                            </h1>
                            <article className='pt-2 md:pt-0 px-4 text-black dark:text-white'>
                                I am currently a <strong>2nd year student</strong> in <a target="_blank" rel="noreferrer" className="lg:underline-offset-2 underline hover:decoration-transparent decoration-blue-500 hover:bg-gray-600 rounded-md p-1" href='https://vit.ac.in'>Vellore Institute of Technology</a>,<a className="lg:underline-offset-2 underline decoration-indigo-500 hover:bg-gray-600 hover:decoration-transparent p-1 rounded-md" target="_blank" rel="noreferrer" href='https://goo.gl/maps/aPnJgz6SgxoMomna8'>Vellore</a>🏛️ pursuing my <strong>Bachelor of Technology <i>(B.Tech)</i> in Computer Science with specialisation in Blockchain Technology</strong> with a<Popover className="p-1 hover:bg-gray-600 rounded-lg inline"><Popover.Button>CGPA</Popover.Button><Popover.Panel className="absolute p-2 bg-gray-700 border border-gray-600 rounded-md"><div>Cumulative Grade Point Average</div></Popover.Panel></Popover>of <strong>9.0</strong>.
                                I completed my schooling from<a target="_blank" rel="noreferrer" className="lg:underline-offset-2 underline hover:decoration-transparent decoration-green-500 hover:bg-gray-600 rounded-md p-1" href='https://tafssp.com/'>The Air Force School</a>,<a className="lg:underline-offset-2 underline decoration-green-500 hover:bg-gray-600 hover:decoration-transparent p-1 rounded-md" target="_blank" rel="noreferrer" href='https://goo.gl/maps/xQJk7qTvCZ2mhc4H7'>New Delhi</a>🏫 with a score of <strong>96.2% in AISSCE</strong>.
                                I have avid interest in <div className='inline font-bold text-green-400'>Mathematics</div>, <div className='inline font-bold text-red-400'>Physics</div> and <div className='inline font-bold text-teal-400'>Computer Science</div>.
                            </article>
                        </div>
                        <div className='my-2 mt-4 md:m-2 md:mt-4 md:mr-0 md:w-1/3 p-2 md:p-4 flex flex-col md:items-center bg-gray-700 bg-opacity-80 border-gray-600 border rounded-lg'>
                            <h1 className='p-2 text-2xl lg:text-4xl text-white font-bold'>
                                My <span className='text-indigo-500 text-3xl lg:text-5xl' style={{ "fontFamily": 'Caveat' }}>Location</span>
                            </h1>
                            <iframe className='rounded-lg w-full h-full' title="map" style={{ "border": 0, "filter": "invert(100%)" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.065053328835!2d77.13053618124533!3d28.629274668703356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03245972a8ff%3A0x22f0733cd9d891f3!2sNaraina%20Vihar%2C%20Naraina%2C%20New%20Delhi%2C%20Delhi%20110028!5e0!3m2!1sen!2sin!4v1640848168393!5m2!1sen!2sin" allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                    <div className='my-2 mt-4 md:m-2 md:mt-4 md:mx-0 p-2 md:p-4 bg-gray-700 bg-opacity-80 border-gray-600 border rounded-lg'>
                        <h1 className='p-2 text-2xl lg:text-4xl text-white font-bold'>
                            My <span className='text-indigo-500 text-3xl lg:text-5xl' style={{ "fontFamily": 'Caveat' }}>Hobbies</span>
                        </h1>
                        <article className='pt-2 md:pt-0 px-4 text-black dark:text-white'>
                            My hobbies include sports like <strong className='italic'>Cricket</strong>, <strong className='italic'>Badminton</strong> and <strong className='italic'>Football</strong>. I'm also interested in <div className='inline font-bold text-teal-400'>creating music</div> and <div className='inline font-bold text-blue-400'>challenging puzzles</div>.
                            I'm also interested in <strong>reading and doing</strong> a lot of different things from a variety of domains in <div className='inline text-red-400 font-bold'>Computer Science</div>.
                        </article>
                    </div>
                    <div className='flex flex-col md:flex-row w-full'>
                        <div className='my-2 mt-4 w-full md:w-1/2 md:m-2 md:mt-4 md:ml-0 p-2 md:p-4 flex flex-row bg-gray-700 bg-opacity-80 border-gray-600 border rounded-lg'>
                            <h1 className='p-2 text-2xl lg:text-4xl text-white font-bold'>
                                Let's stay <span className='text-indigo-500 text-3xl lg:text-5xl' style={{ "fontFamily": 'Caveat' }}>connected</span>
                            </h1>
                            <div className='flex self-center w-full py-2 md:w-[50%] justify-evenly'>
                                <a className="transform transition-all duration-200 hover:scale-105 px-2" href="https://github.com/GhostVaibhav" rel="noreferrer" target="_blank"><img className='w-10' src={Github}></img></a>
                                <a className="transform transition-all duration-200 hover:scale-105 px-2" href="mailto:sharmavaibhav110028@gmail.com" rel="noreferrer" target="_blank"><img className='w-10' src={Gmail}></img></a>
                                <a className="transform transition-all duration-200 hover:scale-105 px-2" href="https://www.linkedin.com/in/ghost-vaibhav/" rel="noreferrer" target="_blank"><img className='w-10' src={Linkedin}></img></a>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 my-2 mt-4 md:m-2 md:mt-4 md:mr-0 pt-1 pb-2 px-2 md:px-4 md:pt-2 md:pb-4 flex flex-row bg-gray-700 bg-opacity-80 border-gray-600 border rounded-lg'>
                            <h1 className='text-center self-center text-2xl lg:text-4xl text-white font-bold'>
                                Some secrets to be <span className='text-indigo-500 text-3xl lg:text-5xl' style={{ "fontFamily": 'Caveat' }}>shared</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}