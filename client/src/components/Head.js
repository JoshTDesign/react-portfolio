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

    const [tabIndex, setTabIndex] = useState(null);


const testFunction = (n) => {
    // console.log(n);
    switch(n) {
        case 0:
          history.push(`/work`)
          break;
        case 1:
            history.push(`/projects`)
            break;
        case 2:
            history.push(`/about`)
            break;
        case 3:
            history.push(`/resume`)
            break;
        default:
          console.log('default');
      }
      setTabIndex(n);
}
    return (
        // <div id="container">
            <div id="head">
                <a id="logo" href="/">
                    <img src={Logosvg} style={{height:'90px'}}/>
                </a>
                <p>Josh Taylor is a designer and developer based in Seattle.</p>
                
                <Tabs selectedIndex={tabIndex} onSelect={testFunction}>
                    <TabList>
                    <Tab>Design</Tab>
                    <Tab>Web Apps</Tab>
                    <Tab>About</Tab>
                    <Tab>Resum&#xC9;</Tab>
                    </TabList>
                </Tabs>
            </div>
        // </div>
    )
}