import React from 'react';

import './productFilterPanel.css'

import filter from './filter.svg'
import tile from './tile.svg'
import list from './list.svg'

const ProductFilterPanel = () => {
  return (
    <div className='product__filter_panel'>
    <div className='product__filter'>
      <button className='product__filter_btn'>
        <img src={ filter } alt='filter' />
        <p>Filter</p>
      </button>
    </div>
    <div className='product__view'>
    <button className='view__list'>
        <img src={ list } alt='list' />
      </button>
      <button className='view__tiles'>
        <img src={ tile } alt='tile' />
      </button>
    </div>

      
    </div>
  );
};

export default ProductFilterPanel;