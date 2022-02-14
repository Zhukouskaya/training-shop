import React from 'react';
import FooterHeder from './footerHeader/FooterHeder';
import FooterInfo from './footerInfo/FooterInfo';
import FooterMain from './footerMain/FooterMain';

const Footer = (p) => {

  return (
    <footer data-test-id='footer'>
      <FooterHeder 
        social= { p.social }
      />
      <FooterMain 
        link1= { p.link1 }
        link2= { p.link2 }
        link3= { p.link3 }
        link4= { p.link4 }
      />
      <FooterInfo 
        images= { p.images } 
      />
    </footer>
  );
};

export default Footer;