import React from 'react';
import './FoodButton.css';

export default function FoodButton(props){
return(
    <div className="main">
        <div className="foodbutton">
            <button type={props.type} className="actualfoodbutton" onClick={props.onClick} aria-current="page">
            <img src={props.img} alt={props.name} />
               <a href={props.href}>{props.text}</a>
            </button>
            </div>
            </div>
)
}