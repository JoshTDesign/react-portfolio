import React from 'react'
import MyPic from '../assets/Images/myPicCropped.png';


export default function About() {
    return (
        <div className='about'>
            <div>
                <h3>What is it that I do?</h3>
            </div>
            <div id='profile'>
                <img id="profilePic" src={MyPic}/>
                <p>You can call me a designer who understands how to create a digital product, or a front-end developer who knows how to design delightful experiences. I do both. I have proven myself as a designer working for companies large and small for years. I recently earned a certificate for full-stack development from the University of Washington.</p>
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