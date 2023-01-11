import Map from './components/Map'
import { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import AboutUsSidebar from './components/AboutUsSideBar';
import Div100vh from 'react-div-100vh';
import useWindowSize from './hooks/useWindowResize';
import MapMobile from './components/MapMobile';
import isMobileOrTablet from './utilities/isMobileOrTablet'

function App() {
    const [showRightSideBar, setShowRightSideBar] = useState(false)
    const [showLeftSideBar, setShowLeftSideBar] = useState(false)
    const {width, height} = useWindowSize()

    const [originalWindowHeight, setOriginalWindowHeight] = useState()
    const [originalWindowWidth, setOriginalWindowWidth] = useState()

    const isMobileOrTabletBool = isMobileOrTablet()

    useEffect(() => {
        setOriginalWindowHeight(window.innerHeight)
        setOriginalWindowWidth(window.innerWidth)
        console.log("orig", window.innerHeight);
    }, [])
    

    return (
        <>
            {isMobileOrTabletBool
                ? height && <div className={`bg-cream`} style={{height: `${originalWindowHeight}px`}}>
                        <MapMobile setShowLeftSideBar={setShowLeftSideBar} setShowRightSideBar={setShowRightSideBar}/>
                    </div>
                : <Div100vh>
                    <Map setShowLeftSideBar={setShowLeftSideBar} setShowRightSideBar={setShowRightSideBar}/>
                </Div100vh>
            }

            <SideBar showSideBar={showRightSideBar} setShowSideBar={setShowRightSideBar} position="right">
                <AboutUsSidebar setShowSideBar={setShowRightSideBar}/>
            </SideBar>

            <SideBar showSideBar={showLeftSideBar} setShowSideBar={setShowLeftSideBar} position="left">
                <AboutUsSidebar setShowSideBar={setShowLeftSideBar}/>
            </SideBar>

            {/* {height && <div className={`bg-cream`} style={{height: `${originalWindowHeight}px`}}> */}
            {/* {height && <div className={`bg-cream`} style={{height: `${isMobileOrTabletBool? originalWindowHeight + 'px' : height}`}}>
                {
                    isMobileOrTabletBool
                        ? <MapMobile setShowLeftSideBar={setShowLeftSideBar} setShowRightSideBar={setShowRightSideBar}/>
                        : <Map setShowLeftSideBar={setShowLeftSideBar} setShowRightSideBar={setShowRightSideBar}/>
                }
                

                <SideBar showSideBar={showRightSideBar} setShowSideBar={setShowRightSideBar} position="right">
                    <AboutUsSidebar setShowSideBar={setShowRightSideBar}/>
                </SideBar>

                <SideBar showSideBar={showLeftSideBar} setShowSideBar={setShowLeftSideBar} position="left">
                    <AboutUsSidebar setShowSideBar={setShowLeftSideBar}/>
                </SideBar>
            </div>} */}
        </>

    );
    }
export default App