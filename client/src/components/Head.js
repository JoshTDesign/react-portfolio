import React from 'react'
import { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import Logo from '../assets/JT_Logo.js'
import Logosvg from '../assets/JT_Logo.svg'
// import Tab from './Tab.js'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

export default function Head() {

    const history = useHistory();

    const [tabIndex, setTabIndex] = useState(2);


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

const style = {
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
}
    return (
        // <div id="container">
            <div id="head" >
                
                <Tabs selectedIndex={tabIndex} onSelect={testFunction}>
                    <TabList style={style}>
                    <Tab>Design</Tab>
                    <Tab>Web Apps</Tab>
                    <Tab><a id="logo" href="/"><img src={Logosvg} style={{height:'90px'}}/></a></Tab>
                    <Tab>Contact</Tab>
                    <Tab>Resume</Tab>
                    {/* <Tab>Resum&#xC9;</Tab> */}
                    </TabList>
                </Tabs>
            </div>
        // </div>
    )
}