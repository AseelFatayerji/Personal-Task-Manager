import { Link } from "react-router-dom";
import "../styles/nav.css";

function Navbar() {
  const username = "profile";
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link className="link" to={"/" + username}>Profile</Link>
          </li>
          <li>
            <Link className="link" to={"/chart"}>Analytics</Link>
          </li>
          <li>
            <Link className="link"
              to="/"
              onClick={() => {
                localStorage.clear();
              }}
            >
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
