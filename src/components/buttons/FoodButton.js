import React from 'react';
import './FoodButton.css';

export default function FoodButton(props){
return(
   
        <div className="foodbutton">
           
               <a href={props.href}> <img onClick={props.onClick} src={props.img} className="foodimage" alt={props.name} />{props.text}</a>
            </div>
)
}