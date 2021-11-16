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
import HAL from '../assets/Images/HAL/HAL.jpg';
import SmHtml from '../assets/Images/icons/sm_html.svg';
import SmCss from '../assets/Images/icons/sm_css.svg';
import SmJavascript from '../assets/Images/icons/sm_javascript.svg';
import SmNode from '../assets/Images/icons/sm_node.svg';
import SmMysql from '../assets/Images/icons/sm_mysql.svg';
import jtdLogo from '../assets/Images/JT_icon_small.svg';
import HAL0 from '../assets/Images/HAL/HALDetail0.png';
import HAL1 from '../assets/Images/HAL/HALDetail1.png';
import HAL2 from '../assets/Images/HAL/HALDetail2.png';
import HAL3 from '../assets/Images/HAL/HALDetail3.png';
import { useHistory, useParams } from 'react-router-dom'


export default function PawPairDetail() {

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
            history.push('/projects');
        }

    return (
        <div id="workContainer">
            <h3 id="backLink"><a href="#" onClick={handleClick}>Back to web apps</a></h3>


            <div id="workCard">
                <div className="card">
                    {/* <div className="label" onClick={handleClick}>
                        <h1>Back to work</h1>
                    </div> */}
                    <img id='contain' src={PawPair}/>
                </div>
            </div>

            <div id="workText">
                <div id="skills">
                    <img id="smallIcon" src={SmHtml}/>
                    <img id="smallIcon" src={SmCss}/>
                    <img id="smallIcon" src={SmJavascript}/>
                    <img id="smallIcon" src={SmNode}/>
                </div>
                <p>Paw Pair is a simple, fun tool for getting matched with your perfect pet companion. Skip the busy, hard to use pet finding websites and try this simple, delightful quiz tool instead.</p>
                <h3>ROLE</h3>
                <p3>Project Manager, Lead UX/UI Developer</p3>
                <h3>APPLIED SKILLS</h3>
                <p3>UX/UI Design, User-Centered Problem Solving, Git, Agile Process</p3>
                <h3>TECHNOLOGIES</h3>
                <p3>HTML, CSS, Javascript, Node.js</p3>
            <div id="projectLinkDiv" >
                <a className="link" target="blank" href="https://github.com/JoshTDesign/Paw-Pair">Project on GitHub</a>
                <a className="link" target="blank" href="https://joshtdesign.github.io/Paw-Pair/">Deployed project</a>
            </div>
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
            detailDesc2: 'detail desc 2',
            detail3: {StepOne3}.StepOne3,
            detailDesc3: 'detail desc 3'
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
            detailDesc2: 'detail desc 2',
            detail3: {ClubHAL3}.ClubHAL3,
            detailDesc3: 'detail desc 3'
        },
        {
            title:'Holland America Line',
            color: '#1c2b57',
            desc:'Holland America Line is an iconic brand in the cruise ship industry, with over 140 years as a company. I was hired to assist the design agency in refreshing the brand. Specifically my role was in leading the effort to establish onboard brand standards.',
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
            detailDesc3: 'detail desc 3'
        },
        {
            title:'Circle Community Bulletin',
            color: 'white',
            desc:'Circle Community Bulletin is a web application that can connect you to people in your community. Circle lets you create, edit and delete public announcements, and uses your geodata to show it to people in your area.',
            challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel odio eget metus molestie luctus et nec metus. In eget maximus lorem. Integer mollis pretium aliquet. Quisque convallis nec tellus consequat interdum. Praesent mattis eros in sapien facilisis pharetra. Aenean ac sem eget tortor laoreet condimentum. Donec vel maximus quam. Integer vulputate imperdiet nunc, ac mattis ipsum efficitur quis. Curabitur interdum leo eget est luctus, vitae tempor arcu semper. Nam consequat euismod metus vel gravida.',
            img: {Circle}.Circle,
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

        },
        {
            title:'Gelato',
            desc:'Gelato lorem ipsum dolor',
            img: {Circle}.Circle,
        }
    ]


