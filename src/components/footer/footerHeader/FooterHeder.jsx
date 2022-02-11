import React from 'react';
import FooterForm from './footerForm/FooterForm';

import './footerHeader.css'

const FooterHeder = () => {
  return (
    <section className='footer__header'>
      <div className='footer__header_text'>BE IN TOUCH WITH US:</div>
      <FooterForm/>
      <div className='footer__social'></div>
    
      
    </section>
  );
};

export default FooterHeder;