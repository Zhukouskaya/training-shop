import React from 'react';

import {HashRouter, Routes, Route } from 'react-router-dom';

import './assets/style/pages.css';

import MainPage from './components/pages/MainPage/MainPage';
import Header from './components/header/header/Header';
import WomenPage from './components/pages/WomenPage';
import MenPage from './components/pages/MenPage';
import Footer from './components/footer/Footer';

function App(p) {
  return (
    <HashRouter>
      <div className="App" data-test-id='app'>
        <Header social= { p.social}/>
        <Routes>
          <Route index element={<MainPage 
            WomenDataProducts= { p.WomenDataProducts }
            MenDataProducts= { p.MenDataProducts }
            />} />
          <Route path='/' element={<MainPage 
            WomenDataProducts= { p.WomenDataProducts }
            MenDataProducts= { p.MenDataProducts }
            />} />
          <Route path='women' element={<WomenPage 
            WomenDataProducts= { p.WomenDataProducts }
            />} />
          <Route path='men' element={<MenPage 
            MenDataProducts= { p.MenDataProducts } 
          />} /> 
        </Routes>  
        <Footer 
          images={ p.images }
          link1= { p.link1 }
          link2= { p.link2 }
          link3= { p.link3 }
          link4= { p.link4 }
          social= { p.social }
        />
      </div>
    </HashRouter>
  );
}

export default App;

