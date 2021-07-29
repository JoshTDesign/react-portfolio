import React from "react";
import { useEffect, useState } from "react";
import CardFull from './CardFull.js';
import StepOne from '../assets/Images/StepOne-Poster-Woman - Large.png';
import Gelato from '../assets/Images/gelato.png';
import Circle from '../assets/Images/circle.png';
import PawPair from '../assets/Images/pawpair.png';
import StepOneDetail1 from '../assets/Images/StepOne-Poster-Woman.png';
import ClubHAL from '../assets/Images/ClubHAL.jpg';
import HAL from '../assets/Images/HAL.jpg';
import { useHistory, useParams } from 'react-router-dom'


export default function WorkDetail() {

    const history = useHistory();
    const { id } = useParams();


    const [ workState, setWorkState ] = useState({
        workIndex: "",
        work: {}
    })

    useEffect(()=>{
        setWorkState ({
            ...workState,
            workIndex: id
            
        });
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
                    {/* <div className="label" onClick={handleClick}>
                        <h1>Back to work</h1>
                    </div> */}
                    <img id='contain' src={workState.work.img}/>
                </div>
            </div>
            <div id="workText" style={{background:`${workState.work.color}`}}>
            {/* <h2>{workState.work.title}</h2> */}
            {/* <ul>
                <li>Blender 3D</li>
                <li>Illustrator</li>
                <li>Photoshop</li>
            </ul> */}
            <p>{workState.work.desc}</p>
            </div>

            <div id="workDetail" >
                <h2>Challenge</h2>
                <p>{workState.work.challenge}</p>
            </div>

            {
            test.map((workState.work.tech}

        </div>
    );
}



//This array stores content for each piece in my portfolio.
//Headings, paragraphs, bullet items, and image links are all stored as objects here.
const work = 
    [
        {
            title:'Step One',
            color: 'white',
            desc:'Step One Dance Company is a modern dance group which combines exciting choreography with state-of-the-art stage technology. My role was to create an exciting logo and a set of posters that would match the energy of the performances. ',
            challenge: 'Holland America Line was launching a new show, focusing on modern dance and supported by exciting stage design. They needed a new logo and brand to support the dance troupe. The challenge was to create a logo that could be used for low fidelity print advertisements as well as high definition digital screens. Not only that, the logo would appear primarily on digital posters advertising a variety of shows. Each show would have its own character, color-scheme, and design. Finally, the identity had to reflect a modern, exciting look that would appeal to a younger audience.',
            img: {StepOne}.StepOne,
            tech: [
                'Blender 3D',
                'Photoshop',
                'Illustrator'
            ],
            detail:[
                {
                    title:'detail title',
                    desc:'detail description',
                    img:{StepOne}.StepOneDetail1
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


