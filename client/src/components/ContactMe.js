import React from 'react'
import Logo from '../assets/JT_Logo.js'
import Logosvg from '../assets/JT_Logo.svg'
import LinkedIn1 from '../assets/Images/LinkedIn1.svg'
import GitHub1 from '../assets/Images/GitHub1.svg'

export default function ContactMe() {
    

    
    
    return (
        <div id="footer">
            <h1>Contact Me</h1>
            <ul style={{display:'flex', alignItems:'center'}}>
                <li><a href="tel:253-653-7120">253-653-7120</a></li>
                <li><a href="mailto:josh@joshtaylordesign.com">josh@joshtaylordesign.com</a></li>
                <li><a href="https://www.linkedin.com/in/josh-taylor-738bb218/" target="_blank"><img style={{height:'60px'}} src={LinkedIn1} /></a></li>
                <li><a href="https://github.com/JoshTDesign/" target="_blank"><img style={{height:'60px'}} src={GitHub1} /></a></li>
            </ul>
    </div>
    )
}