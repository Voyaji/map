import React, { useRef } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import useWindowSize from '../hooks/useWindowResize'
import MenuButton from './buttons/MenuButton'
import VolumeButton from './buttons/VolumeButton'
import ZoomInButton from './buttons/ZoomInButton'
import ZoomOutButton from './buttons/ZoomOutButton'
import MapElements from './MapElements'

const Map = ({setShowLeftSideBar, setShowRightSideBar}) => {
    const mapRef = useRef()
    const {width:windowWidth, height:windowHeight} = useWindowSize();



    return (
        <TransformWrapper
            initialScale={1.4}
            maxScale={3}
            centerOnInit
            wheel={{ step: 0.2 }}
            panning={{ excluded: ['panningDisabled'] }}
            pinch={{ excluded: ['pinchDisabled'], step: 3 }}
        >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <>
                    <TransformComponent contentStyle={{ width: windowWidth, height: windowHeight }}>

                        <div className='h-full w-full relative'>
                            <video ref={mapRef} className="absolute top-0 left-0 -z-10 w-full h-full" autoPlay={true} muted={true} loop={true} playsInline={true}>
                                <source src={require('../assets/videos/mapp_resize_1.mp4')} type="video/mp4" />
                            </video>
                            <MapElements setShowLeftSideBar={setShowLeftSideBar} />
                        </div>
                    </TransformComponent>

                    <div className="fixed right-10 top-10 space-x-2 flex z-50">
                        <VolumeButton />
                        <MenuButton onMenu={() => setShowRightSideBar(true)} />
                    </div>

                    <div className='fixed right-10 top-0 bottom-0 h-full flex flex-col justify-center items-center'>
                        <ZoomInButton onZoomIn={zoomIn} />
                        <ZoomOutButton onZoomOut={zoomOut} />
                    </div>
                </>
            )}
        </TransformWrapper>
    )
}

export default Map