import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from './root-reducer';
import { store } from './store'

import App from './App';
import PRODUCTS from './products.js';

import location from './components/footer/footerMain/column/img/location-marker.svg';
import phone from './components/footer/footerMain/column/img/phone.svg';
import clock from './components/footer/footerMain/column/img/clock.svg';
import mail from './components/footer/footerMain/column/img/mail.svg';

import footer_img1 from './components/footer/footerInfo/img/Stripe.svg';
import footer_img2 from './components/footer/footerInfo/img/AES256.svg';
import footer_img3 from './components/footer/footerInfo/img/paypal.svg';
import footer_img4 from './components/footer/footerInfo/img/visa.svg';
import footer_img5 from './components/footer/footerInfo/img/mastercard.svg'; 
import footer_img6 from './components/footer/footerInfo/img/discover.svg'; 
import footer_img7 from './components/footer/footerInfo/img/american-express.svg'; 

import pay_img1 from './components/pages/clothes/productCardPage/img/pay/Stripe.svg';
import pay_img2 from './components/pages/clothes/productCardPage/img/pay/AES256.svg';
import pay_img3 from './components/pages/clothes/productCardPage/img/pay/paypal.svg';
import pay_img4 from './components/pages/clothes/productCardPage/img/pay/visa.svg';
import pay_img5 from './components/pages/clothes/productCardPage/img/pay/mastercard.svg'; 
import pay_img6 from './components/pages/clothes/productCardPage/img/pay/discover.svg'; 
import pay_img7 from './components/pages/clothes/productCardPage/img/pay/american-express.svg'; 

import facebook from './components/header/header/headerSocial/img/facebook.svg'
import twitter from './components/header/header/headerSocial/img/twitter.svg';
import instagram from './components/header/header/headerSocial/img/instagram.svg';
import pinterest from './components/header/header/headerSocial/img/pinterest.svg';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore (rootReducer, composeEnhancers(applyMiddleware()));

const images = [footer_img1, footer_img2, footer_img3, footer_img4, footer_img5, footer_img6, footer_img7];

const imagesPage = [pay_img1, pay_img2, pay_img3, pay_img4, pay_img5, pay_img6, pay_img7];

const link1 = [
  {
    name: 'Men',
    link: '/men',
    data: 'men',
  },

  {  name: 'Women',
    link: '/women',
    data: 'women',
  },

  {  name: 'Accessories',
    link: '/accessories',
    data: 'accessories',
  },

  {  name: 'Beauty',
    link: '/beauty',
    data: 'beauty',
  },
]

const link2 = [
  {
    name: 'About Us',
    link: '/aboutUs',
    data: 'about',
  },

  {  name: 'Contact Us',
    link: '/contact',
    data: 'contact',
  },

  {  name: 'Blog',
    link: '/blog',
    data: 'blog',
  },

  {  name: 'FAQs',
    link: '/faqs',
    data: 'faqs',
  },
]

const link3 = [ 'Terms & Conditions', 'Returns & Exchanges', 'Shipping & Delivery', 'Privacy Policy',];

const link4 = [ 
  { 
    text: 'Belarus, Gomel, Lange 17',
    img: location,
  },
{ 
  text: '+375 29 100 20 30',
  img: phone,
}, 
{ 
  text: 'All week 24/7',
  img: clock,
}, 
{ 
  text: 'info@clevertec.ru',
  img: mail,
},
];

const social = [
  { img:  facebook,
    link: 'https://www.facebook.com/',
  }, 
  { img:  twitter,
    link: 'https://www.twitter.com/',
  }, 
  { img:  instagram,
    link: 'https://www.instagram.com/',
  }, 
  { img:  pinterest,
    link: 'https://www.pinterest.com/',
  }]

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App 
      images= { images }
      link1= { link1 }
      link2= { link2 }
      link3= { link3 }
      link4= { link4 }
      social= { social }
      WomenDataProducts= { PRODUCTS.women }
      MenDataProducts= { PRODUCTS.men }
      imagesPage = { imagesPage }
    />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
