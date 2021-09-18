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

    const handleHover = () => {
        const menuElement = document.createElement('h2');
        const node = document.createTextNode("CODE");
        const node2 = document.createTextNode("DESIGN");
        menuElement.appendChild(node);
        menuElement.appendChild(node2);

        const element = document.getElementById=("logoCircle");
        // element.appendChild(menuElement);
        console.log(element)
    }

//Animations----------------------------------------------------------

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      }

//Styles for component elements----------------------------------------

    const svgStyle = {
        background: '#8A2387',
        background: 'linearGradient(to right, #F27121, #E94057, #8A2387)',
        background: 'linearGradient(to right, #F27121, #E94057, #8A2387)'
    }

    const iconStyle = {
        width:'180px',
        position:'absolute',
        margin:'0 auto',
        left:'50%',
        top:`50%`,
        marginLeft:'-90px',
        marginTop:'-90px'
    }

//SVG for icons--------------------------------------------------------

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


    
    return (
        <>
            <div id="angle1"></div>
            <motion.div id="logoCircle" 
                onClick={handleClick}
                transition={{ duration: 0.5 }} 
                whileHover={{ scale: 1.05 }}
                animate={{ opacity: 100 }}
                style={iconStyle}
                onMouseEnter={handleHover} >
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