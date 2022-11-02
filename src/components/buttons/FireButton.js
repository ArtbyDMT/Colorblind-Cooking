import React from 'react';
import './FireButton.css';

export default function FireButton(props){
return(
    <div className="main">
        <div className="firebutton">
            <button type={props.type} className="actualfirebutton" onClick={props.onClick} aria-current="page"
         >
               <a href={props.href}>{props.text}</a>
            </button>
            </div>
            </div>
)
}