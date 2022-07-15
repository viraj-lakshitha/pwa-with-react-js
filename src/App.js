import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Profile from "./components/Profile";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex align-items-center justify-content-between px-2 w-100 custom-navbar">
        <div className="nav-brand">Progressive Web App</div>
        <div className="d-flex nav-item">
          <Link className="navbar-item me-1" to="/">
            Home
          </Link>
          <Link className="navbar-item mx-1" to="/about">
            About
          </Link>
          <Link className="navbar-item ms-1" to="/profile">
            Profile
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
