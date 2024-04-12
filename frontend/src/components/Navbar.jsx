import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const username = "";
  const [islogin, SetLogin] = useState(false);
  useEffect(() => {
    const login = localStorage.getItem("login");
  });
  return (
    <div>
      <Link to={"/" + username}>Profile</Link>
      <Link
        to="/"
        onClick={() => {
          localStorage.clear();
        }}
      >
        Logout
      </Link>
    </div>
  );
}

export default Navbar;
