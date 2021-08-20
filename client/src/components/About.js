import React from 'react'
import MyPic from '../assets/Images/myPicCropped.png';


export default function About() {
    return (
        <div className='about'>

            <div id='profile'>
                <img id="profilePic" src={MyPic}/>
                <p>I am a graphic designer and web developer with years of experience working for companies large and small. I love learning and working with others to create cool stuff. Check out some of my recent work. I'll be <a href="mailto:josh@joshtaylordesign.com">here</a> if you have any questions.</p>
            </div>
            <div id='techStack'>
                <ul style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                    <li>React</li>
                    <li>Express</li>
                    <li>MongoDB</li> 
                    <li>Node.js</li>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                    <li>Figma</li>
                    <li>InDesign</li>
                </ul>
            </div>
        </div>
    )
}