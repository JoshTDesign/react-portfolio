import React from "react";
import { useEffect, useState } from "react";
import CardFull from './CardFull.js';
import StepOne from '../assets/Images/StepOne-Poster-Woman - Large.png';
import Gelato from '../assets/Images/gelato.png';
import ClubHAL from '../assets/Images/ClubHAL.jpg';
import HAL from '../assets/Images/HAL.jpg';
import { Link, useHistory, useParams } from 'react-router-dom'


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


    console.log(workState.work.color)

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

        </div>
    );
}

//This array stores content for each piece in my portfolio.
//Headings, paragraphs, bullet items, and image links are all stored here.
const work = 
    [
        {
            title:'Step One',
            color: '#f1a4c6',
            desc:'Step One Dance Company is a modern dance group which combines exciting choreography with state-of-the-art stage technology. My role was to create an exciting logo and a set of posters that would match the energy of the performances. ',
            challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel odio eget metus molestie luctus et nec metus. In eget maximus lorem. Integer mollis pretium aliquet. Quisque convallis nec tellus consequat interdum. Praesent mattis eros in sapien facilisis pharetra. Aenean ac sem eget tortor laoreet condimentum. Donec vel maximus quam. Integer vulputate imperdiet nunc, ac mattis ipsum efficitur quis. Curabitur interdum leo eget est luctus, vitae tempor arcu semper. Nam consequat euismod metus vel gravida.',
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
            img: {Gelato}.Gelato,
        }
    ]


