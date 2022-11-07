import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

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
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

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
          <Link className="btn btn-primary my-2 toedituser" to={"/edituser"}>
            Edit User
            </Link>
            <br />
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
  );
}