import React, { useState } from 'react';
import cn from 'classnames'

import './productFilterPanel.css'

import filter from './filter.svg'
import filterClose from './filterClose.svg'
import tile from './tile.svg'
import list from './list.svg'

const ProductFilterPanel = (p) => {

    const [isFilterOpen, toggle] = useState(false);

    function toggleFilter () {
        toggle(!isFilterOpen);
    }

    let arr2 =[]
    let arr = [...new Set(p.DataProducts.map(el => (el.sizes.map(el => (arr2.push(el))))))]

    let arr4 =[]
    let arr3 = [...new Set(p.DataProducts.map(el => (el.images.map(el => (arr4.push(el))))))]

    const brandArr = [...new Set(p.DataProducts.map(el=> el.brand))];
    const priceArr = ['500+', '200-500', '100-200', '50-100', '0-50']
    const colorArr =  [...new Set(arr4.map(el=> el.color))];

    return (
    <div className='product__filter_panel'>
        <div className='product__filter_wrapper'>
            <div className='product__filter_header'>
                <div className='product__filter'>
                <button className={ cn('product__filter_btn', { active: isFilterOpen }) } onClick={ toggleFilter }>
                <img src={ isFilterOpen ? filterClose : filter } alt='filter' />
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
            
            <div className={ cn('filter', { active: isFilterOpen }) }>
                <div className='filter_column'>
                    <div className='filter_column_title'>Color</div>
                    { colorArr.map(color => <div className='filter__item'><input type='checkbox' /><p className='filter__item_text'>{ color } </p></div> ) }
                </div>
                <div className='filter_column'>
                    <div className='filter_column_title'>Size</div>
                    { [...new Set(arr2)].map(size => <div className='filter__item'><input type='checkbox' /><p className='filter__item_text'>{ size } </p></div> ) } 
                </div>
                <div className='filter_column'>
                    <div className='filter_column_title'>Brand</div>
                    { brandArr.map(brand => <div className='filter__item'><input type='checkbox' /><p className='filter__item_text'>{ brand } </p></div> ) }
                </div>
                <div className='filter_column'>
                    <div className='filter_column_title'>Price</div>
                    { priceArr.map(price => <div className='filter__item'><input type='checkbox' /><p className='filter__item_text'>{ price } </p></div> ) }
                </div>
            </div>
        </div>
    </div>
    );
};

export default ProductFilterPanel;
