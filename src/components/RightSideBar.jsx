import React from 'react'
import SideBarBackground from '../assets/images/left_side_bar.svg'
import Bullet from './Bullet'
import CloseButton from './buttons/CloseButton'
import DiscordButton from './buttons/DiscordButton'
import TwitterButton from './buttons/TwitterButton'
import GenerateLabsLogo from './GenerateLabsLogo'

const RightSideBar = ({showSideBar, setShowSideBar}) => {
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
            right-0
            bg-white w-3/12 fixed top-0 h-full z-50 transition-opacity duration-300 ease-in-out
            flex flex-col
            `}
            style={{
                backgroundImage: `url(${SideBarBackground})`, 
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            
            <div className='overflow-auto mx-11 mt-24 mb-6 scrollbar-hide'>
                <CloseButton 
                    className="absolute top-6 right-6"
                    onClose={() => setShowSideBar(false)}/>

                <div className='w-full flex justify-center text-center'>
                    <h1 className='font-enchantedLand text-5xl text-grey-dark'>Are you for an epic quest <br /> Voyager?</h1>
                </div>

                <div className='mt-16 w-full flex justify-center'>
                    <p className='font-montserrat text-gray-dark '>
                        We are Voyaji, a community led by designers, creators and artists alike. Together with Generate Labs, We picture a Metaverse united by Creatives from all backgrounds.
                    </p>
                </div>
                
                <div className='mt-16 w-full flex justify-start'>
                    <ul>
                        <li className='space-x-2'><Bullet className="inline-block"/><span>Team</span></li>
                        <li className='space-x-2'><Bullet className="inline-block"/><span>Road</span></li>
                        <li className='space-x-2'><Bullet className="inline-block"/><span>About</span></li>
                        <li className='space-x-2'><Bullet className="inline-block"/><span>Capital</span></li>
                    </ul>
                </div>

                <div className='mt-20 w-full flex-col justify-start items-end'>
                    <span>Follow the voyage:</span>
                    <div className='flex justify-between items-center'>
                        <div className='flex mt-4'>
                            <DiscordButton />
                            <TwitterButton />
                        </div>
                        
                        <GenerateLabsLogo />
                    </div>
                </div>
                <div className='flex mt-12 justify-center items-end font-montserrat text-sm'>© GenerateLabs. All rights Reserved.</div>
            </div>
        </div>

    </>
  )
}

export default RightSideBar