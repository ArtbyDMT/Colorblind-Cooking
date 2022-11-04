import React from 'react';
import './FoodButton.css';

export default function FoodButton(props){
return(
   
        <div className="foodbutton">
            <button type={props.type} className={props.className} onClick={props.onClick} aria-current="page">
           
               <a href={props.href}> <img src={props.img} alt={props.name} />{props.text}</a>
            </button>
            </div>
)
}