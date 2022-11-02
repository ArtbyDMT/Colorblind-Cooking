import React, { useState } from "react";
import axios from "axios";
import './SignUp.css';
import flameonly from '../logo/flameonly.gif';
import FireButton from '../buttons/FireButton';
import '../buttons/FireButton.css';

const SignUp = () => {


    const [user, setUser] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
    }
    );

    const userChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const tempUser = { ...user };
        tempUser[name] = value;
        setUser(tempUser);

    }

    const signUpSubmitHandler = () => {
        axios.post("http://localhost:8080/save", user).then((response) => {
            localStorage.setItem("loggedInUser", response.data.tempUser);
        }
        ).catch((error) => {
            console.log("Issue here", error);
        })
    }

    return (
        <div className="formpage">
            <img src={flameonly} className="giffirelogo" alt=""/>


            <div class="form-body">
                <div class="">
                    <div class="form-holder">
                        <div class="form-content">
                            <div class="form-items">
                                <h3>Register Today To Begin Cooking!</h3>
                                <form class="requires-validation" novalidate>

                                    <div className="col-md-12">
                                        <label for="inputFirstName" className="form-label">First Name</label>
                                        <input name="firstName" value={user.firstName} onChange={userChangeHandler} type="text" className="form-control" id="inputFirstName" />
                                    </div>
                                    <div className="col-md-12">
                                        <label for="inputLastName" className="form-label">Last Name</label>
                                        <input name="lastName" value={user.lastName} onChange={userChangeHandler} type="text" className="form-control" id="inputLastName" />
                                    </div>
                                    <div className="col-md-12">
                                        <label for="inputEmail4" className="form-label">Email</label>
                                        <input name="email" value={user.email} onChange={userChangeHandler} type="email" className="form-control" id="inputEmail4" />
                                    </div>
                                    <div className="col-md-12">
                                        <label for="inputPassword4" className="form-label">Password</label>
                                        <input name="password" value={user.password} onChange={userChangeHandler} type="password" className="form-control" id="inputPassword4" />
                                    </div>

                                    <br />
                                    <div className="signupfirebuttonform">
                                        <FireButton
                                            onClick={signUpSubmitHandler}
                                            type="submit"
                                            href="/steakorburger"
                                            text="Sign Up"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};




export default SignUp;

