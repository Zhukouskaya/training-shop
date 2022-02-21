import React from 'react';

import { Link } from 'react-router-dom';
import './HeaderNav.css'

import HeaderNavList from './HeaderNavList';

const HeaderNav = () => {

  return (
    <div className='header__nav'>
      <div className='header__logo'>
        <Link className="header__logo_link" to='/' data-test-id='header-logo-link'>CleverShop</Link>
      </div>
      
      <div className='header__nav_list'>
        <HeaderNavList />
      </div>
    </div>
  );
};

export default HeaderNav;