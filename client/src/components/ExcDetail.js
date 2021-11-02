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
import Exc from '../assets/Images/Exc.png';
import ExcLogo from '../assets/Images/exc/EXC_sketchLogo.svg';
import ExcLogoBreakdown from '../assets/Images/exc/EXC_logoBreakdown.svg';
import SmIllustrator from '../assets/Images/icons/sm_illustrator.svg';
import SmPhotoshop from '../assets/Images/icons/sm_photoshop.svg';
import ExcDetail1 from '../assets/Images/ExcDetail1.png';
import ExcDetail2 from '../assets/Images/ExcDetail2.png';
import ExcDetail3 from '../assets/Images/ExcDetail3.png';
import ExcDetail4 from '../assets/Images/exc/EXC_StageDesign.png';
import ExcDetail5 from '../assets/Images/ExcDetail5.png';
import ExcDetail6 from '../assets/Images/ExcDetail6.png';
import HAL from '../assets/Images/HAL/HAL.jpg';
import HAL0 from '../assets/Images/HAL/HALDetail0.png';
import HAL1 from '../assets/Images/HAL/HALDetail1.png';
import HAL2 from '../assets/Images/HAL/HALDetail2.png';
import HAL3 from '../assets/Images/HAL/HALDetail3.png';
import Blank from '../assets/Images/blank.gif';
import { useHistory, useParams } from 'react-router-dom';
import jtdLogo from '../assets/Images/JT_icon_small.svg'




export default function ExcDetail() {

    const history = useHistory();

    //const 'id' is derived from the URL using useParams method
    const { id } = useParams();


    const [ workState, setWorkState ] = useState({
        workIndex: "",
        work: {}
    })

    useEffect(()=>{

        //workIndex is assigned the id derived from 'useParams'
        setWorkState ({
            ...workState,
            workIndex: id
            
        });

        //forEach loop finds par of work object that matches the 'id' state and assigns that data to the 'work' state.
        work.forEach(item=>{
            if (item.title === id) {
            setWorkState ({
                ...workState,
                work: item
            })
            }
        })
    },[]);

    console.log(workState.work.tech);

    const handleClick = (e) => {
            console.log('clicked');
            history.push('/work');
        }

    return (
        <div id="workContainer">

            <div id="workCard">
                <div className="card">
                    <img id='contain' src={Exc}/>
                </div>
            </div>

            <div id="workText">
                <div id="skills">
                    <img id="smallIcon" src={SmPhotoshop}/>
                    <img id="smallIcon" src={SmIllustrator}/>
                </div>
                <p>Holland America Line needed a simple logo to represent a growing program for port information and enrichment. Originally developed for the physical space called Explorations Cafe, the concept soon grew to encompass all of the ships port offerings under one umbrella.</p>
                <h3>ROLE</h3>
                <p3>Lead Designer</p3>
                <h3>APPLIED SKILLS</h3>
                <p3>Typography, Logo Design</p3>
            </div>
            
            <div id="detailContainer">
                <img src={ExcLogo} style={{width: '60%'}}/>
            </div>

            <div id="workDetailCard" >
                <img id='contain' src={ExcDetail5}/>
                <p>The EXC icon itself needed to work in a wide variety of media and sizes. Everything from the venue signage, to digital screens, apps, printed maps, and more!</p>
            </div>
            <div id="workDetail" >
                <img id='contain' src={ExcLogoBreakdown} style={{width: '70%'}}/>
                <p>The EXC program encompasses a lot of smaller products and services. So I designed the logo in a modular way. The pin icon and the exc mark can be extracted in used in different ways. As the program develops, the logo system can accommodate new additions.</p>
            </div>
            <div id="workDetailCard" >
                <img id='contain' src={ExcDetail3}/>
                <p>A wide palette of bright colors was needed to accent and bring balance to a library of location photography that would be used throughout the program to amplify a sense of place.</p>
            </div>
            <div id="workDetail" >
                <img id='contain' src={ExcDetail4} style={{width:'80%'}}/>
                <p>Once the logo family was created, we went about applying the identity to a variety of posters and products. We made sure the logo could be reproduced at a variety of sizes and media. This sample shows a few examples of digital posters that were created for the EXC Talks lecture series.</p>
            </div>
            <div id="workDetailCard" >
                <img id='contain' src={ExcDetail5}/>
                <p>Part of role was to help architects and signage suppliers adapt the logo for custom signage. I also worked with suppliers to create things like custom hats, jackets, and other items for staff to wear.</p>
            </div>
            <div id="workFooter" >
                    <img src={jtdLogo} style={{width:'40px'}}/>
                    <p>Thank you for viewing this project!</p>
            </div>

            

        </div>
    );
}



//This array stores content for each piece in my portfolio.
//Headings, paragraphs, bullet items, and image links are all stored as objects here.
const work = 
    [
        {
            title:'EXC',
            color: '#00205c',
            desc:'Holland America Line needed a simple logo to represent a growing program for port information and enrichment. Originally developed for the physical space called Explorations Cafe, the concept soon grew to encompass all of the ships port offerings under one umbrella.',
            challenge: 'exc challenge text',
            img: {Exc}.Exc,
            tech: [
                'Blender 3D',
                'Photoshop',
                'Illustrator'
            ],
            detail1: {ExcDetail1}.ExcDetail1,
            detailDesc1: 'My role was to create a logo and guidelines for a growing design system. In the end, it included logo files, palettes, digital and printed templates and posters.',
            detail2: {ExcDetail2}.ExcDetail2,
            detailDesc2: 'With so many programs falling under the EXC umbrella, it was important to plan for this mark to be adaptable. While Explorations Central refers to the ship’s port information library - a physical space, the wider EXC program came to encompass much more than that. EXC tours, EXC talks and EXC channel were just a few of the ship programs that benefited from the connection to EXC identity.',
            detail3: {ExcDetail3}.ExcDetail3,
            detailDesc3: 'A wide palette of bright colors was needed to accent and bring balance to a library of location photography that would be used throughout the program to amplify a sense of place.',
            detail4:  {ExcDetail4}.ExcDetail4,
            detailDesc4: 'Once the logo family was created, we went about applying the identity to a variety of posters and products. We made sure the logo could be reproduced at a variety of sizes and media. This sample shows a few examples of digital posters that were created for the EXC Talks lecture series.',
            detail5:  {ExcDetail5}.ExcDetail5,
            detailDesc5: 'Part of role was to help architects and signage suppliers adapt the logo for custom signage. I also worked with suppliers to create things like custom hats, jackets, and other items for staff to wear.',
            detail6: {ExcDetail6}.ExcDetail6,
            detailDesc6: '',
        },
        {
            title:'Step One',
            color: '#0c0c0c',
            desc:'Step One Dance Company is a modern dance group which combines exciting choreography with state-of-the-art stage technology. My role was to create an exciting logo and a set of posters that would match the energy of the performances. ',
            challenge: 'Holland America Line was launching a new show, focusing on modern dance and supported by exciting stage design. They needed a new logo and brand to support the dance troupe. The challenge was to create a logo that could be used for low fidelity print advertisements as well as high definition digital screens. Not only that, the logo would appear primarily on digital posters advertising a variety of shows. Each show would have its own character, color-scheme, and design. Finally, the identity had to reflect a modern, exciting look that would appeal to a younger audience.',
            img: {StepOne}.StepOne,
            tech: [
                'Blender 3D',
                'Photoshop',
                'Illustrator'
            ],
            detail1: {StepOne1}.StepOne1,
            detailDesc1: 'Early experiments really featured a lot of concepts with simple shapes. I knew the final application of this logo was going to appear on a lot of creative layouts with a wide variety of artistic styles and colors, so the solution had to be simple and direct enough to stand up to almost any use situation. Early poster designs were featuring explosions of color over dark background, so I almost started thinking of this as stencil art - simple shapes layered over bright colors and textures.',
            detail2: {StepOne2}.StepOne2,
            detailDesc2: 'For the final logo, I created a custom type using simple shapes combined together with an overlay effect. My feeling was that this would be a logo that could be used at a variety of sizes and colors without losing its effectiveness.',
            detail3: {StepOne3}.StepOne3,
            detailDesc3: '',
            detail4:  {Blank}.Blank,
            detailDesc4: '',
            detail5:  {Blank}.Blank,
            detailDesc5: '',
            detail6: {Blank}.Blank,
            detailDesc6: '',
        },
        {
            title:'Club HAL',
            color: '#2e1547',
            desc:'Step One Dance Company is a modern dance group which combines exciting choreography with state-of-the-art stage technology. My role was to create an exciting logo and a set of posters that would match the energy of the performances. ',
            challenge: 'Holland America Line was launching a new show, focusing on modern dance and supported by exciting stage design. They needed a new logo and brand to support the dance troupe. The challenge was to create a logo that could be used for low fidelity print advertisements as well as high definition digital screens. Not only that, the logo would appear primarily on digital posters advertising a variety of shows. Each show would have its own character, color-scheme, and design. Finally, the identity had to reflect a modern, exciting look that would appeal to a younger audience.',
            img: {ClubHAL}.ClubHAL,
            tech: [
                'Blender 3D',
                'Photoshop',
                'Illustrator'
            ],
            detail1: {ClubHAL1}.ClubHAL1,
            detailDesc1: 'Early experiments really featured a lot of concepts with simple shapes. I knew the final application of this logo was going to appear on a lot of creative layouts with a wide variety of artistic styles and colors, so the solution had to be simple and direct enough to stand up to almost any use situation. Early poster designs were featuring explosions of color over dark background, so I almost started thinking of this as stencil art - simple shapes layered over bright colors and textures.',
            detail2: {ClubHAL2}.ClubHAL2,
            detailDesc2: '',
            detail3: {ClubHAL3}.ClubHAL3,
            detailDesc3: '',
            detail4:  '',
            detailDesc4: '',
            detail5:  '',
            detailDesc5: '',
            detail6: '',
            detailDesc6: '',
        },
        {
            title:'Holland America Line',
            color: '#1c2b57',
            desc:'Holland America Line is an iconic brand in the cruise ship industry, with over 140 years as a company. I was hired to assist a design agency in refreshing the brand. Specifically my role was in leading the effort to establish onboard brand standards.',
            challenge: '',
            img: {HAL0}.HAL0,
            tech: [
                'Blender 3D',
                'Photoshop',
                'Illustrator'
            ],
            detail1: {HAL1}.HAL1,
            detailDesc1: 'The new logo represented a huge update from the old one. Certainly elements remained, such as the famous egg outline and the ship with icon dark blue hull. The word mark was also refreshed, but mostly the same as the old logo. One really big move was to stack the egg and text and center align them, a big shift from the old left-aligned logo. This opened up an opportunity to center the layouts and allowed us to create some really timeless designs which put the egg icon front-and-center.',
            detail2: {HAL2}.HAL2,
            detailDesc2: 'One of the first tasks was to create a set of in-room stationery. The use of restraint here was very intentional. We asked the printer to use a high-quality uncoated paper that had enough tooth to feel textural - a nice choice for the bright white and deep blue color combination. The result was a set of cards, letterhead and other pieces that felt clean, luxurious, and modern.',
            detail3: {HAL3}.HAL3,
            detailDesc3: '',
            detail4:  '',
            detailDesc4: '',
            detail5:  '',
            detailDesc5: '',
            detail6: '',
            detailDesc6: '',
        },
        {
            title:'Circle Community Bulletin',
            color: 'white',
            desc:'Circle Community Bulletin is a web application that can connect you to people in your community. Circle lets you create, edit and delete public announcements, and uses your geodata to show it to people in your area.',
            challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel odio eget metus molestie luctus et nec metus. In eget maximus lorem. Integer mollis pretium aliquet. Quisque convallis nec tellus consequat interdum. Praesent mattis eros in sapien facilisis pharetra. Aenean ac sem eget tortor laoreet condimentum. Donec vel maximus quam. Integer vulputate imperdiet nunc, ac mattis ipsum efficitur quis. Curabitur interdum leo eget est luctus, vitae tempor arcu semper. Nam consequat euismod metus vel gravida.',
            img: {Circle}.Circle
            

        },
        {
            title:'Paw Pair',
            color: 'white',
            desc:'Paw Pair is a simple, fun tool for getting matched with your perfect pet companion. Skip the busy, hard to use pet finding websites and try this simple, delightful quiz tool instead.',
            challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel odio eget metus molestie luctus et nec metus. In eget maximus lorem. Integer mollis pretium aliquet. Quisque convallis nec tellus consequat interdum. Praesent mattis eros in sapien facilisis pharetra. Aenean ac sem eget tortor laoreet condimentum. Donec vel maximus quam. Integer vulputate imperdiet nunc, ac mattis ipsum efficitur quis. Curabitur interdum leo eget est luctus, vitae tempor arcu semper. Nam consequat euismod metus vel gravida.',
            img: {PawPair}.PawPair,
            tech: [
                'Blender 3D',
                'Photoshop',
                'Illustrator'
            ],
            detail:[
                {
                    title:'detail title',
                    desc:'detail description',
                    img:''
                },
                {
                    title:'detail title',
                    desc:'detail description',
                    img:''
                },
                {
                    title:'detail title',
                    desc:'detail description',
                    img:''
                },
            ]

        }
    ]


