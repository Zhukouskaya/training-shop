import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import location from './components/footer/footerMain/column/img/location-marker.svg';
import phone from './components/footer/footerMain/column/img/phone.svg';
import clock from './components/footer/footerMain/column/img/clock.svg';
import mail from './components/footer/footerMain/column/img/mail.svg';

import img1 from './components/pages/clothes/img/women/1.jpg'
import img2 from './components/pages/clothes/img/women/2.jpg'
import img3 from './components/pages/clothes/img/women/3.jpg'
import img4 from './components/pages/clothes/img/women/4.jpg'
import img5 from './components/pages/clothes/img/women/5.jpg'
import img6 from './components/pages/clothes/img/women/6.jpg'
import img7 from './components/pages/clothes/img/women/7.jpg'
import img8 from './components/pages/clothes/img/women/8.jpg'

import img1M from './components/pages/clothes/img/men/1m.jpg'
import img2M from './components/pages/clothes/img/men/2m.jpg'
import img3M from './components/pages/clothes/img/men/3m.jpg'
import img4M from './components/pages/clothes/img/men/4m.jpg'
import img5M from './components/pages/clothes/img/men/5m.jpg'
import img6M from './components/pages/clothes/img/men/6m.jpg'
import img7M from './components/pages/clothes/img/men/7m.jpg'
import img8M from './components/pages/clothes/img/men/8m.jpg'

import footer_img1 from './components/footer/footerInfo/img/Stripe.svg';
import footer_img2 from './components/footer/footerInfo/img/AES256.svg';
import footer_img3 from './components/footer/footerInfo/img/paypal.svg';
import footer_img4 from './components/footer/footerInfo/img/visa.svg';
import footer_img5 from './components/footer/footerInfo/img/mastercard.svg'; 
import footer_img6 from './components/footer/footerInfo/img/discover.svg'; 
import footer_img7 from './components/footer/footerInfo/img/american-express.svg'; 

import facebook from './components/header/header/headerSocial/img/facebook.svg'
import twitter from './components/header/header/headerSocial/img/twitter.svg';
import instagram from './components/header/header/headerSocial/img/instagram.svg';
import pinterest from './components/header/header/headerSocial/img/pinterest.svg';

const WomenDataProducts = [
  {
    id: 1,
    name: 'Women/s tracksuit Q109',
    price: '$ 30.00',
    star: 4,
    image: img1,
    sex: 'women',
  },

  {
    id: 2,
    name: 'Women/s tracksuit Q109',
    price: '$ 30.00',
    star: 4,
    image: img2,
    sex: 'women',
  },

  {
    id: 3,
    name: 'Women/s tracksuit Q109',
    price: '$ 30.00',
    star: 4,
    image: img3,
    sex: 'women',
  },

  {
    id: 4,
    name: 'Women/s tracksuit Q109',
    price: '$ 30.00',
    star: 4,
    image: img4,
    sex: 'women',
  },

  {
    id: 5,
    name: 'Women/s tracksuit Q109',
    price: '$ 30.00',
    star: 4,
    image: img5,
    sex: 'women',
  },

  {
    id: 6,
    name: 'Women/s tracksuit Q109',
    price: '$ 30.00',
    star: 4,
    image: img6,
    sex: 'women',
  },

  {
    id: 7,
    name: 'Women/s tracksuit Q109',
    price: '$ 30.00',
    star: 4,
    image: img7,
    sex: 'women',
  },

  {
    id: 8,
    name: 'Women/s tracksuit Q109',
    price: '$ 30.00',
    star: 4,
    image: img8,
    sex: 'women',
  },
];

const MenDataProducts = [
  {
    id: 1,
    name: 'Women/s tracksuit Q109',
    price: '$ 30.00',
    star: 4,
    image: img1M,
    sex: 'men',
  },

  {
    id: 2,
    name: 'Women/s tracksuit Q109',
    price: '$ 30.00',
    star: 4,
    image: img2M,
    sex: 'men',
  },

  {
    id: 3,
    name: 'Women/s tracksuit Q109',
    price: '$ 30.00',
    star: 4,
    image: img3M,
    sex: 'men',
  },

  {
    id: 4,
    name: 'Women/s tracksuit Q109',
    price: '$ 30.00',
    star: 4,
    image: img4M,
    sex: 'men',
  },

  {
    id: 5,
    name: 'Women/s tracksuit Q109',
    price: '$ 30.00',
    star: 4,
    image: img5M,
    sex: 'men',
  },

  {
    id: 6,
    name: 'Women/s tracksuit Q109',
    price: '$ 30.00',
    star: 4,
    image: img6M,
    sex: 'men',
  },

  {
    id: 7,
    name: 'Women/s tracksuit Q109',
    price: '$ 30.00',
    star: 4,
    image: img7M,
    sex: 'men',
  },

  {
    id: 8,
    name: 'Women/s tracksuit Q109',
    price: '$ 30.00',
    star: 4,
    image: img8M,
    sex: 'men',
  },
];

const images = [footer_img1, footer_img2, footer_img3, footer_img4, footer_img5, footer_img6, footer_img7];

const link1 = [
  {
    name: 'Men',
    link: '/men',
  },

  {  name: 'Women',
    link: '/women'
  },

  {  name: 'Accessories',
    link: '/accessories',
  },

  {  name: 'Beauty',
    link: '/beauty',
  },
]

const link2 = [
  {
    name: 'About Us',
    link: '/aboutUs',
  },

  {  name: 'Contact Us',
    link: '/contact'
  },

  {  name: 'Blog',
    link: '/blog',
  },

  {  name: 'FAQs',
    link: '/Faqs',
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

const social = [facebook, twitter, instagram, pinterest]

ReactDOM.render(
  <React.StrictMode>
    <App 
      images= { images }
      link1= { link1 }
      link2= { link2 }
      link3= { link3 }
      link4= { link4 }
      social= { social }
      WomenDataProducts= { WomenDataProducts }
      MenDataProducts= { MenDataProducts }
    />
  </React.StrictMode>,
  document.getElementById('root')
);
