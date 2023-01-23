import React from 'react'
import MenuButton from './buttons/MenuButton'
import VolumeButton from './buttons/VolumeButton'
import MapElements from './MapElements'

const VIDEO_RATIO = 1.5

const MapMobile = ({ setShowLeftSideBar, setShowRightSideBar, setLeftSideBarData, setShowComingSoon }) => {

    return (
        <>
            <div className={`h-full overflow-scroll relative`}>
                <video preload='auto' className={`object-cover h-full max-w-none aspect-[1.5] absolute inset-0`} autoPlay={true} muted={true} loop={true} playsInline={true}>
                    <source src={require('../assets/videos/map looped.mp4')} type="video/mp4" />
                </video>
                <MapElements setShowLeftSideBar={setShowLeftSideBar} setLeftSideBarData={setLeftSideBarData} setShowComingSoon={setShowComingSoon}/>
            </div>
            <div className="fixed right-[2vw] top-[2vh] space-x-2 flex z-50">
                <VolumeButton />
                <MenuButton onMenu={() => setShowRightSideBar(true)} />
            </div>
        </>
    )
}

export default MapMobile