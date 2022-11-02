import React, { useEffect, useState } from "react";
import grillgif from "../logo/grillgif.gif";
import layer from "../logo/layer.png";

export default function Home() {

    const [dateTime, setDateTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => setDateTime(new Date()), 1000 )
    }, [])

    return(
    <div className="container-fluids home-margin-top-less-200px">
        <div className="row">
            <div className="container-fluids home-margin-top-less-200px">
                <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <br />
                    <main className='px3'>
                    <img src={layer} className="cookinglogo" alt="" width="300px"/>
                    <br /><br />
                   <a href="https://www.goodhousekeeping.com/appliances/outdoor-grill-reviews/g2320/best-outdoor-grills-0611/">
                     <img src={grillgif} className="cookinglogo" alt="" width="250px"/></a>
                        <br />
                        <br />
                        
                        <br />
                        <p class="lead">Colorblind? Trouble cooking? Have no fear, we're here!</p>
                       <h5>It is currently {dateTime.getHours()}:{dateTime.getMinutes()}:{dateTime.getSeconds()}, let's get grilling!</h5>
                        
                    </main>
                </div>
            </div>
        </div>
    </div>)



}
