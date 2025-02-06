// src/components/Navbar.js
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../services/AuthContext";
import { FaUser, FaLock} from "react-icons/fa"; // Import the user icon
import "./Navbar.css";

const Navbar = ({ openLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout} = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handlePracticeClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault(); // Prevent navigation
      openLogin(); // Open the login modal
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            alt="NCLEX Master Logo"
            className="logo-image"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/practice" onClick={handlePracticeClick}>
            Practice
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>       
      </ul>
     {/* Conditional rendering for Login/Logout */}
     <span className="login-icon">
          {isAuthenticated ? (
            <button onClick={logout} className="logout-button">
              <FaLock className="user-icon" /> {/* User icon instead of text */}
            </button>
          ) : (
            <button onClick={openLogin} className="login-button">
              <FaUser className="user-icon" /> {/* User icon instead of text */}
            </button>
          )}
        </span>
      {/* Hamburger menu icon for mobile */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;