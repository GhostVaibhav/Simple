import { Link } from 'react-router-dom';

function click() {
    if (document.querySelector("#challenge-button").classList.contains("hidden")) {
        document.querySelector(".sidebar").classList.toggle("-translate-x-full");
        document.querySelector("#menu-button").classList.toggle("hidden");
        document.querySelector("#close-button").classList.toggle("hidden");
    }
    else {
        window.open("#");
        document.querySelector("#challenge-button").classList.toggle("hidden");
        document.querySelector("#menu-button").classList.toggle("hidden");
    }
}

function Navbar() {
    return (
        <div>
            {/* Sidebar */}
            <div className='z-50 sidebar border-r-gray-700 border-r-[1px] fixed md:opacity-95 h-screen bg-gray-800 top-0 left-0 transform -translate-x-full transition duration-200 ease-in-out'>
                {/* Logo */}
                <Link to="/">
                    <article className='flex p-2 mt-2 mr-2 text-white'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="white">
                                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className='inline self-center font-bold text-3xl' style={{ "fontFamily": "Caveat" }}>
                            Vaibhav
                        </div>
                    </article>
                </Link>
                {/* Navbar */}
                <nav className='text-white'>
                    <div>
                        <Link to="/">
                            <div data-no-blobity className='m-1 mx-2'>
                                <article data-blobity-magnetic="true" data-blobity-radius="12" className='rounded-md hover:bg-gray-700 md:hover:bg-gray-800 p-2 pr-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                    Home
                                    {/* <svg className="inline w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="white" d="M10,7V9H12V17H14V7H10M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
                                </svg> */}
                                </article>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/projects">
                            <div data-no-blobity className='m-1 mx-2'>
                                <article data-blobity-magnetic="true" data-blobity-radius="12" className='rounded-md hover:bg-gray-700 md:hover:bg-gray-800 p-2 pr-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline mx-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                    Projects
                                    {/* <svg className="inline w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="white" d="M9,7V9H13V11H11A2,2 0 0,0 9,13V17H11L15,17V15H11V13H13A2,2 0 0,0 15,11V9A2,2 0 0,0 13,7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
                                </svg> */}
                                </article>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/about">
                            <div data-no-blobity className='m-1 mx-2'>
                                <article data-blobity-magnetic="true" data-blobity-radius="12" className='rounded-md hover:bg-gray-700 md:hover:bg-gray-800 p-2 pr-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                                    </svg>
                                    About Me
                                    {/* <svg className="inline w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="white" d="M15,15V13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 15,10.5V9C15,7.89 14.1,7 13,7H9V9H13V11H11V13H13V15H9V17H13A2,2 0 0,0 15,15M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
                                </svg> */}
                                </article>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="contact">
                            <div data-no-blobity className='m-1 mx-2'>
                                <article data-blobity-magnetic="true" data-blobity-radius="12" className='hover:bg-gray-700 md:hover:bg-gray-800 rounded-md p-2 pr-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                    Contact Me
                                    {/* <svg className="inline w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="white" d="M9,7V13H13V17H15V7H13V11H11V7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
                                </svg> */}
                                </article>
                            </div>
                        </Link>
                    </div>
                </nav>
                {/* Opening button */}
                <div>
                    <button onClick={click} className='cursor-none open-button transition duration-150 focus:outline-none opacity-90 backdrop-blur-xl fixed mx-0 m-2 p-4 rounded-full bg-gray-900 hover:bg-gray-700 border border-gray-700 z-10 -right-16 top-0 text-white'>
                        <div id="menu-button" className='block'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <div id="challenge-button" className='hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div id="close-button" className='hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
