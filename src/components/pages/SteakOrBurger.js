import React from "react";
import burger from "../logo/burgerpatty.png"
import steak from "../logo/steak2.png"
import FoodButton from "../buttons/FoodButton";
import './SteakOrBurger.css'

export default function SteakOrBurger(props){

    return(
        <div className="SteakOrBurger-container">
            
            <FoodButton 
                type="submit"
                href="/steak"
                img={steak}
                setSteakOrBurger={() => props.setSteakOrBurger("steak")}
            />   
         
            <FoodButton 
               type="submit"
               href="/burger"
               img={burger}
               setSteakOrBurger={() => props.setSteakOrBurger("burger")}
            />
          
        </div>
        )
}