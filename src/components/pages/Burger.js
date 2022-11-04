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
        </div>
    )

}