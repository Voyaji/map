import Map from './components/Map'
import { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import AboutUsSidebar from './components/AboutUsSideBar';
import useWindowSize from './hooks/useWindowResize';
import MapMobile from './components/MapMobile';
import isMobileOrTablet from './utilities/isMobileOrTablet'
import LocationSideBar from './components/LocationSideBar';

function App() {
    const [showRightSideBar, setShowRightSideBar] = useState(false)
    const [showLeftSideBar, setShowLeftSideBar] = useState(false)
    const [leftSideBarData, setLeftSideBarData] = useState(null);
    const {width, height} = useWindowSize()

    const [originalWindowHeight, setOriginalWindowHeight] = useState()
    const [originalWindowWidth, setOriginalWindowWidth] = useState()

    const isMobileOrTabletBool = isMobileOrTablet()

    useEffect(() => {
        setOriginalWindowHeight(window.innerHeight)
        setOriginalWindowWidth(window.innerWidth)
    }, [])
    
    console.log("device", isMobileOrTabletBool);

    return (
        <>
            {isMobileOrTabletBool
                ? height && <div className={`bg-cream`} style={{height: `${originalWindowHeight}px`}}>
                        <MapMobile setShowLeftSideBar={setShowLeftSideBar} setShowRightSideBar={setShowRightSideBar}/>
                    </div>
                : <div className='h-screen'>
                    <Map setShowLeftSideBar={setShowLeftSideBar} setShowRightSideBar={setShowRightSideBar} setLeftSideBarData={setLeftSideBarData}/>
                </div>
            }

            <SideBar showSideBar={showRightSideBar} setShowSideBar={setShowRightSideBar} position="right">
                <AboutUsSidebar showSideBar={showRightSideBar} setShowSideBar={setShowRightSideBar}/>
            </SideBar>

            <SideBar showSideBar={showLeftSideBar} setShowSideBar={setShowLeftSideBar} position="left">
                <LocationSideBar showSideBar={showLeftSideBar} setShowSideBar={setShowLeftSideBar} data={leftSideBarData}/>
            </SideBar>
        </>

    );
    }
export default App