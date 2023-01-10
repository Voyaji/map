import React from 'react'

const Bullet = ({className}) => {
    return (
        <svg className={className} 
            width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_130_273)">
                <g filter="url(#filter0_d_130_273)">
                    <path d="M10.9998 0L13.2271 2.22732L13.1034 3.04012L13.9162 2.91638L17.9996 6.99981L16.5766 8.42284L15.7414 8.34701L15.7414 9.25808L13.4831 11.5163L12.7407 11.3926L12.8644 12.135L10.9998 13.9996L6.04173 9.04154L6.60702 8.67878L5.42303 8.42284L4 6.99981L10.9998 0Z" fill="#333333" />
                    <path d="M13.1271 3.66368L13.6599 3.58256L17.0605 6.98307L16.209 7.83451L15.6378 7.78265L15.0926 7.73316L15.0926 8.2806L15.0926 8.95097L13.2459 10.7976L12.7847 10.7207L12.0942 10.6056L12.2093 11.2961L12.2862 11.7574L11.0258 13.0177L7.04311 9.035L7.06502 9.02094L8.08377 8.36718L6.90062 8.11142L5.90413 7.89601L4.99119 6.98307L11.0258 0.948442L12.6387 2.56128L12.5575 3.09412L12.4553 3.76596L13.1271 3.66368Z" stroke="#B5B5B5" />
                </g>
            </g>
            <defs>
                <filter id="filter0_d_130_273" x="0" y="0" width="21.9996" height="21.9996" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_130_273" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_130_273" result="shape" />
                </filter>
                <clipPath id="clip0_130_273">
                    <rect width="22" height="22" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default Bullet