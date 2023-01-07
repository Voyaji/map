import React, { useState } from 'react'

const Map = () => {
    const alertLocation = () => {
        alert("Pin clicked!")
    }

    const [mountainScale, setMountainScale] = useState(1);
    const [mountainAnimation, setMountainAnimation] = useState('paused')

    const [capitalScale, setCapitalScale] = useState(1);


    return (
        <svg className='w-full h-full z-10'
            id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1599 1024">
            <defs>
                <style>{`
                    // .cls-1{
                    //     fill:#c82026;
                    //     stroke:#fff;
                    //     stroke-miterlimit:10;
                    //     stroke-width:2px;
                    //     cursor:pointer;
                    //     transition: transform 0.2s;
                    // }

                    // .cls-1:hover{
                    //     fill: black;
                    // }

                    // circle{
                    //     transform: translate3d(0px,0px,1px) scale(1);
                    //     transition: transform 0.2s;
                    //   }
                    //   circle:hover{  
                    //     transform: translate3d(0px,0px,1px) scale(1.1);
                    //   }
                `}</style>
            </defs>           
            <circle className="cls-1 animate-rotateZ" onClick={alertLocation} cx="1277.35" cy="261.72" r="26.8" style={{transformOrigin: '1277.35px 500.72px'}}/>
            <circle 
                cx="200.48" 
                cy="778.24" 
                r="26.8" 
                style={{
                    transition: '500ms', 
                    transform: `scale(${mountainScale}) `, 
                    transformOrigin: '200.48px 778.24px',
                    animation: `rotate-circle 500ms linear infinite ${mountainAnimation}`
                }} 
                onMouseEnter={() => {
                    setMountainScale(2)
                    setMountainAnimation('running')
                }}
                onMouseLeave={() => {
                    setMountainScale(1)
                    setMountainAnimation('paused')
                }}/>
            <circle 
                cx="670.04" 
                cy="689.02" 
                r="26.8" 
                style={{transition: '500ms', transform: `scale(${capitalScale})`, transformOrigin: '670.04px 689.02px'}}
                onMouseEnter={() => {
                    setCapitalScale(2)
                }}
                onMouseLeave={() => {
                    setCapitalScale(1)
                }}/>
        </svg>
    )
}

export default Map