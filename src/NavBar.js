import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";


function NavBar() {
  return (
    <div className="nav">
      <NavLink
        to="/"
        exact="true"
        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact="true"
        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        exact="true"
        className={({ isActive }) => (isActive ? 'active' : 'inactive')}

      >
        Login
      </NavLink>
    </div>
  );
}

export default NavBar;