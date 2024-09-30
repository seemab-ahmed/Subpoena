import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

function Header() {

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">The Subpoena Service</Link>
        <Link to="/contact" className="primary-btn header-btn">Contact Us</Link>
      </div>
    </header>
  );
}

export default Header;
