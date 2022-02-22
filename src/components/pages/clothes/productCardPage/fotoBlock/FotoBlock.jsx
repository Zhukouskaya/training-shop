import React from 'react';

import './fotoBlock.css'

import foto1 from './../img/clothes/Rectangle 1.jpg'
import foto2 from './../img/clothes/Rectangle 32.jpg'
import foto3 from './../img/clothes/Rectangle 33.jpg'
import foto4 from './../img/clothes/Rectangle 34.jpg'

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
        <img className='foto1' src= { foto1 } alt='foto_product' />
        <img className='foto2' src= { foto2 } alt='foto_product' />
        <img className='foto3' src= { foto3 } alt='foto_product' />
        <img className='foto4' src= { foto4 } alt='foto_product' />
      </div>

    </div>
  );
};

export default FotoBlock;