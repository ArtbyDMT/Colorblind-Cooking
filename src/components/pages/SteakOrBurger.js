import React from "react";
import burger from "../logo/burgerpatty.png"
import steak from "../logo/steak.jpg"
import FoodButton from "../buttons/FoodButton";

export default function SteakOrBurger(){
    return(
        <div className="SteakOrBurger-container">
            
            <FoodButton className="steak"
                type="submit"
                href="/steak"
                img={steak}
            />   
         
            <FoodButton className="burger"
               type="submit"
               href="/burger"
               img={burger}
            />
          
        </div>
        )
}