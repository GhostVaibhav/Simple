import React from 'react';

function Navbar() {
    return (
        <div>
            {/* Sidebar */}
            <div className='border-r-gray-700 md:border-gray-700 rounded-none md:rounded-lg border-r-[1px] md:border fixed md:opacity-95 h-screen md:h-[96vh] bg-gray-800 top-0 md:top-[2vh] left-0 md:left-3 z-10'>
                {/* Logo */}
                <div className='flex p-2 mt-2 mr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="white">
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    <div className='inline self-center text-white font-bold text-3xl' style={{ "fontFamily": "Caveat" }}>
                        Vaibhav
                    </div>
                </div>
                {/* Navbar */}
                <nav className='text-white'>
                    <div>
                        <a href='#'>
                            <div className='rounded-md hover:bg-gray-700 m-1 mx-2 p-2 pr-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                                Home
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href='#'>
                            <div className='rounded-md hover:bg-gray-700 m-1 mx-2 p-2 pr-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline mx-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                                Projects
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href='#'>
                            <div className='rounded-md hover:bg-gray-700 m-1 mx-2 p-2 pr-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                                About Me
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href='#'>
                            <div className='rounded-md hover:bg-gray-700 m-1 mx-2 p-2 pr-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                Contact Me
                            </div>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
