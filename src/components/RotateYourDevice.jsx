import React from 'react'
import useWindowSize from '../hooks/useWindowResize';

const RotateYourDevice = () => {
    const { width: windowWidth, height: windowHeight } = useWindowSize();


    return (
        <div className={`fixed top-0 left-0 w-screen h-screen bg-black ${windowWidth <= windowHeight? 'z-[1000]':'-z-50'} flex items-center justify-center`}>
            <div className='text-white text-2xl'>Rotate your screen for better experience</div>
        </div>
    )
}

export default RotateYourDevice