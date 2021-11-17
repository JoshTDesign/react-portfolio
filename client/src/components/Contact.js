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
                <div>
                <p id='intro'>I am a Seattle-based designer with years of experience building strong brands in variety of media. Currently, I am focusing on digital experiences and I am available for work.  If you have any questions, I would love to hear from you.</p>
                <a href="tel:253-653-7120">253.653.7120</a>
                <a href="mailto:josh@joshtaylordesign.com?subject=Hey Josh!">josh@joshtaylordesign.com</a>
                </div>
            </div>
        </div>
    )
}