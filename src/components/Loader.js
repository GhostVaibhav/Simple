import React, { Component } from 'react';

export class Loader extends Component {
    render() {
        return (
            <div className='overflow-hidden bg-gray-900 w-screen h-screen flex justify-end'>
                <div className="flex items-end">
                    <div className="loadingio-spinner-rolling-cyx4pdgtrgj"><div className="ldio-mffgx1tmlt8">
                        <div></div>
                    </div></div>
                </div>
            </div>
        );
    }
}

export default Loader;
