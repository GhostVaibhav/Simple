import React, { Component } from 'react';
import { motion } from 'framer-motion';

const pageTransition = {
    initial: {
        x: '100vw'
    },
    enter: {
        x: 0,
    },
}
export class Loader extends Component {
    render() {
        return (
            <div className='overflow-hidden bg-gray-900 w-screen h-screen flex justify-end'>
                <motion.div transition="linear" initial="initial" animate="enter" exit="initial" variants={pageTransition} className="flex items-end">
                    <div className="loadingio-spinner-rolling-cyx4pdgtrgj"><div className="ldio-mffgx1tmlt8">
                        <div></div>
                    </div></div>
                </motion.div>
            </div>
        );
    }
}

export default Loader;
