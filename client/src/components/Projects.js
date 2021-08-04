import React from 'react';
import CardFull from './CardFull.js';
import StepOne from '../assets/Images/StepOne-Poster-Woman - Large.png';
import Gelato from '../assets/Images/gelato.png';
import Circle from '../assets/Images/circle.png';
import PawPair from '../assets/Images/pawpair.png';
import ClubHAL from '../assets/Images/ClubHAL.jpg';
import HAL from '../assets/Images/HAL.jpg';

export default function Projects() {
    return (
        <div id="projectContainer">

            <div id="projectCard">
                <CardFull image={Circle}
                    title="Circle"
                />
            </div>
            <div id="projectCard">
                <CardFull image={PawPair}
                    title="Paw Pair"
                />
            </div>


        </div>
    )
}

