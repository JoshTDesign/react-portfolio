import React from 'react';
import CardFull from './CardFull.js';
import StepOne from '../assets/Images/StepOne-Poster-Woman - Large.png';
import Gelato from '../assets/Images/gelato.png';
import Circle from '../assets/Images/circle.png';
import PawPair from '../assets/Images/pawpair.png';
import ClubHAL from '../assets/Images/ClubHAL.jpg';
import HAL from '../assets/Images/HAL.jpg';

export default function Work() {
    return (
        <div id="workContainer">

            <div id="workCard">
                <CardFull image={StepOne}
                    title="Step One"
                />
            </div>
            <div id="workCard">
                <CardFull image={ClubHAL}
                    title="Club HAL"
                />
            </div>
            <div id="workCard">
                <CardFull image={HAL}
                    title="Holland America Line"
                />
            </div>
            <div id="workCard">
                <CardFull image={Gelato}
                    title="Gelato"
                />
            </div>

        </div>
    )
}

