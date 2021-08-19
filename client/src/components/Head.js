import React from 'react'
import Logo from '../assets/JT_Logo.js'
import Logosvg from '../assets/JT_Logo.svg'
import Tab from './Tab.js'

export default function Head() {
    
const tabActive = () => {

}
    
    
    return (
        // <div id="container">
            <div id="head">
                <a id="logo" href="/">
                    <img src={Logosvg} style={{height:'90px'}}/>
                </a>
                <p>Josh Taylor is a designer and developer based in Seattle.</p>
                
                <ul style={{padding:0}}>
                    {/* <li><a href="/work">Design</a></li> */}
                    <Tab text="Design" status="test"/>
                    <li><a href="/projects">Web Apps</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/resume">Resume</a></li>
                </ul>
            </div>
        // </div>
    )
}