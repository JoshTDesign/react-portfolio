import React, { useRef, useState, useEffect } from 'react'
import Logosvg from '../assets/Images/JT_icon_circle.svg'
import { motion } from "framer-motion"

export default function Test2() {

    document.body.style.backgroundColor = "#444444" 
    
    const [ clickState, setClickState ] = useState({
        click: "50%",
    })

    const handleClick = () => {
        setClickState ({
            click: "20%"
        })
    }

    const svgStyle = {
        background: '#8A2387',
        background: 'linearGradient(to right, #F27121, #E94057, #8A2387)',
        background: 'linearGradient(to right, #F27121, #E94057, #8A2387)'
    }

    const Icon = () => (
        <svg viewBox="0 0 409.6 405.76" fill='#000000'>
            <path d="M682.8,396.06c50.72,0,91.84-48.13,91.84-107.49,0-82.33-41.12-107.49-91.84-107.49S591,206.24,591,288.57c0,59.36,41.12,107.49,91.84,107.49Zm0,0" transform="translate(-478 -181.08)"/>
            <path d="M885.6,554.28,839.27,449.9a23.3,23.3,0,0,0-10.48-11.15l-71.91-37.43a4.66,4.66,0,0,0-4.93.41,113.41,113.41,0,0,1-138.3,0,4.67,4.67,0,0,0-4.94-.41l-71.9,37.43a23.24,23.24,0,0,0-10.47,11.15L480,554.28a23.16,23.16,0,0,0,21.18,32.56H864.42a23.17,23.17,0,0,0,21.18-32.56Zm0,0" transform="translate(-478 -181.08)"/>
        </svg>
      );

    const JTDIcon = () => (
    <svg viewBox="0 0 180 180">
    <defs>
        <linearGradient id="MyGradient">
            <stop offset="5%" stop-color="#c233c6" />
            <stop offset="95%" stop-color="#7851bb" />
        </linearGradient>
    </defs>
    <path  fill="url(#MyGradient)" class="st0" d="M90,0C40.3,0,0,40.3,0,90s40.3,90,90,90s90-40.3,90-90S139.7,0,90,0z M80.9,136.7c0,2.4-1.6,4.7-4,5.4
	l-16.3,5.3V68.7h20.3V136.7z M80.9,56.7c0,3.1-2.5,5.7-5.7,5.7H60.6V48.1c0-3.4,2.7-6.1,6.1-6.1h14.2C80.9,42,80.9,56.7,80.9,56.7z
	 M134.4,62.3h-26v68.8H88.1V62.3V42h20.3h19.9c3.4,0,6.1,2.7,6.1,6.1V62.3z"/>
    </svg>
    )

        console.log(clickState.click)
 
    return (
        <>
            <div id="angle1"></div>
            <motion.div id="logoCircle" 
                onClick={handleClick} 
                transition={{ duration: 0.5 }} 
                whileHover={{ scale: 1.1 }}
                animate={{ x: 100 }}
                style={{
                    width:'180px',
                    position:'absolute',
                    margin:'0 auto',
                    left:'50%',
                    top:`${clickState.click}`,
                    marginLeft:'-90px',
                    marginTop:'-90px',
                    
                }} >

                <JTDIcon /> 
            </motion.div>
            
        </>
    ) 
}




// export default function Test() {



//     return (

//         <p>hello</p>
        // <div style={{width:'100%', 
        //             height:'100vh', 
        //             backgroundColor:'#444444', 
        //             display:'fixed',
        //             margin:'0', 
        //             padding:'0'
        //             }}>
        //     <div style={{
        //         width:'180px', 
        //         border:'1px solid pink',
        //         margin:'auto',
        //         position:'relative',
        //         top:'100px'}}>
        //         <img src={Logosvg} style={{margin:'auto', width:'180px'}}/>
        //     </div>
        // </div>
//     )
// }