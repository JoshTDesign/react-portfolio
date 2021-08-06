import React from 'react'
import { Link, useHistory } from 'react-router-dom'



export default function CardFull(props) {
    const history = useHistory();
    
    const handleClick = (e) => {
        history.push(`/projects/`+ props.title);
    }
    return (
        <div className="card" onClick={handleClick}>
            <div className="label" id={props.id}>
                <h1>{props.title}</h1>
                <p>click for more details</p>
            </div>
            <img id='contain' src={props.image}/>
        </div>
    )
}

