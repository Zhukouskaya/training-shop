import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderNav.css'

const Menu = () => {
  return (
    <div className='menu'>
      <ul data-test-id='menu'>
        <li className='nav__item'>
          <Link to='/aboutUs' data-test-id='menu-link-about'>About Us</Link>
        </li>
        <li className='nav__item'>
          <Link to='/women' data-test-id='menu-link-women'>Women</Link>
        </li>
        <li className='nav__item'>
          <Link to='/men' data-test-id='menu-link-men'>Men</Link>
        </li>
        <li className='nav__item'>
          <Link to="/beauty"  data-test-id='menu-link-beauty'>Beauty</Link>
        </li>
        <li className='nav__item'>
          <Link to='/accessories' data-test-id='menu-link-accessories'>Accessories</Link>
        </li>
        <li className='nav__item'>
          <Link to='/blog' data-test-id='menu-link-blog'>Blog</Link>
        </li>
        <li className='nav__item'>
          <Link to='/contact' data-test-id='menu-link-contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;