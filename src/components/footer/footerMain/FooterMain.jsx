import React from 'react';
import Column from './column/Column';


import { Link } from 'react-router-dom';

import './footerMain.css'

const FooterMain = (p) => {

  return (
    <section className='footer__main'>
      <Column title='Categories' 
      link={ 
        p.link1.map((links, i) => <li key= { i }className='footer__item'><Link className='footer__item_link' data-test-id= { `footer-nav-link-${ links.data }` } to= { links.link }>{ links.name }</Link></li>)
        }/>
      <Column title='Infomation' 
      link={ 
        p.link2.map((links, i) => <li key= { i }className='footer__item'><Link className='footer__item_link' data-test-id= { `footer-nav-link-${ links.data }` } to= { links.link }>{ links.name }</Link></li>)
        }/>
      <Column title='Useful links' 
      link={ p.link3.map((links, i) => <li key= { i }className='footer__item'>{ links }</li>) }/>
      <Column title='Contact Us' 
      link={ 
        p.link4.map((el, i) => <li key= { i }><img className='footer__item_img' src=  {el.img } alt='footer__img' /><p className='footer__item'>{ el.text }</p></li>)
      }/>
    </section>
  );
};

export default FooterMain;