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

  return (
    <>
      <div className={ cn('burger', { active_burg: isMenuOpen }) } onClick={ toggleMenu } >
        <span />
        </div>
        <div className={ cn('nav__list_burg', { active_burg: isMenuOpen }) }  onClick={ toggleMenu }> 
          <Menu />
        </div>
        
      
    </>
    
  );  
};

export default Burger;