import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import '../Courses_Web_CSS/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">EduLearn</h1>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Profile</Link></li>
          <li><Link to="/course" onClick={() => setIsOpen(false)}>Courses</Link></li>
          <li><Link to="/exercise" onClick={() => setIsOpen(false)}>Exercise</Link></li>
          <li><Link to="/review" onClick={() => setIsOpen(false)}>Review</Link></li>
          <li><Link to="/suggestion" onClick={() => setIsOpen(false)}>Suggestion</Link></li>
        </ul>
      </div>

      <div className="nav-right">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button className="search-btn"><FaSearch /></button>
        </div>
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
