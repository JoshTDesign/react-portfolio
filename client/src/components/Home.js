import React from 'react'
import icon1 from '../assets/Images/home_icon_1.svg';
import icon2 from '../assets/Images/home_icon_2.svg';
import icon3 from '../assets/Images/home_icon_3.svg';
import html from '../assets/Images/html.svg';
import css from '../assets/Images/css.svg';
import javascript from '../assets/Images/javascript.svg';
import node from '../assets/Images/node.svg';
import mysql from '../assets/Images/mysql.svg';
import react from '../assets/Images/react.svg';
import ai from '../assets/Images/ai.svg';
import ps from '../assets/Images/ps.svg';
import xd from '../assets/Images/xd.svg';
import figma from '../assets/Images/figma.svg';



export default function Home() {
   
   
    // function Form() {
    //     function handleSubmit(e) {
    //       e.preventDefault();
    //       console.log('You clicked submit.');
    //     }
    // }

   
    return (
        <div id="home">

            <h1>Josh Taylor</h1>
            <h2>GRAPHIC DESIGNer + developer</h2>
            <p>I am a Seattle-based designer with years of experience building strong brands in variety of media. Currently, I am focusing on digital experiences and I am available for work.  If you have any questions, I would love to hear from you.</p>
            <p>253.653.7120</p>
            <p><a href="mailto:josh@joshtaylordesign.com?subject=Hey Josh!">josh@joshtaylordesign.com</a></p>
            
            {/* <div id="fileDownload">
                <a href='/JoshTaylor_resume2021.pdf' download>Download Resum&eacute;</a>
            </div> */}
            <div className="skills">
                <img src={html}/>
                <img src={css}/>
                <img src={javascript}/>
                <div className="break" />
                <img src={node}/>
                <img src={mysql}/>
                <img src={react}/>
                <img src={ai}/>
                <div className="break" />
                <img src={ps}/>
                <img src={xd}/>
                <img src={figma}/>
            </div>
        </div>
        
    )
    
}