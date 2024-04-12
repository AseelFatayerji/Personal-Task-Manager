import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

import "../styles/login.css";

function Login() {  
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");

  const verify = () =>{

  }
  return (
    <div>
      <div className="card">
        <div className="card-header">Login</div>
        <div className="card-body">
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
          <div>
            <button>Login</button>
          </div>
        </div>
        <div className="links">
          <Link to="/signup">
            No account? <b>Signup</b>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
