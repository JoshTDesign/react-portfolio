import React from "react";
import { useEffect, useState } from "react";

import HALLogo from '../assets/Images/HAL/HAL_Logo.svg';
import HAL from '../assets/Images/HAL/HAL.jpg';
import HAL0 from '../assets/Images/HAL/SP19_HAL-Glacier-Bay-1392_Rtchd.png';
import HAL1 from '../assets/Images/HAL/HALDetail1.png';
import HAL2 from '../assets/Images/HAL/HALDetail2.png';
import HAL3 from '../assets/Images/HAL/HALDetail3.png';
import HAL4 from '../assets/Images/HAL/TS2016_Neptune_Suite_Couple_2647.jpg';
import HALPostcard1 from '../assets/Images/HAL/HALPostcard1.png';
import Blank from '../assets/Images/blank.gif';
import { useHistory, useParams } from 'react-router-dom';
import SmIllustrator from '../assets/Images/icons/sm_illustrator.svg';
import SmPhotoshop from '../assets/Images/icons/sm_photoshop.svg';
import jtdLogo from '../assets/Images/JT_icon_small.svg'


export default function HollandAmericaDetail() {

    const history = useHistory();

    //const 'id' is derived from the URL using useParams method
    const { id } = useParams();



    const handleClick = (e) => {
            console.log('clicked');
            history.push('/work');
        }

    return (
        <div id="workContainer">
            <h3 id="backLink"><a href="#" onClick={handleClick}>Back to projects</a></h3>

            <div id="workCard">
                <div className="card">
                    <img id='contain' src={HAL0}/>
                </div>
            </div>

            <div id="workText">
                <div id="skills">
                    <img id="smallIcon" src={SmPhotoshop}/>
                    <img id="smallIcon" src={SmIllustrator}/>
                </div>
                <p>Holland America Line is an iconic brand in the cruise ship industry, with over 140 years as a company. I was hired to assist a design agency in refreshing the brand. Specifically my role was in leading the effort to establish onboard brand standards and updating assets across media channels.</p>
                <h3>ROLE</h3>
                <p3>Lead Designer</p3>
                <h3>APPLIED SKILLS</h3>
                <p3>Typography, Production Design, Brand Management</p3>
            </div>

            <div id="workDetail" style={{flexDirection: 'column', alignItems: 'center'}}>
                <img src={HALLogo} style={{width: '60%'}}/>
            </div>

            <div id="workDetail">
                <h1>Printed Matter</h1>
                <p>The firm responsible for the brand update did a beautiful job updating the logo. The mark retains its classic beauty and charm, but now feels more current and flexible.</p>
            </div>




            <div id="workDetailCard" >
                <img id='contain' src={HAL2}/>
                <p>I immediately felt this was an opportunity to design communication which is minimalist and wall-balanced, which would stand-out from the clutter. We picked a beautiful and tactile paper stock. The result was simple but effective and evoked the clean, freshly-painted aesthetic of the ships themselves.</p>
                <img id='contain' src={HAL4}/>
            </div>

            <div id="workDetail">
                <img src={HALPostcard1} style={{width:'75%'}}/>
                <p>Of course many printed pieces would require an approach with more color. White, deep blue, and light gray are the primary colors used throughout the onboard printed materials. A limited number of bright evocative colors were used to tie-in brand imagery.</p>
            </div>
            <div id="workFooter" >
                    <img src={jtdLogo} style={{width:'40px'}}/>
                    <p>Thank you for viewing this project!</p>
            </div>














            







            

        </div>
    );
}






