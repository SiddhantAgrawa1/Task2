import React from 'react';
import './index.css'
export default function Card(props){
    return (
        <div id='card' key={props.id}>
            <img src={props.avatar} alt="User"/>
            <p id='name'>{props.first_name + props.last_name}</p>
            <p>{props.email}</p>
        </div>
    )
}