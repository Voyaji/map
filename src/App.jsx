import Map from './components/Map'
import { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import AboutUsSidebar from './components/AboutUsSideBar';
import Div100vh from 'react-div-100vh';
import useWindowSize from './hooks/useWindowResize';
import MapMobile from './components/MapMobile';

function App() {
    const [showRightSideBar, setShowRightSideBar] = useState(false)
    const [showLeftSideBar, setShowLeftSideBar] = useState(false)
    const {width, height} = useWindowSize()

    const [originalWindowHeight, setOriginalWindowHeight] = useState()
    const [originalWindowWidth, setOriginalWindowWidth] = useState()


    useEffect(() => {
        setOriginalWindowHeight(window.innerHeight)
        setOriginalWindowWidth(window.innerHeight)
        console.log("orig", window.innerHeight);
    }, [])
    

    return (
        <>
            {height && <div className={`bg-cream`} style={{height: `${originalWindowHeight}px`}}>
                {/* <Map setShowLeftSideBar={setShowLeftSideBar} setShowRightSideBar={setShowRightSideBar}/> */}
                <MapMobile setShowLeftSideBar={setShowLeftSideBar} setShowRightSideBar={setShowRightSideBar}/>

                <SideBar showSideBar={showRightSideBar} setShowSideBar={setShowRightSideBar} position="right">
                    <AboutUsSidebar setShowSideBar={setShowRightSideBar}/>
                </SideBar>

                <SideBar showSideBar={showLeftSideBar} setShowSideBar={setShowLeftSideBar} position="left">
                    <AboutUsSidebar setShowSideBar={setShowLeftSideBar}/>
                </SideBar>
            </div>}
        </>

    );
    }
export default App