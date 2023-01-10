import React, { useState } from 'react'
import { useEffect } from 'react'
import useWindowSize from '../../hooks/useWindowResize';

const ZoomOutButton = ({ onZoomOut, onReset, onCenterView }) => {
    const {width:windowWidth, height:windowHeight} = useWindowSize();
    const [orientation, setOrientation] = useState('')

    console.log(orientation)
    
    if(windowHeight && windowHeight){
        if(windowWidth > windowHeight && orientation !== 'landscape'){
            setOrientation('landscape')
        }
        else if (windowWidth < windowHeight && orientation !== 'portrait'){
            setOrientation('portrait')
        }
    }

    useEffect(() => {
        if(orientation !== ''){
            onReset()
        }
    }, [orientation])

    return (
        <div onClick={() => onZoomOut()} className="flex w-[80px] h-[80px]" >

            <svg className='hover:fill-yellow-button group cursor-pointer container flex'
                width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <style>{`
            .background {
                fill: #333333;
                transition: 0.3s;
            }
            .container:hover .background{
                fill: #f7ba27;               
            }
        `}</style>
                </defs>
                <g clipPath="url(#clip0_130_253)">
                    <g filter="url(#filter0_d_130_253)">
                        <path className="group-hover:stroke-black" d="M40.0002 0L51.4553 11.4552L50.8189 15.6354L54.9992 14.999L76.0004 36.0002L68.6817 43.3188L64.3861 42.9289L64.3861 47.6145L52.7717 59.2288L48.9534 58.5924L49.5898 62.4108L40.0002 72.0004L14.5006 46.5008L17.4079 44.6351L11.3186 43.3188L4 36.0002L40.0002 0Z" fill="#333333" />
                        <path className='background' d="M50.6287 16.7946L54.4048 16.2198L74.0993 35.9143L67.5697 42.444L63.6656 42.0896L63.1203 42.0401L63.1203 42.5875V46.8933L52.2626 57.751L48.8388 57.1804L48.1483 57.0653L48.2634 57.7558L48.8341 61.1796L40.1335 69.8801L16.3667 46.1133L18.6443 44.6517L19.663 43.9979L18.4799 43.7422L12.7589 42.5055L6.16774 35.9143L40.1335 1.9485L50.634 12.449L50.0591 16.2251L49.9568 16.8969L50.6287 16.7946Z" stroke="#B5B5B5" />
                    </g>
                    <path className="group-hover:stroke-black" d="M41 34H35M49 45L43 39L49 45ZM45 34C45 34.9193 44.8189 35.8295 44.4672 36.6788C44.1154 37.5281 43.5998 38.2997 42.9497 38.9497C42.2997 39.5998 41.5281 40.1154 40.6788 40.4672C39.8295 40.8189 38.9193 41 38 41C37.0807 41 36.1705 40.8189 35.3212 40.4672C34.4719 40.1154 33.7003 39.5998 33.0503 38.9497C32.4002 38.2997 31.8846 37.5281 31.5328 36.6788C31.1811 35.8295 31 34.9193 31 34C31 32.1435 31.7375 30.363 33.0503 29.0503C34.363 27.7375 36.1435 27 38 27C39.8565 27 41.637 27.7375 42.9497 29.0503C44.2625 30.363 45 32.1435 45 34Z" stroke="#B5B5B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <filter id="filter0_d_130_253" x="0" y="0" width="80.0004" height="80.0004" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_130_253" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_130_253" result="shape" />
                    </filter>
                    <clipPath id="clip0_130_253">
                        <rect width="80" height="80" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        </div>

    )
}

export default ZoomOutButton