import React from 'react'

import './HeaderNav.css'

import Menu from './Menu';

const HeaderNavList = (p) => {
  return (
    <nav className= 'nav__list'>
      <Menu />
  </nav>
  );
};

export default HeaderNavList;