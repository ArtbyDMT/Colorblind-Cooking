import React from 'react';
import './FireButton.css';

export default function FireButton(props){
return(
            <button type={props.type} className="actualfirebutton" onClick={props.onClick} aria-current="page"
         >
               <a href={props.href}>{props.text}</a>
            </button>
)
}