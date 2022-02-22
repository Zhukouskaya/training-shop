import React from 'react';

import './fotoBlock.css'

import up from './../img/up.svg'
import down from './../img/down.svg'
import FotoSwiper from './fotoSwiper/FotoSwiper';

const FotoBlock = (p) => {
  return (
    <div className='foto__block'>
        <FotoSwiper images={ p.images }/>
      <div className='fotos'>
        <div className='foto__arrow'>
          <button>
            <img src= { up } alt='up'/>
          </button>
          <button>
          <img src= { down } alt='down'/>
          </button>
        </div>
        <img className='front' src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' />
        <img className='front' src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' />
        <img className='front' src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' />
        <img className='front' src= { `https://training.cleverland.by/shop${ p.images[0].url }` } alt='foto_product' />
      </div>

    </div>
  );
};

export default FotoBlock;