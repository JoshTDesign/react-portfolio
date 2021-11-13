import React from 'react'
import { useEffect, useState, createRef } from "react";
import { Link, useHistory } from 'react-router-dom';
import Logo from '../assets/JT_Logo.js'
import Logosvg from '../assets/JT_Logo.svg';
import MenuIcon from '../assets/menuIcon.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


import animationData from '../assets/jtd_menu.json';

export default function Head2() {

    const history = useHistory();

    const [tabIndex, setTabIndex] = useState(0);
    const [small, setSmall] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 800;


    const smallStyle = {};

    const scrollHandler = () => {
        window.addEventListener("scroll", () => {
            setSmall(window.pageYOffset > 0);
            // smallStyle = {
            //     lineHeight: '50px',
            //     color: 'red'
            // };
        });
    }

    const handleClick = () => {

        let btn = document.getElementById('menuIcon');
        let iconTop = document.getElementById('menuIcon').firstElementChild;
        let iconBottom = document.getElementById('menuIcon').lastElementChild;
        let openDeg = 45;
        let closedDeg = 0;

        if (!menuOpen) {
            //code to open menu
            iconTop.style.transform = 'rotate('+openDeg+'deg)';
            iconTop.style.top = '25px';
            iconBottom.style.transform = 'rotate('+(openDeg-90)+'deg)';
            iconBottom.style.top = '25px';
        } else {
            //code to close menu
            iconTop.style.transform = 'rotate('+closedDeg+'deg)';
            iconTop.style.top = '20px';
            iconBottom.style.transform = 'rotate('+closedDeg+'deg)';
            iconBottom.style.top = '30px';
        }



        iconTop.style.transform = 'rotate('+menuOpen ? closedDeg : openDeg+'deg)';
        // btn.style.transform = 'rotate:(30deg)';
        
        if (menuOpen === false) {
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            scrollHandler();
        }
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
          // unsubscribe "onComponentDestroy"
          window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);


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



//conditional formatting for the navigation bar based on screen width
if (width > breakpoint) {
    return (
            //standard layout for wider screens
            <nav>
                <ul id="navbar" className={menuOpen ? "show" : "hide"}>
                    <li id="navButton"><a href="#">Design</a></li>
                    <li id="navButton"><a href="#">Web Apps</a></li>
                    <li id="navLogo"><a href="#"><img src={Logosvg}/></a></li>
                    <li id="navButton"><a href="#">Contact</a></li>
                    <li id="navButton"><a href="#">Resume</a></li>
                </ul>
            </nav>
        )
}
    return (
        // alternate menu layout for smaller screens
        <nav>
            <div id="menuIcon" onClick={handleClick}><div/><div/></div>
            <ul id="menu" className={menuOpen ? "show" : "hide"}>
                <li id="menuButton"><a href="#">Design</a></li>
                <li id="menuButton"><a href="#">Web Apps</a></li>
                <li id="menuButton"><a href="#">Contact</a></li>
                <li id="menuButton"><a href="#">Resume</a></li>
            </ul>
            <div id="navLogo"><a><img src={Logosvg}/></a></div>
        </nav>
    )

    }
                
            //     <Tabs selectedIndex={tabIndex} onSelect={testFunction}>


            //         <TabList style={style}>

            //         <Tab>Design</Tab>
            //         <Tab>Web Apps</Tab>
            //         <Tab className='logo'>
            //             <a id="logo" href="/"><img src={Logosvg}/></a>
            //         </Tab>
            //         <Tab>Contact</Tab>
            //         <Tab>Resume</Tab>
            //         {/* <Tab>Resum&#xC9;</Tab> */}
            //         </TabList>
            //     </Tabs>
            // </div>
            /* <div id="compact" className='compact' className={`${ small ? "small" : ""}`} >
                    <div className='logo'>
                        <a id="logo" href="/"><img src={Logosvg}/></a>
                    </div>
                    <div>
                        <img src={MenuIcon} />
                    </div>
                
            </div> */
        // </div>
