import React from 'react';
import InfoItem from './InfoItem';

import Truck from './../img/truck.svg'
import Refresh from './../img/refresh.svg'
import Mail from './../img/mail.svg'

const Info = () => {
  return (
    <div className='info'>
      <InfoItem img= { Truck } text='Shipping & Delivery'/>
      <InfoItem img= { Refresh } text='Returns & Exchanges'/>
      <InfoItem img= { Mail } text='Ask a question'/>
    </div>
  );
};

export default Info;