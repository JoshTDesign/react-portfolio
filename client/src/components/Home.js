import React from 'react'


export default function Home() {
   
   
    // function Form() {
    //     function handleSubmit(e) {
    //       e.preventDefault();
    //       console.log('You clicked submit.');
    //     }
    // }

   
    return (
        <div id="home">
            <h1>A designer with 10+ years of experience in <span id='purple'>visual design</span> and <span id='purple'>brand management</span>.</h1>
            <h2>With the <span id='purple'>coding skills</span> to bring your project to the next level.</h2>
            <div id="homeArt"/>
            <div id="fileDownload">
            <a href='/JoshTaylor_resume2021.pdf' download>Download Resum&eacute;</a>
            </div>
        </div>
        
    )
    
}