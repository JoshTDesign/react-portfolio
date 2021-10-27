import React from "react";
import { useEffect, useState } from "react";

import HALLogo from '../assets/Images/HAL/HAL_Logo.svg';
import HAL from '../assets/Images/HAL/HAL.jpg';
import HAL0 from '../assets/Images/HAL/SP19_HAL-Glacier-Bay-1392_Rtchd.png';
import HAL1 from '../assets/Images/HAL/HALDetail1.png';
import HAL2 from '../assets/Images/HAL/HALDetail2.png';
import HAL3 from '../assets/Images/HAL/HALDetail3.png';
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
                <p3>Typography, Logo Design, 3D Modeling</p3>
            </div>

            <div id="detailContainer">
                <img src={HALLogo} style={{width: '60%'}}/>
            </div>

            <div id="workDetailCard" >
                <img id='contain' src={HAL1}/>
                <p>Going into this project, I knew that simplicity was going to be important. It would be featured on many posters, for a variety of shows, so I didn’t want it to ever overshadow the title of the show. </p>
            </div>















            <div id="workCard">
                <div className="card">
                    <img id='contain' src={HAL0}/>
                </div>
            </div>

            <div id="workText" style={{background:'#1c2b57'}}>
                <div id="role" >
                    <div id="one" style={{width:"50%"}}><p2>Print Design</p2></div>
                    <div id="two" style={{width:"30%"}}><p2>Production Design</p2></div>
                    <div id="three" style={{width:"20%"}}><p2>Project Management</p2></div>
                </div>
                <p>Holland America Line is an iconic brand in the cruise ship industry, with over 140 years as a company. I was hired to assist a design agency in refreshing the brand. Specifically my role was in leading the effort to establish onboard brand standards.</p>
            </div>





            

        </div>
    );
}






