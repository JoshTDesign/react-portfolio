import React from 'react'
import Headshot from '../assets/Images/headshot.png';
export default function Home() {

   
    return (

        <div id="home">
            <img src={Headshot} style={{width:'350px'}}/>
            <h1>Josh Taylor</h1>
            <h2>GRAPHIC DESIGNer + developer</h2>
            {/* <p>I am a Seattle-based designer with years of experience building strong brands in variety of media. Currently, I am focusing on digital experiences and I am available for work.  If you have any questions, I would love to hear from you.</p> */}
            <p><a href="tel:253-653-7120">253.653.7120</a>
            <a href="mailto:josh@joshtaylordesign.com?subject=Hey Josh!">josh@joshtaylordesign.com</a></p>
        </div>
        
    )
    
}