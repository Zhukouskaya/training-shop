import React from 'react';

import Banner from './banner/Banner';
import Advantage from './advantage/AdvantageSection/Advantage'
import MainProduct from './mainProduct/mainProduct'

const MainPage = () => {
  return (
    <section className='app-content'>
      <Banner />
      <Advantage />
      <MainProduct />
    </section>
  );
};

export default MainPage;