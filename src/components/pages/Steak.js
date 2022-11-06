import React from 'react';
import FireTimer from '../firetimer/FireTimer';
import './Steak.css';
import steak from '../logo/steak2.png';

export default function Steak() {
    return(
        <div className="steak-page">
        <FireTimer
         image={steak}
        />
        <h3>SET YOUR GRILL TO 450°-500°</h3>
            <h3>ALLOW TO PREHEAT FOR 10-15 MINUTES</h3>
            <h3>GET GRILLING</h3>
            </div>
    )
}
