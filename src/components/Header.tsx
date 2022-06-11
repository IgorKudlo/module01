import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
};

export default Header;
