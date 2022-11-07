import React from 'react';
import './Burger.css';
import FireTimer from '../firetimer/FireTimer';
import burger from '../logo/burgerpatty.png';

export default function Burger(){
    return(
        <div>
            <FireTimer 
                image={burger}
            />
            <h3>SET YOUR GRILL TO 350°-400°</h3>
            <h3>ALLOW TO PREHEAT FOR 10-15 MINUTES</h3>
            <h3>WHEN TIMER FINISHED, EITHER FLIP OR TAKE OFF GRILL</h3>
        </div>
    )

}