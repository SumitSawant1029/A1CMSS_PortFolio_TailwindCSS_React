
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo-removebg.png';
import hamburger1 from '../assets/hamburger1.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Primary">
        <div className="nav-left">
          <img
            src={logo}
            className="logo"
            alt="Company logo"
            width="50"
            height="50"
          />
        </div>

        {/* Primary nav buttons */}
        <div className="social nav-links">
          <button type="button" className="btn btn-outline-primary">Home</button>
          <button type="button" className="btn btn-outline-primary">Contact</button>
          <button type="button" className="btn btn-outline-primary">About Us</button>
        </div>

        
        {/* Social icons */}
        <div className="social nav-icons" style={{color:"white"}} aria-label="Social media">
          <a>
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a>
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a>
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          <img src={hamburger1} alt="Menu" width="40" height="40" />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        role="menu"
        onClick={closeMenu}
      >
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>

        <div className="mobile-icons">
          <a>
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a>
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a>
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
