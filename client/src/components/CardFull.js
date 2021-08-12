import React from 'react'
import { Link, useHistory } from 'react-router-dom'



export default function CardFull(props) {
    const history = useHistory();
    
    const handleClick = (e) => {
        history.push(`/work/`+ props.title);
    }

    return (
        <div className="card" onClick={handleClick}>
            <div className="label" id={props.id}>
                <h1>{props.title}</h1>
<<<<<<< HEAD
                <h2>{props.subtitle}</h2>
=======
                <p>click for more details</p>
>>>>>>> ed885c2e39e96a4c12215cc306fa15e495111275
            </div>
            <img id='contain' src={props.image}/>
        </div>
    )
}

