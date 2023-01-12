import React, { useEffect } from 'react'
import CloseButton from './buttons/CloseButton'
import Frame from '../assets/images/rectangle_frame.svg'
import { useRef } from 'react'

const LocationSideBar = ({ showSideBar, setShowSideBar, data }) => {
    const scrollRef = useRef()

    useEffect(() => {
        scrollRef?.current?.scroll({
            top: 0
        })
    }, [showSideBar])

    return (
        <div className={`
            h-screen
            ${showSideBar ? 'z-[1000] opacity-100' : '-z-10 opacity-0'}
            left-0
            w-full md:w-3/5 lg:w-1/2 xl:w-1/4
            bg-white fixed top-0 h-full transition-opacity duration-200 ease-in-out
            flex flex-col
            `}>

            <div className='relative bg-cream'>

                <div className='overflow-scroll py-16 mb-6 scrollbar-hide h-screen
                    mx-8 xl:mx-8'
                    ref={scrollRef}>
                    <CloseButton
                        className="absolute top-6 right-6"
                        onClose={() => setShowSideBar(false)} />

                    <div className='w-full flex justify-center text-center'>
                        <h1 className='font-enchantedLand text-5xl text-grey-dark'>{data?.name}</h1>
                    </div>

                    <div className='mt-16 w-full flex justify-center'>
                        <p className='font-montserrat text-gray-dark '>
                            We are Voyaji, a community led by designers, creators and artists alike. Together with Generate Labs, We picture a Metaverse united by Creatives from all backgrounds.
                        </p>
                    </div>

                    <div className='w-full relative mt-16 '>
                        <img src={Frame} className="w-full" />

                    </div>

                    <div className='mt-16 w-full flex justify-center'>
                        <p className='font-montserrat text-gray-dark '>
                            We are Voyaji, a community led by designers, creators and artists alike. Together with Generate Labs, We picture a Metaverse united by Creatives from all backgrounds.
                        </p>
                    </div>

                    <div className='mt-16 w-full flex justify-center'>
                        <p className='font-montserrat text-gray-dark '>
                            We are Voyaji, a community led by designers, creators and artists alike. Together with Generate Labs, We picture a Metaverse united by Creatives from all backgrounds.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default LocationSideBar