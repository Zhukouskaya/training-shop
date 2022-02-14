import React from 'react';
import FooterForm from './footerForm/FooterForm';
import Social from './../../header/header/headerSocial/Social'

import './footerHeader.css'

const FooterHeder = (p) => {
  return (
    <section className='footer__header'>
      <div className='footer__header_text'>BE IN TOUCH WITH US:</div>
      <FooterForm/>
      <Social social= { p.social }/>
    </section>
  );
};

export default FooterHeder;