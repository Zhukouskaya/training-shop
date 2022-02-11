import React from 'react';
import FooterHeder from './footerHeader/FooterHeder';
import FooterInfo from './footerInfo/FooterInfo';

import './footer.css'


const Footer = () => {
  return (
    <footer>
      <FooterHeder />

      <FooterInfo/>
      
    </footer>
  );
};

export default Footer;