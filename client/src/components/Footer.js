import React from 'react';
import Logo from '../assets/JT_Logo.js';
import Logosvg from '../assets/JT_Logo.svg';
import GithubIcon from '../assets/Images/GitHubIcon.svg';
import LinkedInIcon from '../assets/Images/LinkedInIcon.svg';
import TwitterIcon from '../assets/Images/TwitterIcon.svg';

export default function Footer() {
    
    function draw() {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
  
          ctx.fillStyle = 'rgb(30,30,30)';
          ctx.fillRect(10, 10, 50, 50);
  
          ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
          ctx.fillRect(30, 30, 50, 50);
        }
      }



    return (
            <div id="footer">
                <div id="tagline">
                    <p>Designed and coded by Josh Taylor</p>
                </div>
                <div id="line"/>

                <div className="iconContainer">
                    <div id="icon"><a href="https://github.com/JoshTDesign" target="_blank"><img src={GithubIcon}/></a></div>
                    <div id="icon"><a href="https://www.linkedin.com/in/josh-taylor-738bb218/" target="_blank"><img src={LinkedInIcon}/></a></div>
                    <div id="icon"><a href="https://twitter.com/TaylorDesigner" target="_blank"><img src={TwitterIcon}/></a></div>
                </div>
            </div>
    )
}