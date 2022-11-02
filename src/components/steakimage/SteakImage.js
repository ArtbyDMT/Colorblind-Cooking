import React from 'react';
import steak from '../logo/steak.jpg';
import './SteakImage.css'

export default function SteakImage(){
    return(
        <div className="steak-image">
            <button className="steak">
            <img className="steak" src={steak} alt="Image"/>
            </button>
        </div>
    )
}