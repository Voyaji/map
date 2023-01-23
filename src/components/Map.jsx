import React, { useEffect, useRef, useState } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import useWindowSize from '../hooks/useWindowResize'
import MenuButton from './buttons/MenuButton'
import VolumeButton from './buttons/VolumeButton'
import ZoomInButton from './buttons/ZoomInButton'
import ZoomOutButton from './buttons/ZoomOutButton'
import MapElements from './MapElements'

const Map = ({ setShowLeftSideBar, setShowRightSideBar, setLeftSideBarData, setShowComingSoon }) => {
    const {width:windowWidth, height:windowHeight} = useWindowSize();
    const [orientation, setOrientation] = useState('')
    const mapRef = useRef()
    
    const [showElements, setShowElements] = useState(false)


    if(windowWidth && windowHeight){
        mapRef.current?.setAttribute('webkit-playsinline', true)
        if(windowHeight > windowWidth){
            if(orientation !== 'portrait'){
                setOrientation('portrait')
            }
        }
        else{
            if(orientation !== 'landscape'){
                setOrientation('landscape')
            }
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
                            <video ref={mapRef} preload='auto' className="relative z-10" autoPlay={true} muted={true} loop={true} playsInline={true} onLoadedData={() => setShowElements(true)}>
                                <source src={require('../assets/videos/map looped.mp4')} type="video/mp4" />
                            </video>
                            {showElements && <MapElements setShowLeftSideBar={setShowLeftSideBar} setLeftSideBarData={setLeftSideBarData} setShowComingSoon={setShowComingSoon}/>}
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
    )
}

export default Map