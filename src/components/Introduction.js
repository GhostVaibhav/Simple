import React, { PureComponent } from 'react'

export default class Introduction extends PureComponent {
    render() {
        return (
            <div>
                <div className='h-screen w-screen flex justify-center items-center text-white bg-gray-900'>
                    <div className='w-3/4'>
                        <div className='overflow-hidden flex flex-col'>
                            <div className='relative text-5xl'>
                                <div className='absolute text-5xl'>
                                    <span className='py-2 spin_words block'>Hi</span>
                                    <span className='py-2 spin_words block'>Hola</span>
                                    <span className='py-2 spin_words block'>Hallo</span>
                                    <span className='py-2 spin_words block'>नमस्ते</span>
                                    <span className='py-2 spin_words block'>Salut</span>
                                </div>
                            </div>
                            <h2 style={{ "fontFamily": "Caveat" }} className='text-indigo-500 text-5xl'>
                                I'm Vaibhav
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
