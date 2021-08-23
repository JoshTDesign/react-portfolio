import React from 'react'
import MyPic from '../assets/Images/profilePic_cropped2.svg';


export default function About() {
    return (
        <div className='about'>

            <div id='profile'>
                <img id="profilePic" src={MyPic}/>
                <p>I am a graphic designer and web developer with years of experience working for companies large and small. I love learning and working with others to create cool stuff. Check out some of my recent work. I'll be <a href="mailto:josh@joshtaylordesign.com">here</a> if you have any questions.</p>
            </div>


            <div id='techStack'>
                <ul style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                    <li id="code">React</li>
                    <li id="code">Express</li>
                    <li id="code">MongoDB</li> 
                    <li id="code">Node.js</li>
                    <li id="design">Illustrator</li>
                    <li id="design">Photoshop</li>
                    <li id="design">Figma</li>
                    <li id="design">InDesign</li>
                </ul>
            </div>
        </div>
    )
}