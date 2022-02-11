import React from 'react';
import FooterHeder from './footerHeader/FooterHeder';
import FooterInfo from './footerInfo/FooterInfo';
import FooterMain from './footerMain/FooterMain';

import './footer.css'



const Footer = () => {
  return (
    <footer data-test-id='footer'>
      <FooterHeder />
      <FooterMain />
      <FooterInfo />
    </footer>
  );
};

export default Footer;