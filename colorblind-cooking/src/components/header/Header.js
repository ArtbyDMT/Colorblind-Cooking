import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router';
import FireButton from '../buttons/FireButton';
import './Header.css'

function Header() {

    const [signInUser, setSignInUser] = useState({ email: "", password: "" })
    const navigator = useNavigate()

    const toggleDisplay = () => {
        if (localStorage.getItem("loggedInUser")) {
            return (
                <div className="collapse navbar-collapse" id="navbarcollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-items">
                            <div className="aboutusfirebutton">
                                <FireButton
                                    type="submit"
                                    href="/aboutus"
                                    text="About Us"
                                />
                            </div>
                        </li>
                        <li className="nav-items">
                            <div className="steakorburgernavfirebutton">
                                <FireButton
                                    type="submit"
                                    href="/steakorburger"
                                    text="Grill"
                                />
                            </div>
                        </li>
                        <li className="nav-items">
                            <div className="timersfirebutton">
                                <FireButton
                                    type="submit"
                                    href="/timers"
                                    text="Timers"
                                />
                            </div>
                        </li>
                        

                    </ul>
                    <form className="d-flex">
                        <div className="signoutfirebutton">
                            <FireButton
                                onClick={signOutSubmitHandler}
                                type="submit"
                                href="/"
                                text="Sign Out"
                            />
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="collapse navbar-collapse" id="navbarcollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-items">
                            <div className="signupfirebuttonnav">
                                <FireButton
                                    type="submit"
                                    href="/signup"
                                    text="Sign Up"
                                />
                            </div>
                        </li>
                        <li className="nav-items">
                            <div className="aboutusfirebutton">
                                <FireButton
                                    type="submit"
                                    href="/aboutus"
                                    text="About Us"
                                />
                            </div>
                        </li>

                    </ul>
                    <form className="d-flexx">
                        <input className="form-control me-2" name="email" value={signInUser.email} onChange={changeHandler} placeholder="Email" type="email" aria-label="Email" />
                        <input className="form-control me-2" name="password" value={signInUser.password} onChange={changeHandler} placeholder="Password" type="password" aria-label="Password" />
                    </form>
                    <div className="signinfirebutton">
                        <FireButton
                            onClick={signInSubmitHandler}
                            text="Sign In"
                        />
                    </div>
                </div>

            )
        }
    }




    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const tempSignIn = { ...signInUser };
        tempSignIn[name] = value;
        setSignInUser(tempSignIn);
    }

    const signInSubmitHandler = () => {
        axios.post("http://localhost:8080/login", signInUser)
            .then((response) => {
                localStorage.setItem("loggedInUser", response.data.email)
                navigator('/')
            }).catch(error => {
                console.log("Something happened during login" + error)
            })
    }

    const signOutSubmitHandler = () => {
        console.log("sign out clicked");
        localStorage.clear();
    }

    return (
        <header>
            <div className="container-fluid px-0">
                <nav className="navbar navbar-expand-sm navbar-dark bg-black py-0 px-0">
                    <a className="navbar-brand" href="/">Colorblind Cooking</a>
                
                    <button className="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                                
            
                       
                    </button>

                    {toggleDisplay()}
                </nav>
            </div>
        </header>
    )

}
export default Header;

