import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Charts from "./pages/Analytics";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/:name" element={<Profile />} />
          <Route path="/charts" element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
