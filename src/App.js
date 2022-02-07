import React from 'react';

import Header from './components/header/Header.jsx';
import Banner from './components/banner/Banner.jsx';
import Product from './components/product/Product.jsx';

import './assets/style/pages.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Banner />
    <Product />

    </div>
  );
}

export default App;
