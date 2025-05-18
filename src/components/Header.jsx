import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'; // For navigation links
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Arbitrary scroll threshold
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-left">
        <NavLink to="/upload" className={({ isActive }) => 
          isActive ? "header-link upload-button-style active-upload" : "header-link upload-button-style"
        }>
          Upload
        </NavLink>
      </div>
      <div className="logo-center">
        <Link to="/">Photomagic</Link>
      </div>
      <div className="header-right">
        <NavLink to="/#contact-us-section" className="header-link">
          Contact Us
        </NavLink>
      </div>
    </header>
  );
}

export default Header; 