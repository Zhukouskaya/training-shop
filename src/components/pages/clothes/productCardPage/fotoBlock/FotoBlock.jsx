import React from 'react';

import './fotoBlock.css'

import FotoSwiper from './fotoSwiper/FotoSwiper';

const FotoBlock = (p) => {
  return (
      <FotoSwiper images={ p.images } />
  );
};

export default FotoBlock;