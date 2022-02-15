import React from 'react';

import { HashRouter, Routes, Route } from 'react-router-dom';

import './assets/style/pages.css';

import MainPage from './components/pages/MainPage/MainPage';
import Header from './components/header/header/Header';
import WomenPage from './components/pages/WomenPage';
import MenPage from './components/pages/MenPage';
import Footer from './components/footer/Footer';
import ProductCardPage from './components/pages/clothes/productCardPage/ProductCardPage';

function App(p) {

  // const LinkMen =  p.MenDataProducts.map (link => <Route path= { `men/${ link.id }` } element= { <ProductCardPage  MenDataProducts= { p.MenDataProducts }/> } />) 
  // const LinkWomen =  p.WomenDataProducts.map (link => <Route path= { `women/${ link.id }` } element= { <ProductCardPage  WomenDataProducts= { p.WomenDataProducts }/> } />) 
          
  return (
    <HashRouter>
      <div className="App" data-test-id='app'>
        <Header social= { p.social }/>
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

          {/* { LinkMen }
          { LinkWomen } */}
          
          <Route path="women/1" element= { <ProductCardPage imagesPage = { p.imagesPage } WomenDataProducts= { p.WomenDataProducts }/> } />
          <Route path="women/2" element= { <ProductCardPage imagesPage = { p.imagesPage } WomenDataProducts= { p.WomenDataProducts }/> } />
          <Route path="women/3" element= { <ProductCardPage imagesPage = { p.imagesPage } WomenDataProducts= { p.WomenDataProducts }/> } />
          <Route path="women/4" element= { <ProductCardPage imagesPage = { p.imagesPage } WomenDataProducts= { p.WomenDataProducts }/> } />
          <Route path="women/5" element= { <ProductCardPage imagesPage = { p.imagesPage } WomenDataProducts= { p.WomenDataProducts }/> } />
          <Route path="women/6" element= { <ProductCardPage imagesPage = { p.imagesPage } WomenDataProducts= { p.WomenDataProducts }/> } />
          <Route path="women/7" element= { <ProductCardPage imagesPage = { p.imagesPage } WomenDataProducts= { p.WomenDataProducts }/> } />
          <Route path="women/8" element= { <ProductCardPage imagesPage = { p.imagesPage } WomenDataProducts= { p.WomenDataProducts }/> } /> 

          <Route path="men/1" element= { <ProductCardPage imagesPage = { p.imagesPage } MenDataProducts= { p.MenDataProducts }/> } />
          <Route path="men/2" element= { <ProductCardPage imagesPage = { p.imagesPage } MenDataProducts= { p.MenDataProducts }/> } />
          <Route path="men/3" element= { <ProductCardPage imagesPage = { p.imagesPage } MenDataProducts= { p.MenDataProducts }/> } />
          <Route path="men/4" element= { <ProductCardPage imagesPage = { p.imagesPage } MenDataProducts= { p.MenDataProducts }/> } />
          <Route path="men/5" element= { <ProductCardPage imagesPage = { p.imagesPage } MenDataProducts= { p.MenDataProducts }/> } />
          <Route path="men/6" element= { <ProductCardPage imagesPage = { p.imagesPage } MenDataProducts= { p.MenDataProducts }/> } />
          <Route path="men/7" element= { <ProductCardPage imagesPage = { p.imagesPage } MenDataProducts= { p.MenDataProducts }/> } />
          <Route path="men/8" element= { <ProductCardPage imagesPage = { p.imagesPage } MenDataProducts= { p.MenDataProducts }/> } /> 
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

