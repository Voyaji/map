import Map from './components/Map'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import ZoomInButton from './components/buttons/ZoomInButton';
import ZoomOutButton from './components/buttons/ZoomOutButton';
import MenuButton from './components/buttons/MenuButton';
import VolumeButton from './components/buttons/VolumeButton';
import RightSideBar from './components/RightSideBar';
import { useState } from 'react';

function App() {
    const [showRightSideBar, setShowRightSideBar] = useState(false)

    return (
        <>
            <div className='h-screen w-screen bg-cream'>
                <TransformWrapper
                    initialScale={1.4}
                    centerOnInit
                    wheel={{ step: 0.2 }}
                    panning={{ excluded: ['panningDisabled'] }}
                    pinch={{ excluded: ['pinchDisabled'] }}
                >
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                        <>
                            <TransformComponent>
                                <div className='w-screen'>
                                    <Map />
                                </div>
                            </TransformComponent>

                            <div className="fixed right-10 top-10 space-x-2 flex z-50">
                                <VolumeButton />
                                <MenuButton onMenu={() => setShowRightSideBar(true)} />
                            </div>

                            <div className='tools fixed right-10 top-0 bottom-0 h-full flex flex-col justify-center items-center'>
                                <ZoomInButton onZoomIn={zoomIn} />
                                <ZoomOutButton onZoomOut={zoomOut} />
                            </div>
                        </>
                    )}
                </TransformWrapper>
            </div>
            <RightSideBar showSideBar={showRightSideBar} setShowSideBar={setShowRightSideBar} />
        </>

    );
}

export default App;
