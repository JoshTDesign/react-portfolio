import React from 'react'
import { useEffect, useState, createRef } from "react";
import { Link, useHistory } from 'react-router-dom';
import Logo from '../assets/JT_Logo.js'
import Logosvg from '../assets/JT_Logo.svg';
import MenuIcon from '../assets/menuIcon.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


import animationData from '../assets/jtd_menu.json';

export default function Head() {

    const history = useHistory();

    const [tabIndex, setTabIndex] = useState(2);
    const [small, setSmall] = useState(false);

    let smallStyle = {
        lineHeight: '150px'
    }

    const scrollHandler = () => {
        window.addEventListener("scroll", () => {
            setSmall(window.pageYOffset > 0)
            smallStyle = {
                lineHeight: '50px',
                color: 'red'
            };
            console.log(smallStyle);
            // if (small === true) {
            //     console.log('true')
            // } else {
            //     console.log('false')
            // }
        });
    }


    useEffect(() => {
        if (typeof window !== "undefined") {
            scrollHandler();
        }
    }, []);


    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

const testFunction = (n) => {
    console.log(n);
    switch(n) {
        case 0:
          history.push(`/work`)
          break;
        case 1:
            history.push(`/projects`)
            break;
        case 2:
            history.push(`/`)
            break;
        case 3:
            history.push(`/contact`)
            break;
        case 4:
            history.push(`/resume`)
            break;
        default:

          break;
      }
      setTabIndex(n);
}

const classChange = () => {
    let test = "test";
    return test;
}




const style = {
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
}




    return (
        // <div id="container">
        <div id="headContainer">
            <div id="head" className={`${ small ? "small" : ""}`} >
                
                <Tabs selectedIndex={tabIndex} onSelect={testFunction}>
                    <TabList style={style}>

                    <Tab>Design</Tab>
                    <Tab>Web Apps</Tab>
                    <Tab className='logo'>
                        <a id="logo" href="/"><img src={Logosvg}/></a>
                    </Tab>
                    <Tab>Contact</Tab>
                    <Tab>Resume</Tab>
                    {/* <Tab>Resum&#xC9;</Tab> */}
                    </TabList>
                </Tabs>
            </div>
            <div id="compact" className='compact' className={`${ small ? "small" : ""}`} >
                    <div className='logo'>
                        <a id="logo" href="/"><img src={Logosvg}/></a>
                    </div>
                    <div>
                        <img src={MenuIcon} />
                    </div>
                
            </div>
        </div>
    )
}