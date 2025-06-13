import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = ({ setIsLoggedIn }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const navigate = useNavigate();

  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className={`navbar ${isLoginPage ? 'no-sticky' : ''}`}>
      <Link to="/" className="logo">Main Page</Link>
      <div className="nav-right">
        <ul className="nav-links">
          {role === 'murid' && (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/course">Courses</Link></li>
              <li><Link to="/exercise">Exercise</Link></li>
              <li><Link to="/review">Review</Link></li>
              <li><Link to="/forum">Forum</Link></li>
            </>
          )}

          {role === 'guru' && (
            <>
              <li><Link to="/teacher">Profile</Link></li>
              <li><Link to="/course">Courses</Link></li>
              <li><Link to="/exercise">Exercise</Link></li>
              <li><Link to="/review">Review</Link></li>
              <li><Link to="/forum">Forum</Link></li>

            </>
          )}

          <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
