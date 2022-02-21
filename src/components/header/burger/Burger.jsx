import React, { useState } from 'react';
import cn from 'classnames'

import './burger.css'
import Menu from '../headerNav/Menu';

const Burger = (p) => {

  // Бургер

  const [isMenuOpen, toggle] = useState(false);

  function toggleMenu () {
    toggle(!isMenuOpen);
    document.body.classList.toggle('_lock');
  }

  // Прокрутка меню

  const menuLinks = document.querySelectorAll('.nav__link[data-goto]');

  if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
    });
    
  function onMenuLinkClick(e) {
  const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top  - document.querySelector('header').offsetHeight;

    // if (iconMenu.classList.contains('active_burg')) {
    //   document.body.classList.remove('_lock');
    //   iconMenu.classList.remove('active_burg');
    //   menuBody.classList.remove('active_burg');
    // }

    window.scrollTo({
      top:gotoBlockValue,
      behavior: "smooth"
    });
    e.preventDefault();
  }}} 

  return (
    <>
      <div className={ cn('burger', { active_burg: isMenuOpen }) } onClick={ toggleMenu } >
        <span />
        </div>
        <div className={ cn('nav__list_burg', { active_burg: isMenuOpen }) }> 
          <Menu />
        </div>
        
      
    </>
    
  );  
};

export default Burger;