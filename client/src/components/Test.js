import React, { useRef, useEffect } from 'react'
import Logosvg from '../assets/Images/JT_icon_circle.svg'

const Test = props => {
    const canvasRef = useRef(null)

    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(ctx.canvas.width/2, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
        ctx.fill()
    }

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount = 0
        let animationFrameId

        //drawing here
        const render = () => {
            frameCount++
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    },[draw])

        return <canvas ref={canvasRef} {...props}/>

}

export default Test;




// export default function Test() {



//     return (

//         <p>hello</p>
        // <div style={{width:'100%', 
        //             height:'100vh', 
        //             backgroundColor:'#444444', 
        //             display:'fixed',
        //             margin:'0', 
        //             padding:'0'
        //             }}>
        //     <div style={{
        //         width:'180px', 
        //         border:'1px solid pink',
        //         margin:'auto',
        //         position:'relative',
        //         top:'100px'}}>
        //         <img src={Logosvg} style={{margin:'auto', width:'180px'}}/>
        //     </div>
        // </div>
//     )
// }