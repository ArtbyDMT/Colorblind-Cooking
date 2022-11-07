import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Profile";
import FireButton from "../buttons/FireButton";


export default function Profile() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/findByEmail/${id}`);
    setUser(result.data);
  };

  return (
    <div class="form-body">
                <div class="">
                    <div class="form-holder">
                        <div class="form-content">
                            <div class="form-items">
                                <h3 className="text-center m-4">Profile</h3>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>First Name:</b>
                  {user.firstname}
                </li>
                <li className="list-group-item">
                  <b>Last Name:</b>
                  {user.lastname}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {user.email}
                </li>
              </ul>
            </div>
            
          </div>
          <div className="buttons">
          <div className="editfirebuttonform">
                                        <FireButton
                                            type="submit"
                                            href="/edituser"
                                            text="Edit"
                                        />
                                    </div>
                                    <div className="homefirebuttonform">
                                        <FireButton
                                            type="submit"
                                            href="/"
                                            text="Home"
                                        />
                                    </div>
                                    </div>
          </div>
          </div>
          
          
        </div>
  );
}