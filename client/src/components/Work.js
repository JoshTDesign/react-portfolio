import React from 'react';
import CardFull from './CardFull.js';
import StepOne from '../assets/Images/StepOneCover.png';
import ClubHAL from '../assets/Images/ClubHAL.jpg';
import HAL from '../assets/Images/HAL/HAL.jpg';
import Exc from '../assets/Images/exc/Exc.png';

export default function Work() {
    return (
        <div id="projectContainer">

            <div id="projectCard">
                <CardFull image={Exc}
                    title="EXC"
                    link="exc"
                />
            </div>
            <div id="projectCard">
                <CardFull image={StepOne}
                    title="Step One"
                    link="stepone"
                />
            </div>
            <div id="projectCard">
                <CardFull image={ClubHAL}
                    title="Club HAL"
                    link="clubhal"
                />
            </div>
            <div id="projectCard">
                <CardFull image={HAL}
                    title="Holland America Line"
                    link="hollandamerica"
                />
            </div>


        </div>
    )
}

