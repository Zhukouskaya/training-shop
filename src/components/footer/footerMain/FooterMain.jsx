import React from 'react';
import Column from './column/Column';


import { Link } from 'react-router-dom';

import './footerMain.css'

import location from './column/img/location-marker.svg';
import phone from './column/img/phone.svg';
import clock from './column/img/clock.svg';
import mail from './column/img/mail.svg';



const FooterMain = () => {

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
      link: '/contactUs'
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


  const isLinkcolumn1 = link1.map(links => <li className='footer__item'><Link className='footer__item_link'to= { links.link }>{ links.name }</Link></li>)
  const isLinkcolumn2 = link2.map(links => <li className='footer__item'><Link className='footer__item_link'to= { links.link }>{ links.name }</Link></li>)
  const isLinkcolumn3 = link3.map((links, i) => <li className='footer__item'>{ links }</li>)
  const isLinkcolumn4 = link4.map((el) => <li><img className='footer__item_img' src=  {el.img } alt='footer__img' /><p className='footer__item'>{ el.text }</p></li>)
  return (
    <section className='footer__main'>
      <Column title='Categories' link={ isLinkcolumn1 }/>
      <Column title='Infomation' link={ isLinkcolumn2 }/>
      <Column title='Useful links' link={ isLinkcolumn3 }/>
      <Column title='Contact Us' link={ isLinkcolumn4 }/>
    </section>
  );
};

export default FooterMain;