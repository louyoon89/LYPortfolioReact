import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <h1>Louis Yoon</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/portfolio" activeclassname="active">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeclassname="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
