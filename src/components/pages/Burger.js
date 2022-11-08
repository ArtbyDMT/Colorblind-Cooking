import React from 'react';
import './Burger.css';
import FireTimer from '../firetimer/FireTimer';
import burger from '../logo/burgerpatty.png';

export default function Burger(){
    return(
        <div className="burgerfiretimer">
            <FireTimer 
                image={burger}
            />
            <div className="instructions">
           <h3>SET YOUR GRILL TO 350-400°</h3>
            <h3>ALLOW TO PREHEAT FOR 10-15 MINUTES</h3>
            <h3>FLIP AND START TIMER OVER</h3>
            <h3>IF FINISHED, ENJOY YOUR FOOD!</h3>
        </div>
        </div>
    )

}