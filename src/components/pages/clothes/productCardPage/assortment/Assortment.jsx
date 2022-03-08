import React from 'react';

import './assortment.css'

import SortEl from './sortEl/SortEl';

import sizeGuide from './img/guide.svg'

const Assortment = (p) => {
  return (
    <div className='assortment'>
      <SortEl title='Color:' text='Blue' />
      <div className='assortment__img_btn'>
        { p.colorUnique.map(img => <button><img className='assortment__img' src={ `https://training.cleverland.by/shop${ img.url }`} alt='foto_color'/></button>) }
      </div>
      <SortEl title='Size:' text='S'/>
      <div className='size__block'>
        { p.sizes.map(i => <button className='size__btn'>{ i }</button>) }
      </div>
      <button className='size__guide'> <img src= { sizeGuide } alt='size_guide'></img></button>
    </div>
  );
};

export default Assortment;