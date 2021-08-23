import React from 'react'
import icon1 from '../assets/Images/home_icon_1.svg';
import icon2 from '../assets/Images/home_icon_2.svg';
import icon3 from '../assets/Images/home_icon_3.svg';



export default function Home() {
   
   
    // function Form() {
    //     function handleSubmit(e) {
    //       e.preventDefault();
    //       console.log('You clicked submit.');
    //     }
    // }

   
    return (
        <div id="home">
            <div id="icons">
                <img src={icon1} width="200"/>
                <img src={icon2} width="200"/>
                <img src={icon3} width="200"/>
            </div>
            <h1>A designer with 10+ years of experience in <span id='yellow'>visual design</span> and <span id='purple'>brand management</span>. With the <span id='green'>coding skills</span> to bring your project to the next level.</h1>
            <div id="fileDownload">
                <a href='/JoshTaylor_resume2021.pdf' download>Download Resum&eacute;</a>
            </div>
        </div>
        
    )
    
}