import React, { useEffect, useRef, useState } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import useWindowSize from '../hooks/useWindowResize'
import MenuButton from './buttons/MenuButton'
import VolumeButton from './buttons/VolumeButton'
import ZoomInButton from './buttons/ZoomInButton'
import ZoomOutButton from './buttons/ZoomOutButton'
import MapElements from './MapElements'

const Map = ({ setShowLeftSideBar, setShowRightSideBar, setLeftSideBarData }) => {
    const {width:windowWidth, height:windowHeight} = useWindowSize();
    const [orientation, setOrientation] = useState('')
    const mapRef = useRef()
    // let orientation = '';

    if(windowWidth && windowHeight){
        mapRef.current?.setAttribute('webkit-playsinline', true)
        if(windowHeight > windowWidth){
            if(orientation !== 'portrait'){
                setOrientation('portrait')
            }
            // orientation = 'portrait'
        }
        else{
            if(orientation !== 'landscape'){
                setOrientation('landscape')
            }
            // orientation = 'landscape'
        }
    }
       
    const initialScale = orientation === 'portrait' ? 3 : 1;
    const maxScale = orientation === 'portrait' ? 8 : 4;
    const minScale = orientation === 'portrait' ? 3 : 1;

    return (
        windowWidth && windowHeight ? <TransformWrapper
            initialScale={initialScale}
            maxScale={maxScale}
            minScale={minScale}
            centerOnInit={false}
            wheel={{ step: 0.2 }}
            panning={{ excluded: ['panningDisabled'] }}
            pinch={{ excluded: ['pinchDisabled'], step: 3 }}
        >
            {({ zoomIn, zoomOut, resetTransform, centerView, ...rest }) => (
                <>
                    <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>
                        <div className='relative'>                            
                            <video ref={mapRef} preload='auto' className="relative z-10" autoPlay={true} muted={true} loop={true} playsInline={true}>
                                <source src={require('../assets/videos/mapp_resize_1.mp4')} type="video/mp4" />
                            </video>
                            <MapElements setShowLeftSideBar={setShowLeftSideBar} setLeftSideBarData={setLeftSideBarData}/>
                        </div>
                    </TransformComponent>

                    <div className="fixed right-10 top-10 space-x-2 flex z-50">
                        <VolumeButton />
                        <MenuButton onMenu={() => setShowRightSideBar(true)} />
                    </div>

                    <div className='fixed right-10 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
                        <ZoomInButton onZoomIn={zoomIn} />
                        <ZoomOutButton onZoomOut={zoomOut} onReset={resetTransform} onCenterView={centerView}/>
                    </div>
                </>
            )}
        </TransformWrapper> : <></>

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