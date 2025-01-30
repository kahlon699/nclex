import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <nav className="navbar">
   
    {/* Logo */}
    <div className="navbar-logo">
        <Link to="/">
          <img
            src="/images/logo.png"
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
          <Link to="/practice" onClick={toggleMenu}>
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