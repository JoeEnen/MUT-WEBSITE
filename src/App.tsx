import React from "react";
import Home from "./assets/pages/home"
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;

const Header: React.FC = () => {
  return (
    <header className="headerContainer">
      <div className="logo">
        <h1>Murang'a University Tech Club (MUTC) </h1>
      </div>

      <nav className="navBar">
        <ul className="navLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/leadership">Leadership</Link>
          </li>
          <li>
            <Link to="/tracks">Tracks</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
