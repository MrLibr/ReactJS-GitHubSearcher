import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar: React.FC = (): JSX.Element => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
      <div className="navbar-brand">
        GitHub Searcher
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">Main</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">Information</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
