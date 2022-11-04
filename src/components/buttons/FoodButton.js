import React from 'react';
import './FoodButton.css';

export default function FoodButton(props){
return(
   
        <div className="foodbutton">
            <button type={props.type} className={props.className} onClick={props.onClick} aria-current="page">
            <img src={props.img} alt={props.name} />
               <a href={props.href}>{props.text}</a>
            </button>
            </div>
)
}