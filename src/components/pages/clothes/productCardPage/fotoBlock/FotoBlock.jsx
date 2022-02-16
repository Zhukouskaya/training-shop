import React from 'react';

import './fotoBlock.css'

import front from './../img/clothes/front.jpg'
import foto1 from './../img/clothes/Rectangle 1.jpg'
import foto2 from './../img/clothes/Rectangle 32.jpg'
import foto3 from './../img/clothes/Rectangle 33.jpg'
import foto4 from './../img/clothes/Rectangle 34.jpg'

import up from './../img/up.svg'
import down from './../img/down.svg'
import BtnLeft from './../img/left.svg'
import BtnRight from './../img/right.svg'

const FotoBlock = () => {
  return (
    <div className='foto__block'>
      <div className='front__block'>
        <img className='front' src= { front } alt='foto_product' /> 
        <button className='foto__btn_left'>
          <img className='foto__btn_left' src={ BtnLeft } alt="BtnLeft" />
        </button>
        <button className='foto__btn_right'>
          <img className='foto__btn_right' src={ BtnRight } alt="BtnRight" />
        </button>
      </div>
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