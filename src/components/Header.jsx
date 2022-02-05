import React from 'react';

const Header = () => {
  return (
    <div>
      <header>
      <section className="header__info">
        <div className="header__info__left">
          <div className="tel">
            <img src="./img/svg/header/tel.svg" alt="tel" />
            <p className="header__info_text">+375 29 100 20 30</p>
          </div>
          <div className="location">
            <img src="./img/svg/header/location.svg" alt="location" />
            <p className="header__info_text">Belarus, Gomel, Lange 17</p>
          </div>
          <div className="time">
            <img src="./img/svg/header/time.svg" alt="time" />
            <p className="header__info_text">All week 24/7</p>
          </div>
        </div>
    
        <div className="header__info__right">
          <ul className="social__list">
            <li className="socil__item _facebook">
              <a href="https://www.facebook.com/" />
            </li>
            <li className="socil__item _twitter">
              <a href="https://twitter.com/"></a>
            </li>
            <li className="socil__item _instagram">
              <a href="https://www.instagram.com/"></a>
            </li>
            <li className="socil__item _pinterest">
              <a href="https://www.pinterest.com/"></a>
            </li>
          </ul>
        </div>
      </section>
      <section className="header__nav">
        <div className="header__logo">
          <a className="header__logo_link" href="#">CleverShop</a>
          {/* <p className="header__logo_link">CleverShop</p>  */}
        </div>
        <div className="header__nav_list">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#">About Us</a>
            </li>
            <li className="nav__item">
              <a href="#">Women</a>
            </li>
            <li className="nav__item">
              <a href="#">Men</a>
            </li>
            <li className="nav__item">
              <a href="#">Beauty</a>
            </li>
            <li className="nav__item">
              <a href="#">Accessories</a>
            </li>
            <li className="nav__item">
              <a href="#">Blog</a>
            </li>
            <li className="nav__item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

          <div className="header__user_panel">
            <button className="user__btn _search"></button>
            <button className="user__btn _globe"></button>
            <button className="user__btn _user"></button>
            <button className="user__btn _shopping-bag"></button>

          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;