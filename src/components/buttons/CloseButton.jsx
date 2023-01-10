import React from 'react'

const CloseButton = ({onClose, className}) => {
  return (
    <div onClick={() => onClose()} className={`${className} flex`}>

    <svg className='hover:fill-yellow-button group cursor-pointer container flex' 
        width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <g clipPath="url(#clip0_130_254)">
    <g filter="url(#filter0_d_130_254)">
    <path className="group-hover:stroke-black" d="M28.9998 0L36.9547 7.95487L36.5127 10.8578L39.4157 10.4158L53.9996 24.9998L48.9173 30.0821L45.9342 29.8113L45.9342 33.0652L37.8688 41.1306L35.2172 40.6887L35.6592 43.3403L28.9998 49.9996L11.292 32.2918L13.3109 30.9962L9.08232 30.0821L4 24.9998L28.9998 0Z" fill="#333333"/>
    <path className="background" d="M36.4036 11.8139L38.9495 11.4263L52.4634 24.9402L48.0876 29.316L45.4477 29.0764L44.9025 29.0269L44.9025 29.5743L44.9025 32.5011L37.4628 39.9408L35.1628 39.5574L34.4723 39.4424L34.5874 40.1328L34.9707 42.4329L29.0924 48.3112L12.8301 32.0489L14.252 31.1363L15.2708 30.4826L14.0876 30.2268L10.1587 29.3775L5.72141 24.9402L29.0924 1.56922L36.2216 8.69844L35.834 11.2443L35.7318 11.9162L36.4036 11.8139Z" stroke="#B5B5B5"/>
    </g>
    <path className="group-hover:stroke-black" d="M23 19L35 31M23 31L35 19L23 31Z" stroke="#B5B5B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
        <filter id="filter0_d_130_254" x="0" y="0" width="57.9996" height="57.9996" filterUnits="userSpaceOnUse" ccolorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_130_254"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_130_254" result="shape"/>
        </filter>
        <clipPath id="clip0_130_254">
        <rect width="58" height="58" fill="white"/>
        </clipPath>
    </defs>
    </svg>

    </div>

  )
}

export default CloseButton