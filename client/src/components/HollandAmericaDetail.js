import React from "react";
import { useEffect, useState } from "react";


import HAL from '../assets/Images/HAL.jpg';
import HAL0 from '../assets/Images/HALDetail0.png';
import HAL1 from '../assets/Images/HALDetail1.png';
import HAL2 from '../assets/Images/HALDetail2.png';
import HAL3 from '../assets/Images/HALDetail3.png';
import Blank from '../assets/Images/blank.gif';
import { useHistory, useParams } from 'react-router-dom'


export default function HollandAmericaDetail() {

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
                    <img id='contain' src={HAL0}/>
                </div>
            </div>

            <div id="workText" style={{background:'#1c2b57'}}>
                <div id="role" >
                    <div id="one" style={{width:"50%"}}><p2>Print Design</p2></div>
                    <div id="two" style={{width:"30%"}}><p2>Production Design</p2></div>
                    <div id="three" style={{width:"20%"}}><p2>Project Management</p2></div>
                </div>
                <p>Holland America Line is an iconic brand in the cruise ship industry, with over 140 years as a company. I was hired to assist a design agency in refreshing the brand. Specifically my role was in leading the effort to establish onboard brand standards.</p>
            </div>



            <div id="workDetail" >
                <img id='contain' src={HAL1}/>
                <p>{workState.work.detailDesc1}</p>
            </div>
            <div id="workDetail" >
                <img id='contain' src={HAL2}/>
                <p>{workState.work.detailDesc2}</p>
            </div>
            <div id="workDetail" >
                <img id='contain' src={HAL3}/>
                <p>{workState.work.detailDesc3}</p>
            </div>


            

        </div>
    );
}



//This array stores content for each piece in my portfolio.
//Headings, paragraphs, bullet items, and image links are all stored as objects here.
const work = 
    [
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
        }
    ]


