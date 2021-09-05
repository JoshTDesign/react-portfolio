import React from 'react'

export default function Test() {
    return (
        <div style={{width:'100%', 
                    height:'100vh', 
                    backgroundColor:'#444444', 
                    display:'fixed',
                    margin:'0', 
                    padding:'0'
                    }}>
            <div style={{
                width:'50%', 
                border:'1px solid pink',
                margin:'auto',
                position:'relative',
                top:'100px'}}>
                <p style={{
                margin:'0'
                }}>hello</p>
            </div>
        </div>
    )
}