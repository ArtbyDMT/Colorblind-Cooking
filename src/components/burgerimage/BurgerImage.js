import React from 'react';
import burger from '../logo/burger.jpg';
import './BurgerImage.css'

export default function BurgerImage(){
    return(
        <div className="burger-image">
            <img className="burger" src={burger} alt="Image"/>
        
        </div>
    )
}