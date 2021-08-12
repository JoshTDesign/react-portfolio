import React from 'react';
import ProjectCardFull from './ProjectCardFull.js';
import StepOne from '../assets/Images/StepOne-Poster-Woman - Large.png';
import Gelato from '../assets/Images/gelato.png';
import Circle from '../assets/Images/circle.png';
import PawPair from '../assets/Images/pawpair.png';
import Rally from '../assets/Images/rally.png';
import ClubHAL from '../assets/Images/ClubHAL.jpg';
import HAL from '../assets/Images/HAL.jpg';

export default function Projects() {
    return (
        <div id="projectContainer">

            <div id="projectCard">
                <ProjectCardFull image={Circle}
                    title="Circle"
                />
            </div>
            <div id="projectCard">
                <ProjectCardFull image={PawPair}
                    title="PawPair"
                />
            </div>
            <div id="projectCard">
                <ProjectCardFull image={Rally}
                    title="Rally"
                />
            </div>


        </div>
    )
}

