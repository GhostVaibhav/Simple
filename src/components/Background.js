import React, { PureComponent } from 'react'

export default class Background extends PureComponent {
    render() {
        return (
            <div>
                <section className=''>
                    <div className='h-screen'></div>
                    <img style={{ position: 'sticky', top: 0, objectFit: "cover", maxWidth: '100vw' }} className='w-screen h-screen' alt="This is something else" src={bg}></img>
                    <img style={{ position: 'sticky', top: 0, objectFit: "cover", maxWidth: '100vw' }} className='w-screen h-screen' alt="This is something else" src={fg}></img>
                    <div className='h-screen'></div>
                </section>
            </div>
        )
    }
}
