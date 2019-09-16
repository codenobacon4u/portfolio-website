import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
  <nav className="nav nav-masthead justify-content-center bg-dark">
    <Link className="nav-link" to="/">Home</Link>
    <Link className="nav-link" to="/about">About</Link>
    <Link className="nav-link" to="/projects">Projects</Link>
    <Link className="nav-link" to="/resume">Resume</Link>
  </nav>
);

export default NavBar;