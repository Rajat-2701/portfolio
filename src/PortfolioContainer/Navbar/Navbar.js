import React, { useState } from "react";
import '../Navbar/Navbar.css';
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink activeClassName='nav-link active' className="nav-link" aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='nav-link active' className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='nav-link active' className="nav-link" to="/resume">
                  Resume
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='nav-link active' className="nav-link" to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='nav-link active' to="/contact" className="nav-link">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
