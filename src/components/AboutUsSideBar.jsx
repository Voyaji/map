import React from 'react'
import Bullet from './Bullet'
import CloseButton from './buttons/CloseButton'
import DiscordButton from './buttons/DiscordButton'
import TwitterButton from './buttons/TwitterButton'
import GenerateLabsLogo from '../assets/images/logo_generate_labs.svg'
// import GenerateLabsLogo from './GenerateLabsLogo'
import SideBarBackground from '../assets/images/left_side_bar.svg'
import { useNavigate } from 'react-router-dom'


const AboutUsSidebar = ({ showSideBar, setShowSideBar, setShowComingSoon }) => {

    return (
        <div className={`
            h-full
            ${showSideBar ? 'z-[1000] opacity-100' : '-z-10 opacity-0'}
            right-0
            bg-white fixed top-0 h-full transition-opacity duration-200 ease-in-out
            flex flex-col

            w-full md:w-3/5 lg:w-1/2 xl:w-1/4

            `}>
            <div
                className='h-full'
                style={{
                    backgroundImage: `url(${SideBarBackground})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>

                <div className='overflow-scroll py-16 mb-6 scrollbar-hide h-full
                    mx-8 xl:mx-8'>
                    <CloseButton
                        className="absolute top-6 right-6"
                        onClose={() => setShowSideBar(false)} />

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
                            <li className='space-x-2'><Bullet className="inline-block" /><span className='cursor-pointer' 
                                onClick={() => {
                                    setShowComingSoon(true)
                                    setShowSideBar(false)
                            }}>Team</span></li>
                            <li className='space-x-2'><Bullet className="inline-block" /><span className='cursor-pointer' onClick={() => setShowSideBar(false)}>Road</span></li>
                            <li className='space-x-2'><Bullet className="inline-block" /><span className='cursor-pointer' 
                                onClick={() => {
                                    setShowComingSoon(true)
                                    setShowSideBar(false)
                            }}>About</span></li>
                            <li className='space-x-2'><Bullet className="inline-block" /><span className='cursor-pointer' 
                                onClick={() => {
                                    setShowComingSoon(true)
                                    setShowSideBar(false)
                            }}>Capital</span></li>
                        </ul>
                    </div>

                    <div className='mt-20 w-full flex-col justify-start items-end'>
                        <span>Follow the voyage:</span>
                        <div className='flex justify-between items-center'>
                            <div className='flex mt-4 justify-start items-center'>
                                <DiscordButton onDiscord={() => {
                                    setShowComingSoon(true)
                                    setShowSideBar(false)
                                }}/>
                                <TwitterButton onTwitter={() => window.location.href = "https://twitter.com/voyajiofficial"}/>
                            </div>

                            <img src={GenerateLabsLogo} className="pointer-events-none"/>
                        </div>
                    </div>
                    <div className='flex mt-12 justify-center items-end font-montserrat text-sm'>© GenerateLabs. All rights Reserved.</div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsSidebar