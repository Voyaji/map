import Map from './components/Map'
import { useState } from 'react';
import useWindowSize from './hooks/useWindowResize';
import RotateYourDevice from './components/RotateYourDevice';
import { useRef } from 'react';
import SideBar from './components/SideBar';
import AboutUsSidebar from './components/AboutUsSideBar';
import { useEffect } from 'react';

function App() {
    const [showRightSideBar, setShowRightSideBar] = useState(false)
    const [showLeftSideBar, setShowLeftSideBar] = useState(false)

    const [rerenderOnce, setRerenderOnce] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setRerenderOnce(true);
        }, [1000])
    }, [])

    return (
        <>
            <div className='bg-cream h-screen w-screen'>
                <Map setShowLeftSideBar={setShowLeftSideBar} setShowRightSideBar={setShowRightSideBar}/>
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