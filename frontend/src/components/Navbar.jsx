import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [islogin, SetLogin] = useState(false);
  useEffect(() => {
    const login = localStorage.getItem("login");
  });
  return(
    <div>
      <Link to="/">Home</Link>
      {islogin ? (
        <div>
          <Link to="/profile">Profile</Link>
          <Link
            to="/"
            onClick={() => {
              localStorage.clear();
            }}
          >
            Logout
          </Link>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}

export default Navbar;
