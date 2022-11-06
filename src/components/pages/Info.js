import React from "react";
import './Info.css';
import FireButton from "../buttons/FireButton";
import colorblindfacts from '../logo/colorblindfacts.png';



export default function Info() {
    return (
        <div className="container-aboutus">
                <div className="img-and-ul">
                <br />
                <br />
                <br />
                <br />
                <img src={colorblindfacts} className="imagefacts" alt="colorblind"/>

                <ul className="fact-list">
                    <li>It is much more common among men. It affects 1 in every 12 males but less than 1 in every 200 females.</li>
                    <li>True colorblindness is black and gray, most people are actually color-deficient.</li>
                    <li>Color blindness is hereditary, however, it can also be caused by eye diseases, aging or retina damage</li>
                    <li>People who suffer from red green color blindness have a difficult time determining if their meat is cooked enough. Without being able to see different shades of red, it is hard to tell.</li>
                </ul>
                <div className="infobuttons">
                <div className="factsbuttons">
                    <h3 className="h3">Learn More!</h3>
                    <br />
                    
                    <div className="factsfirebutton">
                        <FireButton
                            type="submit"
                            href="https://colormax.org/"
                            text="Facts!"
                        />
                    </div>
                    <br />
                    <br />
                    
                    <div className="morefactsfirebutton">
                        <FireButton
                            type="submit"
                            href="https://enchroma.com/blogs/beyond-color/interesting-facts-about-color-blindness#:~:text=Color%20blindness%20is%20more%20common,have%20red%2Dgreen%20color%20blindness."
                            text="More Facts!"
                        />
                    </div>
                    <br />
                <br />
                    <div className="contactusfirebutton">
                    <FireButton
                        type="submit"
                        href="mailto: johnnywaffles1@hotmail.com"
                        text="Contact Us"
                    />
                </div>
                </div>
               
               </div>
                </div>
                </div>
    )
}