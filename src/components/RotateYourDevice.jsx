import React from 'react'
import useWindowSize from '../hooks/useWindowResize';
import isMobileOrTablet from '../utilities/isMobileOrTablet'

const RotateYourDevice = () => {
    const { width: windowWidth, height: windowHeight } = useWindowSize();

    return (
        isMobileOrTablet() && <div className={`fixed top-0 left-0 w-screen h-screen bg-black ${windowWidth <= windowHeight? 'z-[1000]':'-z-50'} flex items-center justify-center`}>
            <div className='text-white text-2xl'>Sorry! This feature is not yet available on mobile devices.</div>
        </div>
    )
}

export default RotateYourDevice