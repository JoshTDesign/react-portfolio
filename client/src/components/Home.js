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

            <h1>Josh Taylor</h1>
            <h2>GRAPHIC DESIGNer + developer</h2>
            <p>I am a Seattle-based designer with years of experience building strong brands in variety of media. Currently, I am focusing on digital experiences and I am available for work.  If you have any questions, I would love to hear from you.</p>
            <div id="fileDownload">
                <a href='/JoshTaylor_resume2021.pdf' download>Download Resum&eacute;</a>
            </div>
        </div>
        
    )
    
}