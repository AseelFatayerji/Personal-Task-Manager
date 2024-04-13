import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartPie, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import "../styles/nav.css";

function Navbar() {
  const username = localStorage.getItem("name");
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link className="link" to={"/" + username}>
              <FontAwesomeIcon icon={faHome}/>
            </Link>
          </li>
          <li>
            <Link className="link" to={"/charts"}>
            <FontAwesomeIcon icon={faChartPie}/>
            </Link>
          </li>
          
        </ul>
        <footer>
            <Link
              className="link"
              to="/"
              onClick={() => {
                localStorage.clear();
              }}
            >
              <FontAwesomeIcon icon={faRightFromBracket } />
            </Link>
          </footer>
      </nav>
    </div>
  );
}

export default Navbar;
