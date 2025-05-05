import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = ({ setIsLoggedIn }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className={`navbar ${isLoginPage ? 'no-sticky' : ''}`}>
      <Link to="/" className="logo">Main Page</Link>
      <div className="nav-right">
        <ul className="nav-links">
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/exercise">Exercise</Link></li>
          <li><Link to="/review">Review</Link></li>
          <li><Link to="/suggestion">Suggestion</Link></li>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
