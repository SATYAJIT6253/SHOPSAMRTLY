import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <div className="nav-bar">
      <div>
        <NavLink to="/" style={{ textDecoration: "none", }}>
          <h1 className="nav-bar-heading">My Store</h1>
        </NavLink>
      </div>

      <div className="section-bar">
        <NavLink to="/" style={{ textDecoration: "none" }} className="section-bar-each">
          Home
        </NavLink>
        <NavLink to="/Review" style={{ textDecoration: "none",}}className="section-bar-each">
          Review
        </NavLink>
        <NavLink to="/About" style={{ textDecoration: "none" }}className="section-bar-each">
          About Us
        </NavLink>
        <NavLink to="/Contact" style={{ textDecoration: "none" }}className="section-bar-each">
          Contact us
        </NavLink>
      </div>
      <div>
        <NavLink to="/cart">
          <FaShoppingCart className="cart-icon" />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
