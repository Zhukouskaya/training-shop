import React from 'react';

import {HashRouter, Routes, Route } from 'react-router-dom';

import MainPage from './components/pages/MainPage/MainPage';
import Header from './components/header/header/Header';
import WomenPage from './components/pages/WomenPage';
import MenPage from './components/pages/MenPage';
import Footer from './components/footer/Footer';

import './assets/style/pages.css';

function App() {
  return (
    <HashRouter>
      <div className="App" data-test-id='app'>
        <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route  path='/' element={<MainPage />} />
          <Route path='women' element={<WomenPage />} />
          <Route path='men' element={<MenPage />} /> 
        </Routes>  
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

