import React, { useEffect, useRef, useState } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import useWindowSize from '../hooks/useWindowResize'
import MenuButton from './buttons/MenuButton'
import VolumeButton from './buttons/VolumeButton'
import ZoomInButton from './buttons/ZoomInButton'
import ZoomOutButton from './buttons/ZoomOutButton'
import MapElements from './MapElements'
import MapSVG from '../assets/images/MAP-blank.svg'

const Map = ({ setShowLeftSideBar, setShowRightSideBar }) => {
    const {width:windowWidth, height:windowHeight} = useWindowSize();
    const [showControls, setShowControls] = useState(false)

    const mapRef = useRef()
    
    useEffect(() => {
        setTimeout(() => {
            setShowControls(true)
            mapRef.current.click()
        }, [1000])
    }, [])

    return (
        <TransformWrapper
            initialScale={3}
            maxScale={8}
            minScale={3}
            centerOnInit
            wheel={{ step: 0.2 }}
            panning={{ excluded: ['panningDisabled'] }}
            pinch={{ excluded: ['pinchDisabled'], step: 3 }}
        >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <>
                    <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>

                        {/* <img src={MapSVG} className="h-full w-full" alt=""/> */}
                        {/* <img src={require('../assets/images/big-image.jpeg')} className="h-full w-full" alt=""/> */}
                        <div className='relative bg-blue-300'>
                            
                            <video ref={mapRef} preload={true} className="relative z-10 bg-yellow-300" autoPlay={true} muted={true} loop={true} playsInline={true} webkit-playsinline={true}>
                                <source src={require('../assets/videos/mapp_resize_1.mp4')} type="video/mp4" />
                            </video>
                            <MapElements setShowLeftSideBar={setShowLeftSideBar} />
                        </div>
                    </TransformComponent>

                    {showControls && <><div className="fixed right-10 top-10 space-x-2 flex z-50">
                        <VolumeButton />
                        <MenuButton onMenu={() => setShowRightSideBar(true)} />
                    </div>

                    <div className='fixed right-10 top-1/2 translate-y-1/2 flex flex-col justify-center items-center'>
                        <ZoomInButton onZoomIn={zoomIn} />
                        <ZoomOutButton onZoomOut={zoomOut} />
                    </div></>}
                </>
            )}
        </TransformWrapper>

    //     <TransformWrapper
    //     initialScale={1.4}
    //     maxScale={3}
    //     centerOnInit
    //     wheel={{ step: 0.2 }}
    //     panning={{ excluded: ['panningDisabled'] }}
    //     pinch={{ excluded: ['pinchDisabled'], step: 3 }}
    // >
    //     {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
    //         <>
    //             <TransformComponent contentStyle={{ width: '100%', height: '100%' }} wrapperStyle={{ width: '100%', height: '100%' }}>

    //                 <div className='h-full w-full relative'>
    //                     <video preload={true} ref={mapRef} className="absolute top-0 left-0 -z-10 w-full h-full" autoPlay={true} muted={true} loop={true} playsInline={true} webkit-playsinline={true}>
    //                         <source src={require('../assets/videos/mapp_resize_1.mp4')} type="video/mp4" />
    //                     </video>
    //                     <MapElements setShowLeftSideBar={setShowLeftSideBar} />
    //                 </div>
    //             </TransformComponent>

    //             <div className="fixed right-10 top-10 space-x-2 flex z-50">
    //                 <VolumeButton />
    //                 <MenuButton onMenu={() => setShowRightSideBar(true)} />
    //             </div>

    //             <div className='fixed right-10 top-0 bottom-0 h-full flex flex-col justify-center items-center'>
    //                 <ZoomInButton onZoomIn={zoomIn} />
    //                 <ZoomOutButton onZoomOut={zoomOut} />
    //             </div>
    //         </>
    //     )}
    // </TransformWrapper>
    )
}

export default Map