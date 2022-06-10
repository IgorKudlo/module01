import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')}
          >
            About Us
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
