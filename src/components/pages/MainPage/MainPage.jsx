import React from 'react';

import Banner from './banner/Banner.jsx';
import Advantage from './advantage/AdvantageSection/Advantage.jsx'
// import Product from '/product/Product';

const MainPage = () => {
  return (
    <section className='app-content'>
      <Banner />
      <Advantage />

      {/* <Product /> */}
    </section>
  );
};

export default MainPage;