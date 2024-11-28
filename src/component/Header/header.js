import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <span>DEENIS</span>
          <span className="highlight">LAW CHAMBER</span>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? (
            <i className="fa-solid fa-xmark"></i> // Close icon
          ) : (
            <i className="fa-solid fa-bars"></i> // Hamburger icon
          )}
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#registration">Registration</a>
            </li>
            <li>
              <a href="#onlineconsultant">Online Consultant</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
