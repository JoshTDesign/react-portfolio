import React from "react";
import { useEffect, useState } from "react";
import CardFull from './CardFull.js';
import StepOne from '../assets/Images/StepOne-Poster-Woman - Large.png';
import Gelato from '../assets/Images/gelato.png';
import Circle from '../assets/Images/circle.png';
import PawPair from '../assets/Images/pawpair.png';
import StepOne1 from '../assets/Images/StepOneDetail1.png';
import StepOne2 from '../assets/Images/StepOneDetail2.png';
import StepOne3 from '../assets/Images/StepOneDetail3.png';
import ClubHAL from '../assets/Images/ClubHAL.jpg';
import ClubHAL1 from '../assets/Images/ClubHALDetail1.png';
import ClubHAL2 from '../assets/Images/ClubHALDetail2.png';
import ClubHAL3 from '../assets/Images/ClubHALDetail3.png';

import { useHistory, useParams } from 'react-router-dom'


export default function CircleDetail() {

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
                    {/* <div className="label" onClick={handleClick}>
                        <h1>Back to work</h1>
                    </div> */}
                    <img id='contain' src={Circle}/>
                </div>
            </div>
            
            <div id="workText" style={{background:`#5b1212`}}>
            <p>Circle is a web application that uses your geospatial properties to view and create local events and ask/offer services within your general area, or community.</p>
                <div id="arrow"/>
            </div>


            <div id="projectLinkDiv" >
                <a className="link" target="blank" href="https://github.com/JoshTDesign/Circle-Community-Bulletin">Project on GitHub</a>
                <a className="link" target="blank" href="http://oui-circle-app.herokuapp.com/">Deployed project</a>
            </div>
            <div id="workDetail">
                <div id="projectRole" >
                    <h3>My Role</h3>
                    <p>Project Manager, Front-End Lead Developer</p>
                </div>
            </div>
            <div id="workDetail">
                <div id="technology" >
                    <h3>Technology Used</h3>
                    <p>Express.js, Sequelize, mysql2, Node.js, cloudinary, geoip-lite, bcrypt</p>
                </div>
            </div>




            

        </div>
    );
}






