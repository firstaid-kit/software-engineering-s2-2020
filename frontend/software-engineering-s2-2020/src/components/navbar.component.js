import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">SEER Navigation</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
           <li className="navbar-item">
          <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
        <ul className="navbar-nav mr-auto">
           <li className="navbar-item">
          <Link to="/submit" className="nav-link">Submit to DB</Link>
          </li>
        </ul>
        <ul className="navbar-nav mr-auto">
           <li className="navbar-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>
        </ul>
        <ul className="navbar-nav mr-auto">
           <li className="navbar-item">
          <Link to="/user" className="nav-link">Register</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}