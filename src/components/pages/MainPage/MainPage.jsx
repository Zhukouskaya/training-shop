
import React from 'react';

import Banner from './banner/Banner';
import Advantage from './advantage/AdvantageSection/Advantage';
import MainProduct from './mainProduct/MainProduct';
import News from '../news/News';

const MainPage = () => {
  return (
    <section className='app-content'>
      <Banner />
      <Advantage />
      <MainProduct />
      <News />
    </section>
  );
};

export default MainPage;