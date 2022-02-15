import React from 'react';

import './assortment.css'

import blue from './../img/clothes/blue.jpg'
import white from './../img/clothes/white.jpg'
import black from './../img/clothes/black.jpg'
import grey from './../img/clothes/grey.jpg'
import SortEl from './sortEl/SortEl';

import sizeGuide from './img/guide.svg'

const Assortment = () => {

  const color = [ blue, white, black, grey, ]
  const size = [ 'XS', 'S', 'M', 'L', ]

  return (
    <div className='assortment'>
      <SortEl title='Color:' text='Blue'/>
      <div className='assortment__img_btn'>
        { color.map(img => <button><img src= { img } alt='color'></img></button>) }
      </div>
      <SortEl title='Size:' text='S'/>
      <div className='size__block'>
        { size.map(i => <button className='size__btn'>{ i }</button>) }
      </div>
      <button className='size__guide'> <img src= { sizeGuide } alt='size_guide'></img></button>
    </div>
  );
};

export default Assortment;