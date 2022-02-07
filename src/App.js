import React from 'react';

import Header from './components/header/Header.jsx';
import Banner from './components/banner/Banner.jsx';
import Advantage from './components/advantage/Advantage.jsx';
import Product from './components/product/Product.jsx';

import './assets/style/pages.css';

function App() {
  return (
    <div className="App" data-test-id='app'>
    <Header />
    <Banner />
    <Advantage />
    
    <Product />

    </div>
  );
}

export default App;
