import React from 'react';
import Column from './column/Column';


import { Link } from 'react-router-dom';

import './footerMain.css'

const FooterMain = (p) => {

  return (
    <section className='footer__main'>
      <Column title='Categories' 
      link={ 
        p.link1.map(links => <li className='footer__item'><Link className='footer__item_link'to= { links.link }>{ links.name }</Link></li>)
        }/>
      <Column title='Infomation' 
      link={ 
        p.link2.map(links => <li className='footer__item'><Link className='footer__item_link'to= { links.link }>{ links.name }</Link></li>)
        }/>
      <Column title='Useful links' 
      link={ 
        p.link3.map((links) => <li className='footer__item'>{ links }</li>)
      }/>
      <Column title='Contact Us' 
      link={ 
        p.link4.map((el) => <li><img className='footer__item_img' src=  {el.img } alt='footer__img' /><p className='footer__item'>{ el.text }</p></li>)
      }/>
    </section>
  );
};

export default FooterMain;