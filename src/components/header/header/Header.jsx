import React, { useState } from 'react';

import HeaderNav from './../headerNav/HeaderNav';
import cn from 'classnames'

import './assets/header.css';

import Phone from './assets/img/tel.svg'
import Location from './assets/img/location.svg';
import Time from './assets/img/time.svg';

import Globe from './assets/img/user_panel/globe.svg';
import Search from './assets/img/user_panel/search.svg';
import User from './assets/img/user_panel/user.svg';
import ShoppingBag from './assets/img/user_panel/shopping-bag.svg';
import Social from './headerSocial/Social'
import Burger from '../burger/Burger';
import Cart from '../../pages/clothes/cart/Cart';


const Header = (p) => {
  const [isCartOpen, setToggle] = useState(false);

  function toggleCart () {
    setToggle(!isCartOpen);
    document.body.classList.toggle('_lock');
  }

  return (
    <header data-test-id='header'>
    <section className="header__info">
      <div className="header__info__left">
        <div className="tel">
          <img src={Phone} alt="tel" />
          <p className="header__info_text">+375 29 100 20 30</p>
        </div>
        <div className="location">
          <img src={Location} alt="location" />
          <p className="header__info_text">Belarus, Gomel, Lange 17</p>
        </div>
        <div className="time">
          <img src={Time} alt="time" />
          <p className="header__info_text">All week 24/7</p>
        </div>
      </div>
      <Social social= { p.social }/>
    </section>
    
    <section className="header__navigation">
      <HeaderNav />
        <div className="header__user_panel">
          <button className="user__btn ">
          <img src={Search} alt="Search" />
          </button>
          <button className="user__btn">
            <img src={Globe} alt="Globe" />
          </button>
          <button className="user__btn">
            <img src={User} alt="User" />
          </button>
          <button className={ cn('cart', 'user__btn', { active: isCartOpen }) }  onClick={ toggleCart } >
            <img src={ ShoppingBag} alt="ShoppingBag" />
          </button>
          <Burger/>
          <Cart />
        </div>
      </section>
    </header>
  );
};

export default Header;