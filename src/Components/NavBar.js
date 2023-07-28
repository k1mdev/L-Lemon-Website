import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";
import NavLogo from "../littleLemonLogos/Asset 16@4x.png"

function NavBar() {
  return (
    <nav className="navbar">
        <Link to="/"><img src={NavLogo} alt="An image"/></Link>
        <ul className="nav-links">
          <li><Link to="/" className="link">HOME</Link></li>
          <li><Link to="/menu"className="link">MENU</Link></li>
          <li><Link to="/reservations" className="link">RESERVATIONS</Link></li>
          <li><Link to="/order-online" className="link">ORDER ONLINE</Link></li>
          <li><Link to="/about" className="link">ABOUT</Link></li>
          <li><Link to="/login" className="link">LOGIN</Link></li>
        </ul>
    </nav>
  );
}

export default NavBar;
