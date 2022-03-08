import React from 'react';

import Banner from './banner/Banner';
import Advantage from './advantage/AdvantageSection/Advantage';
import MainProduct from './mainProduct/mainProduct';
import News from './news/News';
import Subscribe from './subscribe/Subscribe';
import Blog from './blog/Blog';

const MainPage = (p) => {
  return (
    <section className='app-content'>
      <Banner />
      <Advantage />
      <MainProduct WomenDataProducts= { p.WomenDataProducts } MenDataProducts= { p.MenDataProducts } />
      <News />
      <Subscribe />
      <Blog />
    </section>
  );
};

export default MainPage;