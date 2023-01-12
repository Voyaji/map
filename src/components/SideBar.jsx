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

        {children}



    </>
  )
}

export default SideBar