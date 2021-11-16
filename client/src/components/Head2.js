import React from 'react'
import { useEffect, useState, createRef } from "react";
import { Link, useHistory } from 'react-router-dom';
import Logosvg from '../assets/JT_Logo.svg';

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
        });
    }

    const handleClick = () => {

        let btn = document.getElementById('menuIcon');
        let iconTop = document.getElementById('menuIcon').firstElementChild;
        let iconBottom = document.getElementById('menuIcon').lastElementChild;
        let menu = document.getElementById('menu');
        let openDeg = 45;
        let closedDeg = 0;
        let closedMenu = 0;

        if (!menuOpen) {
            //code to open menu
            iconTop.style.transform = 'rotate('+openDeg+'deg)';
            iconTop.style.top = '25px';
            iconBottom.style.transform = 'rotate('+(openDeg-90)+'deg)';
            iconBottom.style.top = '25px';
            menu.style.transform = 'translate(0em, 0)';
        } else {
            //code to close menu
            iconTop.style.transform = 'rotate('+closedDeg+'deg)';
            iconTop.style.top = '20px';
            iconBottom.style.transform = 'rotate('+closedDeg+'deg)';
            iconBottom.style.top = '30px';
            menu.style.transform = 'translate(-22.5em, 0)';
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
        const handleResizeWindow = () => {
            setWidth(window.innerWidth);
            //reset menu to closed when window resized to +800
            if (window.innerWidth > 800) {
                setMenuOpen(false);
            }
        };
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

document.addEventListener('click', (event) => {
    const flyoutElement = document.getElementById("menu");
    let targetElement = event.target;

    do {
        //if clicked inside menu
        if (targetElement == flyoutElement) {
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);
        return;
})

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
                <li id="menuButton"><a onClick={() => {
                    history.push('/work');
                }}>Design</a></li>
                <li id="menuButton"><a onClick={() => {
                    history.push('/projects');
                }}>Web Apps</a></li>
                    <li id="navLogo"><a onClick={() => {
                        history.push('/');
                    }}><img src={Logosvg}/></a></li>
                <li id="menuButton"><a onClick={() => {
                    history.push('/contact');
                }}>Contact</a></li>
                <li id="menuButton"><a onClick={() => {
                    history.push('/resume');
                }}>Resume</a></li>
                </ul>
            </nav>
        )
}
    return (
        // alternate menu layout for smaller screens
        <nav>
            <div id="menuIcon" onClick={handleClick}><div/><div/></div>
            <ul id="menu" className={menuOpen ? "show" : "hide"}>
                <li id="menuButton"><a onClick={() => {
                    history.push('/');
                    handleClick();
                }}>Home</a></li>
                <li id="menuButton"><a onClick={() => {
                    history.push('/work');
                    handleClick();
                }}>Design</a></li>
                <li id="menuButton"><a onClick={() => {
                    history.push('/projects');
                    handleClick();
                }}>Web Apps</a></li>
                <li id="menuButton"><a onClick={() => {
                    history.push('/contact');
                    handleClick();
                }}>Contact</a></li>
                <li id="menuButton"><a onClick={() => {
                    history.push('/resume');
                    handleClick();
                }}>Resum&‌eacute;</a></li>
            </ul>
            <div id="navLogo"><a><img src={Logosvg}/></a></div>
        </nav>
    )

    }
                
