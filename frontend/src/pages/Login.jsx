import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <div>
      Login
      <Link to="/signup">No account? <b>Signup</b></Link>
    </div>
  );
}

export default Login;
