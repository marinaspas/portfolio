import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <nav className="main-nav">
        <h1 className="logo-name">MS</h1>
        <ul className="nav-list">
          <li className="nav-link">
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
