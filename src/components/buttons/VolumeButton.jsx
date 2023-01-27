import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

const VolumeOnButton = ({className}) => {
    return (
        <svg className={`hover:fill-yellow-button group cursor-pointer container flex ${className}`}
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

            <g clipPath="url(#clip0_130_251)">
                <g filter="url(#filter0_d_130_251)">
                    <path className="group-hover:stroke-black" d="M40.0002 0L51.4553 11.4552L50.8189 15.6354L54.9992 14.999L76.0004 36.0002L68.6817 43.3188L64.3861 42.9289L64.3861 47.6145L52.7717 59.2288L48.9534 58.5924L49.5898 62.4108L40.0002 72.0004L14.5006 46.5008L17.4079 44.6351L11.3186 43.3188L4 36.0002L40.0002 0Z" fill="#333333" />
                    <path className="background" d="M50.6287 16.7946L54.4048 16.2198L74.0993 35.9143L67.5697 42.444L63.6656 42.0896L63.1203 42.0401L63.1203 42.5875V46.8933L52.2626 57.751L48.8388 57.1804L48.1483 57.0653L48.2634 57.7558L48.8341 61.1796L40.1335 69.8801L16.3667 46.1133L18.6443 44.6517L19.663 43.9979L18.4799 43.7422L12.7589 42.5055L6.16774 35.9143L40.1335 1.9485L50.634 12.449L50.0591 16.2251L49.9568 16.8969L50.6287 16.7946Z" stroke="#B5B5B5" />
                </g>
                <path className="group-hover:stroke-black" d="M43.536 32.464C44.0004 32.9283 44.3688 33.4796 44.6202 34.0863C44.8716 34.693 45.0009 35.3433 45.0009 36C45.0009 36.6567 44.8716 37.307 44.6202 37.9137C44.3688 38.5204 44.0004 39.0717 43.536 39.536M46.364 29.636C47.1997 30.4717 47.8627 31.4639 48.315 32.5558C48.7673 33.6478 49.0001 34.8181 49.0001 36C49.0001 37.1819 48.7673 38.3522 48.315 39.4442C47.8627 40.5361 47.1997 41.5283 46.364 42.364M33.586 39H32C31.7348 39 31.4804 38.8946 31.2929 38.7071C31.1054 38.5196 31 38.2652 31 38V34C31 33.7348 31.1054 33.4804 31.2929 33.2929C31.4804 33.1054 31.7348 33 32 33H33.586L38.293 28.293C38.923 27.663 40 28.109 40 29V43C40 43.891 38.923 44.337 38.293 43.707L33.586 39Z" stroke="#B5B5B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_d_130_251" x="0" y="0" width="80.0004" height="80.0004" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_130_251" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_130_251" result="shape" />
                </filter>
                <clipPath id="clip0_130_251">
                    <rect width="80" height="80" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

const VolumeOffButton = ({className}) => {
    return (
        <svg className={`hover:fill-yellow-button group cursor-pointer container flex ${className}`}
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
            <g clipPath="url(#clip0_130_250)">
                <g filter="url(#filter0_d_130_250)">
                    <path className="background" d="M40.0002 0L51.4553 11.4552L50.8189 15.6354L54.9992 14.999L76.0004 36.0002L68.6817 43.3188L64.3861 42.9289L64.3861 47.6145L52.7717 59.2288L48.9534 58.5924L49.5898 62.4108L40.0002 72.0004L14.5006 46.5008L17.4079 44.6351L11.3186 43.3188L4 36.0002L40.0002 0Z" fill="#333333" />
                    <path className="group-hover:stroke-black" d="M50.6287 16.7946L54.4048 16.2198L74.0993 35.9143L67.5697 42.444L63.6656 42.0896L63.1203 42.0401L63.1203 42.5875V46.8933L52.2626 57.751L48.8388 57.1804L48.1483 57.0653L48.2634 57.7558L48.8341 61.1796L40.1335 69.8801L16.3667 46.1133L18.6443 44.6517L19.663 43.9979L18.4799 43.7422L12.7589 42.5055L6.16774 35.9143L40.1335 1.9485L50.634 12.449L50.0591 16.2251L49.9568 16.8969L50.6287 16.7946Z" stroke="#B5B5B5" />
                </g>
                <path className="group-hover:stroke-black" d="M32 39H33.586L38.293 43.707C38.923 44.337 40 43.891 40 43V29C40 28.109 38.923 27.663 38.293 28.293L33.586 33H32C31.7348 33 31.4804 33.1054 31.2929 33.2929C31.1054 33.4804 31 33.7348 31 34V38C31 38.2652 31.1054 38.5196 31.2929 38.7071C31.4804 38.8946 31.7348 39 32 39Z" stroke="#B5B5B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path className="group-hover:stroke-black" d="M47 36L49 38M45 38L47 36L45 38ZM47 36L49 34L47 36ZM47 36L45 34L47 36Z" stroke="#B5B5B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_d_130_250" x="0" y="0" width="80.0004" height="80.0004" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_130_250" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_130_250" result="shape" />
                </filter>
                <clipPath id="clip0_130_250">
                    <rect width="80" height="80" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

const VolumeButton = () => {
    const [isVolumeOn, setIsVolumeOn] = useState(false);
    const audioRef = useRef(null);
    
    useEffect(() => {
        const fn = async () => {

            if(isVolumeOn){
                await audioRef.current.play();
            }
            else{
                await audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
            
        }
        fn();

    }, [isVolumeOn]);

    useEffect(() => {
        audioRef.current?.setAttribute('webkit-playsinline', true)
    }, []);


    return (
        <div onClick={() => setIsVolumeOn(!isVolumeOn)} className="flex relative w-[80px] h-[80px]">
            

            <VolumeOnButton  className={`absolute inset-0 ${isVolumeOn? 'z-20':'z-10'}`}/> 
            <VolumeOffButton className={`absolute inset-0 ${!isVolumeOn? 'z-20':'z-10'}`} />
            <audio className='relative top-0 z-30' ref={audioRef} loop playsInline={true} preload="auto" >
                <source src="https://firebasestorage.googleapis.com/v0/b/voyaji-map.appspot.com/o/Voyaji_Music.mp3?alt=media&token=07f6b9af-7d01-449b-8090-63a163451969" type="audio/mpeg"/>
                <p>Your browser does not support HTML Audio.</p>
            </audio>
        </div>
    )
}

export default VolumeButton