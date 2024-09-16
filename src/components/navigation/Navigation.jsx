import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <h4>De Tandenborstel</h4>

        <ul>
          <li>
            <NavLink className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"} to="/cavities">Gaatjes</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"} to="/appointments">Afspraak maken</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"} to="/whitening">Tanden bleken</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;