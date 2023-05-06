import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const acitveStyles = {
    backgroundColor: "lightblue",
    padding: "7px",
    borderRadius: "10px",
    color: "darkblue",
    textDecoration: "none",
    margin: "20px",
  };
  const styles = {
    textDecoration: "none",
    color: "#fefefe",
    margin: "20px",
  };
  return (
    <header className="header">
      <NavLink
        to={"/"}
        style={({ isActive }) => (isActive ? acitveStyles : styles)}
        className="logo"
      >
        <h1 className="links">Logo</h1>
      </NavLink>
      <NavLink
        to={"/login"}
        style={({ isActive }) => (isActive ? acitveStyles : styles)}
      >
        <h1 className="links">Login</h1>
      </NavLink>
      <NavLink
        to={"/Register"}
        style={({ isActive }) => (isActive ? acitveStyles : styles)}
      >
        <h1 className="links">Register</h1>
      </NavLink>
      <NavLink
        to={"/about-us"}
        style={({ isActive }) => (isActive ? acitveStyles : styles)}
      >
        <h1 className="links">About Us</h1>
      </NavLink>
      <NavLink
        to={"/hotels"}
        style={({ isActive }) => (isActive ? acitveStyles : styles)}
      >
        <h1 className="links">Hotels</h1>
      </NavLink>
      <NavLink
        to={"/teams"}
        style={({ isActive }) => (isActive ? acitveStyles : styles)}
      >
        <h1 className="links">Teams</h1>
      </NavLink>
      <NavLink
        to={"/quotes"}
        style={({ isActive }) => (isActive ? acitveStyles : styles)}
      >
        <h1 className="links">Quotes</h1>
      </NavLink>
    </header>
  );
}

export { Navbar };
