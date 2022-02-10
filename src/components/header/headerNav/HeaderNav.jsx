import React from 'react';

import { Link } from 'react-router-dom';

import './HeaderNav.css'

const HeaderNav = () => {
  return (
    <div className='headerNav'>
      <div className='header__logo'>
        <Link className="header__logo_link" to='/' data-test-id='header-logo-link'>CleverShop</Link>
      </div>
      
      <div className='header__nav_list'>
        <nav className='nav__list'>
          <li className='nav__item'>
            <Link to='/aboutUs'>About Us</Link>
          </li>
          <li className='nav__item'>
            <Link to='/women' data-test-id='menu-link-women'>Women</Link>
          </li>
          <li className='nav__item'>
            <Link to='/men' data-test-id='menu-link-men'>Men</Link>
          </li>
          <li className='nav__item'>
            <Link to="/beauty">Beauty</Link>
          </li>
          <li className='nav__item'>
            <Link to='/accessories'>Accessories</Link>
          </li>
          <li className='nav__item'>
            <Link to='/blog'>Blog</Link>
          </li>
          <li className='nav__item'>
            <Link to="/contact">Contact</Link>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default HeaderNav;