import React from 'react'
import Logo from '../assets/JT_Logo.js'
import Logosvg from '../assets/JT_Logo.svg'

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
                <p>designed and coded by Josh Taylor</p>
            </div>
    )
}