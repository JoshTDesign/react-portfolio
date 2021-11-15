import React from "react";
import { useEffect, useState } from "react";
import CardFull from './CardFull.js';
import StepOne from '../assets/Images/StepOne-Poster-Woman - Large.png';
import Circle from '../assets/Images/circle.png';
import PawPair from '../assets/Images/pawpair.png';
import StepOne1 from '../assets/Images/StepOneDetail1.png';
import StepOne2 from '../assets/Images/StepOneDetail2.png';
import StepOne3 from '../assets/Images/StepOneDetail3.png';
import ClubHAL from '../assets/Images/ClubHAL.jpg';
import ClubHAL1 from '../assets/Images/ClubHALDetail1.png';
import ClubHAL2 from '../assets/Images/ClubHALDetail2.png';
import ClubHAL3 from '../assets/Images/ClubHALDetail3.png';
import SmHtml from '../assets/Images/icons/sm_html.svg';
import SmCss from '../assets/Images/icons/sm_css.svg';
import SmJavascript from '../assets/Images/icons/sm_javascript.svg';
import SmNode from '../assets/Images/icons/sm_node.svg';
import SmMysql from '../assets/Images/icons/sm_mysql.svg';
import jtdLogo from '../assets/Images/JT_icon_small.svg';
import { useHistory, useParams } from 'react-router-dom';


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

            <div id="workText">
                <div id="skills">
                    <img id="smallIcon" src={SmHtml}/>
                    <img id="smallIcon" src={SmCss}/>
                    <img id="smallIcon" src={SmJavascript}/>
                    <img id="smallIcon" src={SmNode}/>
                    <img id="smallIcon" src={SmMysql}/>
                </div>
                <p>Circle is a web application that uses your geospatial properties to view and create local events and ask/offer services within your general area, or community.</p>
                <h3>ROLE</h3>
                <p3>Project Manager, Lead UX/UI Developer</p3>
                <h3>APPLIED SKILLS</h3>
                <p3>UX/UI Design, User-Centered Problem Solving, Git, Agile Process</p3>
                <h3>TECHNOLOGIES</h3>
                <p3>HTML, CSS, Javascript, MySQL, Express.js, Sequelize, Node.js, geoip-lite, bcrypt</p3>
            <div id="projectLinkDiv" >
                <a className="link" target="blank" href="https://github.com/JoshTDesign/Circle-Community-Bulletin">Project on GitHub</a>
                <a className="link" target="blank" href="http://oui-circle-app.herokuapp.com/">Deployed project</a>
            </div>
            </div>






            <div id="workFooter" >
                    <img src={jtdLogo} style={{width:'40px'}}/>
                    <p>Thank you for viewing this project!</p>
            </div>


            

        </div>
    );
}






