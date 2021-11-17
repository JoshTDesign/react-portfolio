import React from 'react'
import Headshot2 from '../assets/Images/headshot2.png';

export default function Home() {
    return (
        <div id="contact">
            <img src={Headshot2} style={{width:'275px'}}/>
            <div id='bio'>
                <ul id='tech'>
                    <li>Branding</li>
                    <li>UX/UI Design</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                    <li>Node.js</li>
                    <li>MySQL</li>
                </ul>
                <p id='intro'>I am a Seattle-based designer with years of experience building strong brands in variety of media. Currently, I am focusing on digital experiences and I am available for work.  If you have any questions, I would love to hear from you.</p>
            </div>
        </div>
    )
}