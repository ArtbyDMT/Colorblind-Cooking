import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import FireButton from "../buttons/FireButton";
import flameonly from '../logo/flameonly.gif';
import "./EditUser.css";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  useEffect(() => {
    loadUser();
  }, []);


  const onSubmit = async function(e) {
    e.preventDefault();
    const formData = new FormData(e.target.closest("form"));
    const user = Object.fromEntries(formData);
    console.log(user);

    await axios.post(`http://localhost:8080/editUserInfo/`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/editUserInfo/`);
    setUser(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/deleteByEmail/`);
    loadUser();
  };

  return (
    <div className="formpage">
            <img src={flameonly} className="giffirelogo" alt=""/>


            <div class="form-body">
                <div class="">
                    <div class="form-holder">
                        <div class="form-content">
                            <div class="form-items">
                                <h3 className="text-center m-4">Edit User</h3>
                                <form class="requires-validation" onSubmit={onSubmit}>

                                    <div className="col-md-12">
                                        <label for="inputFirstName" className="form-label">First Name</label>
                                        <input name="firstName" type="text" className="form-control" id="inputFirstName" />
                                    </div>
                                    <div className="col-md-12">
                                        <label for="inputLastName" className="form-label">Last Name</label>
                                        <input name="lastName"  type="text" className="form-control" id="inputLastName" />
                                    </div>
                                    <div className="col-md-12">
                                        <label for="inputEmail4" className="form-label">Email</label>
                                        <input name="email" type="email" className="form-control" id="inputEmail4" />
                                    </div>
                                    <div className="col-md-12">
                                        <label for="inputPassword4" className="form-label">Password</label>
                                        <input name="password" type="password" className="form-control" id="inputPassword4" />
                                    </div>

                                    <br />
                                    <div className="editbuttons">

                                    <div className="editfirebuttonform">
                                        <FireButton
                                            onClick={onSubmit}
                                            type="submit"
                                            text="Submit"
                                        />
                                    </div><br />
                                    
                                    <div className="cancelfirebuttonform">
                                        <FireButton
                                            type="submit"
                                            href="/"
                                            text="Cancel"
                                        />
                                    </div><br />
                                    <div className="deletefirebuttonform">
                                        <FireButton
                                            onClick={deleteUser}
                                            type="submit"
                                            href="/"
                                            text="Delete"
                                        />
                                    </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
