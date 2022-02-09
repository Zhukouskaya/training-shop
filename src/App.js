import React from 'react';

import {HashRouter, Routes, Route } from 'react-router-dom';

import MainPage from './components/pages/MainPage/MainPage.jsx';
import Header from './components/header/Header.jsx';

// import WomenPage from './components/pages/WomenPage/WomenPage';
// import MenPage from './components/pages/MenPage/MenPage';
// import NotfoundPage from './components/pages/NotfoundPage';

import './assets/style/pages.css';

function App() {
  return (
    <HashRouter>
      <div className="App" data-test-id='app'>
        <Header />
        <Routes>
            <Route index element={<MainPage />} />
              <Route  path='/' element={<MainPage />} />
              {/* <Route path='women' element={<WomenPage />} />
                <Route path='men' element={<MenPage />} /> 
             <Route path='*' element={<NotfoundPage />} />  */}
        </Routes>   
      </div>
    </HashRouter>
  );
}

export default App;

