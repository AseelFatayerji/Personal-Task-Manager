import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

import "../styles/login.css";

function Signup() {
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [confirm, Setconfirm] = useState("");

  const register = () => {
    if (confirm === password && password !== "") {
      const url = "//localhost:3001/auth/" + email +"/"+name+ "/" + password;
    axios
      .post(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">Signup</div>
        <div className="card-body">
          <div className="float inputs">
            <div>
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
            <div>
              <input
                type="text"
                placeholder="name"
                onChange={(e) => {
                  Setname(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="float inputs">
            <div>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />{" "}
            </div>
            <div>
              <input
                type="email"
                placeholder="example@gmail.com"
                onChange={(e) => {
                  Setemail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="float inputs">
            <div>
              <FontAwesomeIcon icon={faLock} className="icon" />{" "}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  Setpassword(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="float inputs">
            <div>
              <FontAwesomeIcon icon={faLock} className="icon" />{" "}
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => {
                  Setconfirm(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <button onClick={register}>Signup</button>
          </div>
        </div>
        <div className="links">
          <Link to="/">
            Have an account? <b>Login</b>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
