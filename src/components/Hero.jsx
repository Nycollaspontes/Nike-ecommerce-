import React from 'react'

const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
    return (
        <>
            <div className='relative h-auto w-auto flex flex-col '>
                <div className='bg-theme clip-path h-[85vh] lg: h-[75vh] md: h-[65vh] sm: h-[55vh] w-auto right-0 opacity-100 z-10'></div>
                <div className='relative opacity-100 Z-20 grid items-center justify-items-center nike-container'>
                    <div className='grid items-center justify-items-center mt-28 md: mt-24 '>
                        <h1 className='text-6xl lk'>{title}</h1>
                        <h1 className='text-6xl lk'>{subtitle}</h1>
                        <button>{btntext}</button>
                        {/* <div className=''></div>
                    <div className=''></div> */}
                    </div>
                    <div className=''>
                        <img
                            src={img}
                            alt="hero-img/img"
                            className=''
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero