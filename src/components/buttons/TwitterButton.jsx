import React from 'react'

const TwitterButton = ({ onTwitter, className }) => {
    return (
        <div onClick={() => onTwitter()} className={`${className} flex`} >

            <svg className='hover:fill-yellow-button group cursor-pointer container flex' 
                width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_130_257)">
                    <g filter="url(#filter0_d_130_257)">
                        <path className="group-hover:stroke-black" d="M40.0002 0L51.4553 11.4552L50.8189 15.6354L54.9992 14.999L76.0004 36.0002L68.6817 43.3188L64.3861 42.9289L64.3861 47.6145L52.7717 59.2288L48.9534 58.5924L49.5898 62.4108L40.0002 72.0004L14.5006 46.5008L17.4079 44.6351L11.3186 43.3188L4 36.0002L40.0002 0Z" fill="#333333" />
                        <path className='background' d="M50.6287 16.7946L54.4048 16.2198L74.0993 35.9143L67.5697 42.444L63.6656 42.0896L63.1203 42.0401L63.1203 42.5875V46.8933L52.2626 57.751L48.8388 57.1804L48.1483 57.0653L48.2634 57.7558L48.8341 61.1796L40.1335 69.8801L16.3667 46.1133L18.6443 44.6517L19.663 43.9979L18.4799 43.7422L12.7589 42.5055L6.16774 35.9143L40.1335 1.94849L50.634 12.4489L50.0591 16.2251L49.9568 16.8969L50.6287 16.7946Z" stroke="#B5B5B5" />
                    </g>
                    <g clipPath="url(#clip1_130_257)">
                        <path className="group-hover:fill-black" d="M35.5502 45.75C44.6045 45.75 49.5583 38.2467 49.5583 31.7419C49.5583 31.531 49.5536 31.3153 49.5442 31.1044C50.5079 30.4075 51.3395 29.5443 52 28.5553C51.1025 28.9546 50.1496 29.2154 49.1739 29.3288C50.2013 28.713 50.9705 27.7455 51.3391 26.6058C50.3726 27.1786 49.3156 27.5827 48.2134 27.8007C47.4708 27.0116 46.489 26.4892 45.4197 26.3141C44.3504 26.139 43.2532 26.3211 42.2977 26.8321C41.3423 27.3432 40.5818 28.1548 40.1338 29.1414C39.6859 30.128 39.5754 31.2347 39.8195 32.2903C37.8625 32.1921 35.9479 31.6838 34.2 30.7981C32.452 29.9125 30.9097 28.6695 29.673 27.1496C29.0444 28.2333 28.8521 29.5157 29.135 30.7361C29.418 31.9566 30.1551 33.0235 31.1964 33.72C30.4146 33.6952 29.65 33.4847 28.9656 33.106V33.1669C28.9649 34.3042 29.3581 35.4066 30.0783 36.2868C30.7985 37.167 31.8013 37.7706 32.9162 37.995C32.1921 38.1932 31.432 38.222 30.6948 38.0794C31.0095 39.0575 31.6216 39.9129 32.4458 40.5264C33.27 41.1398 34.2651 41.4806 35.2923 41.5013C33.5484 42.8712 31.3942 43.6142 29.1766 43.6107C28.7833 43.6101 28.3904 43.586 28 43.5385C30.2529 44.9838 32.8735 45.7514 35.5502 45.75Z" fill="#B5B5B5" />
                    </g>
                </g>
                <defs>
                    <filter id="filter0_d_130_257" x="0" y="0" width="80.0004" height="80.0004" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_130_257" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_130_257" result="shape" />
                    </filter>
                    <clipPath id="clip0_130_257">
                        <rect width="80" height="80" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_130_257">
                        <rect width="24" height="24" fill="white" transform="translate(28 24)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default TwitterButton