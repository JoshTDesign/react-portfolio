import React from 'react'

export default function Tab(props) {
    return (
        <li className={props.status}><a href="/work">{props.text}</a></li>
    )
}