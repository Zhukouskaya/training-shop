import React from 'react';

import AdvantageBlock from './../AdvantageBlock/AdvantageBlock';

import './advantage.css';

import Support from './../AdvantageSection/img/support.svg';
import Return from './../AdvantageSection/img/return.svg';
import Shipping from './../AdvantageSection/img/shipping.svg';

const Advantage = () => {
  return (
    <section className='advantage'>
      <AdvantageBlock advantageImg = {Shipping} title = 'FREE SHIPPING' subtitle = 'On all UA order or order above $100'/>
      <AdvantageBlock advantageImg = {Return} title = '30 DAYS RETURN' subtitle = 'Simply return it within 30 days for an exchange'/>
      <AdvantageBlock advantageImg = {Support} title = 'SUPPORT 24/7' subtitle = 'Contact us 24 hours a day, 7 days a week'/>
    </section>
  );
};

export default Advantage;