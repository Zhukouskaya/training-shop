import React, { useState, useEffect } from 'react';

import './assortment.css'

import cn from 'classnames'

import SortEl from './sortEl/SortEl';

import sizeGuide from './img/guide.svg'

const Assortment = (p) => {
  const [size, setSize] = useState(p.sizes[0]);
  const [color, setColor] = useState(p.colorUnique[0][1]);

  function isSelectedColor (color) {
    setColor(color)
  }

  function isSelectedSize (sizes) {
    setSize(sizes)
  }

  function defaultSelect () {
    setColor(p.colorUnique[0][1])
    setSize((p.sizes[0]))
  }

  useEffect(() => {
    defaultSelect()
  }, [p.colorUnique[0]])

  return (
    <div className='assortment' id= { p.id }>
      <SortEl title='Color:' text= { color } />
      <div className='assortment__img_btn'>
        { p.colorUnique.map((img, i) => <button onClick={ ()=> isSelectedColor (p.colorUnique[i][1]) }><img className= { cn('assortment__img', { active: p.colorUnique[i][1] === color }) } src={ `https://training.cleverland.by/shop${ img[0] }` } alt='foto_color'/></button>) }
      </div>
      <SortEl title='Size:' text= { size }/>
      <div className='size__block'>
        { p.sizes.map(i => <button onClick={ ()=> isSelectedSize(i) } className={cn('size__btn', { active: i === size }) }>{ i }</button>) }
      </div>
      <button className='size__guide'> <img src= { sizeGuide } alt='size_guide'></img></button>
    </div>
  );
};

export default Assortment;