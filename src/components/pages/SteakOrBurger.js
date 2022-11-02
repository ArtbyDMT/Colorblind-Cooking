import React from "react";
import burger from "../logo/burger.jpg"
import steak from "../logo/steak.jpg"
import FoodButton from "../buttons/FoodButton";

export default function SteakOrBurger(){
    return(
        <div className="SteakOrBurger-container">
            <div className="Steak">
            <FoodButton className="steak"
                type="submit"
                href="/steak"
                img={steak}
            />   
            </div>
            <div className="Burger">
            <FoodButton className="burger"
               type="submit"
               href="/burger"
               img={burger}
            />
            </div>
        </div>
        )
}