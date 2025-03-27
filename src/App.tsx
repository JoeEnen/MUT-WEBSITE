import React from "react";
import Home from "./assets/pages/Home/home"
import Leadership from "./assets/pages/Leadership/leadership";
import TracksPage from "./assets/pages/Tracks/tracksP";
import EventsPage from "./assets/pages/Events/Events";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./assets/images/MUTlogo.png"


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/leadership" element={<Leadership />} />  
       <Route path="/tracks" element={<TracksPage />} />
       <Route path="/events" element={<EventsPage />} />
      </Routes>
    </Router>
  );
};

export default App;

const Header: React.FC = () => {
  return (
    <header className="headerContainer">
      <div className="logos">
        <h1>info@mut.ac.ke</h1>
        <h1>+254-798 959 217</h1>
      </div>
      <nav className="navBar">
      <div className="mainl">
      <div className="logo">
        <img src={logo} alt="MUTC Logo" />
      </div>
      <div className="logo">
        <h1>Murang'a University Tech Club (MUTC) </h1>
      </div>
      </div>
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
