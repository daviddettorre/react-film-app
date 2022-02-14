
import React from 'react';
import { NavLink } from 'react-router-dom';
import header from '../style/components/header.css';

const Header = () => {
  return (
    <div className='header'>
    <h1>React Film</h1>
        <nav>
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>Acceuil</NavLink>
            <NavLink to="/user" className={(nav) => (nav.isActive ? "nav-active" : "")}>Favoris</NavLink>
        </nav>
    </div>
  );
};

export default Header;
