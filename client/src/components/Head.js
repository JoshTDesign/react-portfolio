import React from 'react'
import Logo from '../assets/JT_Logo.js'
import Logosvg from '../assets/JT_Logo.svg'

export default function Head() {
    

    
    
    return (
        // <div id="container">
            <div id="head">
                <a id="logo" href="/">
                    <img src={Logosvg} style={{height:'90px'}}/>
                </a>
                <p>Josh Taylor is a designer and developer based in Seattle.</p>
                
                <ul style={{padding:0}}>
                    <li><a href="/work">Work</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/resume">Resume</a></li>
                    <li><a href="/resume">Contact</a></li>

                </ul>
            </div>
        // </div>
    )
}