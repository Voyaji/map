import React from 'react'
import SideBarBackground from '../assets/images/left_side_bar.svg'
import Bullet from './Bullet'
import CloseButton from './buttons/CloseButton'
import DiscordButton from './buttons/DiscordButton'
import TwitterButton from './buttons/TwitterButton'
import GenerateLabsLogo from './GenerateLabsLogo'

const SideBar = ({showSideBar, setShowSideBar, position, children}) => {
  return (
    <>
        <div className={`
            ${showSideBar? 'z-[999] opacity-60':'-z-10 opacity-0'}
            bg-black opacity-60 w-screen h-screen fixed inset-0 duration-200 ease-out
            `}
            onClick={() => setShowSideBar(false)}>
        </div>
        <div className={`
            border-2 h-screen
            ${showSideBar? 'z-[1000] opacity-100': '-z-10 opacity-0'}
            ${position}-0
            bg-white w-3/12 fixed top-0 h-full transition-opacity duration-200 ease-in-out
            flex flex-col
            `}
            style={{
                backgroundImage: `url(${SideBarBackground})`, 
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            
            {children}
        </div>

    </>
  )
}

export default SideBar