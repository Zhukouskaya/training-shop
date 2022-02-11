import React from 'react';

import './footerForm.css'

const FooterForm = () => {
  return (
    <div className='footer__form'>
      <form>
        <input class="footer__input" type="email" id="email" required placeholder="Enter your email" /> 
        <button class="footer__btn" type="submit">Join Us</button>
      </form>
    </div>
  );
};

export default FooterForm;