import React from "react";
import { useEffect, useState } from "react";
import CardFull from './CardFull.js';
import StepOne from '../assets/Images/StepOne-Poster-Woman - Large.png';
import Gelato from '../assets/Images/gelato.png';
import Circle from '../assets/Images/circle.png';
import PawPair from '../assets/Images/pawpair.png';
import StepOne1 from '../assets/Images/StepOneDetail1.png';
import StepOneLogo from '../assets/Images/StepOne/StepOneDiagram.svg';
import StepOneHumanity from '../assets/Images/StepOne/StepOne_Humanity_h.png';
import StepOneColors from '../assets/Images/StepOne/StepOne_Colors.svg';
import StepOnePoster1 from '../assets/Images/StepOne/StepOne_poster_1.png';
import StepOnePoster2 from '../assets/Images/StepOne/StepOne_poster_2.png';
import StepOneVIP from '../assets/Images/StepOne/StepOne_VIP_1.png';
import StepOne2 from '../assets/Images/StepOneDetail2.png';
import StepOne3 from '../assets/Images/StepOneDetail3.png';
import ClubHAL from '../assets/Images/ClubHAL.jpg';
import ClubHAL1 from '../assets/Images/ClubHALDetail1.png';
import ClubHAL2 from '../assets/Images/ClubHALDetail2.png';
import ClubHAL3 from '../assets/Images/ClubHALDetail3.png';
import Exc from '../assets/Images/Exc.png';
import ExcDetail1 from '../assets/Images/ExcDetail1.png';
import ExcDetail2 from '../assets/Images/ExcDetail2.png';
import ExcDetail3 from '../assets/Images/ExcDetail3.png';
import ExcDetail4 from '../assets/Images/ExcDetail4.png';
import ExcDetail5 from '../assets/Images/ExcDetail5.png';
import ExcDetail6 from '../assets/Images/ExcDetail6.png';

import Blank from '../assets/Images/blank.gif';
import { useHistory, useParams } from 'react-router-dom'
import SmIllustrator from '../assets/Images/icons/sm_illustrator.svg';
import SmPhotoshop from '../assets/Images/icons/sm_photoshop.svg';
import jtdLogo from '../assets/Images/JT_icon_small.svg'


export default function StepOneDetail() {

    const history = useHistory();

    //const 'id' is derived from the URL using useParams method
    const { id } = useParams();


    const [ workState, setWorkState ] = useState({
        workIndex: "",
        work: {}
    })


    console.log(workState.work.tech);

    const handleClick = (e) => {
            console.log('clicked');
            history.push('/work');
        }

    return (
        <div id="workContainer">

            <div id="workCard">
                <div className="card">
                    <img id='contain' src={StepOne}/>
                </div>
            </div>

            <div id="workText">
                <div id="skills">
                    <img id="smallIcon" src={SmPhotoshop}/>
                    <img id="smallIcon" src={SmIllustrator}/>
                </div>
                <p>Step One Dance Company is a modern dance group which combines exciting choreography with state-of-the-art stage technology. My role was to create an exciting logo and a set of posters that would match the energy of the performances.</p>
                <h3>ROLE</h3>
                <p3>Lead Designer</p3>
                <h3>APPLIED SKILLS</h3>
                <p3>Typography, Logo Design, 3D Modeling</p3>
            </div>

            <div id="detailContainer">
                <img src={StepOneLogo} style={{width: '60%'}}/>
            </div>

            <div id="workDetailCard" >
                <img id='contain' src={StepOneHumanity}/>
                <p>Going into this project, I knew that simplicity was going to be important. It would be featured on many posters, for a variety of shows, so I didn’t want it to ever overshadow the title of the show. </p>
            </div>

            <div id="workDetail" >
                <h1>Colors</h1>
                <img id='contain' src={StepOneColors} style={{width: '90%'}}/>
                <p>I also knew that it would be helpful to have a logo that could easily shift palette. That would allow maximum flexibility in the poster artwork and allow for more variety which would help differentiate shows.</p>
            </div>

            <div id="workDetailCard" >
                <div id="posters" >
                    <img id='contain' src={StepOnePoster1} style={{width: '48%'}}/>
                    <img id='contain' src={StepOnePoster2} style={{width: '48%'}}/>
                </div>
                <p>The poster graphics were created by compositing 3D assets generated in Blender 3D with dancer photography in photoshop.</p>
            </div>

            <div id="workDetailCard" >
                    <img id='contain' src={StepOneVIP}/>
                <p>Eventually we extended the Step One brand to printed pieces and promotional flyers and web assets.</p>
            </div>


            <div id="workFooter" >
                    <img src={jtdLogo} style={{width:'40px'}}/>
                    <p>Thank you for viewing this project!</p>
            </div>
        </div>


    );
}
