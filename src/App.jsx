import Map from './components/Map'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import ZoomInButton from './components/buttons/ZoomInButton';
import ZoomOutButton from './components/buttons/ZoomOutButton';
import MenuButton from './components/buttons/MenuButton';
import VolumeButton from './components/buttons/VolumeButton';
import RightSideBar from './components/RightSideBar';
import { useState } from 'react';
import useWindowSize from './hooks/useWindowResize';
import RotateYourDevice from './components/RotateYourDevice';
import { useRef } from 'react';
import MapElements from './components/MapElements';
import SideBar from './components/SideBar';
import AboutUsSidebar from './components/AboutUsSideBar';
import { useEffect } from 'react';

function App() {
    const [showRightSideBar, setShowRightSideBar] = useState(false)
    const [showLeftSideBar, setShowLeftSideBar] = useState(false)
    const {width:windowWidth, height:windowHeight} = useWindowSize();

    const [rerenderOnce, setRerenderOnce] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setRerenderOnce(true);
        }, [1000])
    }, [])

    const mapRef = useRef()
    return (
        <>
            <div className='bg-cream h-screen w-screen'>
                <TransformWrapper
                    initialScale={1.4}
                    maxScale={3}
                    centerOnInit
                    wheel={{ step: 0.2 }}
                    panning={{ excluded: ['panningDisabled'] }}
                    pinch={{ excluded: ['pinchDisabled'], step:3 }}
                >
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                        <>
                            <TransformComponent contentStyle={{width: '100%', height: '100%'}} wrapperStyle={{width:'100%', height:'100%'}}>

                                <div className='h-full w-full relative'>
                                    <video ref={mapRef} className="absolute top-0 left-0 -z-10 w-full h-full" autoPlay={true} muted={true} loop={true} playsInline={true}>
                                        <source src={require('./assets/videos/mapp_resize_1.mp4')} type="video/mp4" />
                                    </video>
                                    <MapElements setShowLeftSideBar={setShowLeftSideBar}/>
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
            </div>

            <SideBar showSideBar={showRightSideBar} setShowSideBar={setShowRightSideBar} position="right">
                <AboutUsSidebar setShowSideBar={setShowRightSideBar}/>
            </SideBar>

            <SideBar showSideBar={showLeftSideBar} setShowSideBar={setShowLeftSideBar} position="left">
                <AboutUsSidebar setShowSideBar={setShowLeftSideBar}/>
            </SideBar>

            <RotateYourDevice />
        </>

    );
    }
export default App