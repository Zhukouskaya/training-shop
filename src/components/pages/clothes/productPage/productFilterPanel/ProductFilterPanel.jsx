import React, { useState, useEffect } from 'react';
import cn from 'classnames'

import ProductCard from './../../../clothes/productCard/ProductCard';

import './productFilterPanel.css'

import filter from './filter.svg'
import filterClose from './filterClose.svg'
import tile from './tile.svg'
import list from './list.svg'

const ProductFilterPanel = (p) => {

    let arr2 =[]
    let arr = [...new Set(p.DataProducts.map(el => (el.sizes.map(el => (arr2.push(el))))))]

    let arr4 =[]
    let arr3 = [...new Set(p.DataProducts.map(el => (el.images.map(el => (arr4.push(el))))))]

    const brandArr = [...new Set(p.DataProducts.map(el=> el.brand))];
    const priceArr = [{min: 501, max: 1000,}, {min: 201, max: 500,}, {min: 101,max: 200,}, {min: 51,max: 100,}, {min: 0,max: 50,},];

    const colorArr =  [...new Set(arr4.map(el=> el.color))];
    const data = p.DataProducts;
		let category = data.map(el=> el.category)

		let [selectedСolor, setSelectedСolor] = useState([]);
		let [selectedSize, setSelectedSize] = useState([]);
		let [selectedBrand, setSelectedBrand] = useState([]);
		let [selectedPrice, setSelectedPrice] = useState([]);
    let [card, setCard] = useState(data);
    const [isFilterOpen, toggle] = useState(false);
    const [itemsFound, setItemsFound] = useState(false);

    function toggleFilter () {
        toggle(!isFilterOpen);
    }

    let arrColor = [];
		let arrSize = [];
		let arrBrand = [];

    data.forEach(item => {
		item.images.forEach(item => {
			if (!arrColor.includes(item.color)) {
				arrColor.push(item.color)
			}
		});
		if (!arrBrand.includes(item.brand)) {
			arrBrand.push(item.brand);
		};
		item.sizes.forEach(item => {
			if (!arrSize.includes(item)) {
				arrSize.push(item)
			}
		});
	});

	function selectedСolorArr(color) {
		if (selectedСolor.includes(color)) {
			selectedСolor = selectedСolor.filter(el => el !== color);
		} else {
			selectedСolor = [...selectedСolor, color];
		}
		setSelectedСolor(selectedСolor);
	};
	function selectedSizeArr(size) {
		if (selectedSize.includes(size)) {
			selectedSize = selectedSize.filter(el => el !== size);
		} else {
			selectedSize = [...selectedSize, size];
		}
		setSelectedSize(selectedSize);
	};
	function selectedBrandArr(brand) {
		if (selectedBrand.includes(brand)) {
			selectedBrand = selectedBrand.filter(el => el !== brand);
		} else {
			selectedBrand = [...selectedBrand, brand];
		}
		setSelectedBrand(selectedBrand);
	};
	function selectedPriceArr(price) {
		if (selectedPrice.includes(price)){
			selectedPrice = selectedPrice.filter(el => el !== price);
		} else {
			selectedPrice = [...selectedPrice, price];
		}
		setSelectedPrice(selectedPrice);
	};

	useEffect(() => {
		setItemsFound(false);
		setSelectedСolor([]);
		setSelectedBrand([]);
		setSelectedPrice([]);
		setSelectedSize([]);
	}, [data])

	useEffect(() => {
		setCard(() => {
			return data.filter((cloth) => {
				let isSelected =
					(cloth.images.some((images) => {
						return selectedСolor.length === 0 || selectedСolor.includes(images.color);
					})) && (cloth.sizes.some((size) => {
						return selectedSize.length === 0 || selectedSize.includes(size);
					})) && (selectedBrand.length === 0 || selectedBrand.includes(cloth.brand)) && (selectedPrice.some((price) => {
						let isSelectedMax = (price.max && cloth.price <= price.max) || !price.max;
						let isSelectedMin = (price.min && cloth.price >= price.min) || !price.min;
						return isSelectedMax && isSelectedMin;
					}) || selectedPrice.length === 0)
				return isSelected;
			});
		});
		
		if (selectedСolor.length || selectedSize.length || selectedBrand.length || selectedPrice.length) {
			setItemsFound(true);
		} else {
			setItemsFound(false);
		};
	}, [selectedСolor, selectedSize, selectedBrand, selectedPrice, data]);


    return ( 
    <>
        <div className='product__filter_panel'>
            <div className='product__filter_wrapper'>
                <div className='product__filter_header'>
                    <div className='product__filter'>
                    <button data-test-id='filter-button' className={ cn('product__filter_btn', { active: isFilterOpen }) } onClick={ toggleFilter }>
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
                
                <div className={ cn('filter', { active: isFilterOpen }) } data-test-id={`filters-${category[0]}`}>
                    <div className='filter_column'>
                        <div className='filter_column_title'>Color</div>
													<div data-test-id='filters-color'>
															{ colorArr.map(color => <div key= { color } className='filter__item'><input  data-test-id={`filter-color-${color}`} type='checkbox' checked={selectedСolor.includes(color)} onChange={() =>  selectedСolorArr(color)} value={ color }/><label className='filter__item_text'>{ color } </label></div> ) }
													</div>
                    </div>
                    <div className='filter_column'>
                        <div className='filter_column_title'>Size</div>
													<div data-test-id='filters-size'>
														{ [...new Set(arr2)].map(size => <div key= { size }  className='filter__item'><input data-test-id={`filter-size-${size}`} type='checkbox' checked={selectedSize.includes(size)} onChange={() =>  selectedSizeArr(size)} value={ size }/><label className='filter__item_text'>{ size } </label></div> ) } 
													</div>
                    </div>
                    <div className='filter_column'>
                        <div className='filter_column_title'>Brand</div>
													<div data-test-id='filters-brand'>
														{ brandArr.map(brand => <div key= { brand }  className='filter__item'><input data-test-id={ `filter-brand-${brand}`} type='checkbox' checked={selectedBrand.includes(brand)} onChange={() =>  selectedBrandArr(brand)} value={ brand }/><label className='filter__item_text'>{ brand } </label></div> ) }
													</div>
                    </div>
                    <div className='filter_column'>
                        <div className='filter_column_title'>Price</div>
													<div data-test-id='filters-price'>
														{ priceArr.map(price => <div key= { `$ ${price.min}-${price.max}` } className='filter__item'><input type='checkbox' checked={selectedPrice.includes(price)} onChange={() =>  selectedPriceArr(price)} value={ `$ ${price.min}-${price.max}` }/><label className='filter__item_text'>{ `$ ${price.min}-${price.max}` } </label></div> ) }
													</div>
                        </div>
                </div>
            </div></div>
						<div className={cn('filter-found', { active: itemsFound })}>
								<div className='filter-found__number'>
									{card.length} items Found
								</div>
								{selectedСolor.map(el => <div className='filter__item_f'>
									Color: {el}
								</div>)}
								{selectedSize.map(el => <div className='filter__item_f'>
									Size: {el}
								</div>)}
								{selectedBrand.map(el => <div className='filter__item_f'>
									Brand: {el}
								</div>)}
								{selectedPrice.map(el => <div className='filter__item_f'>
									Price: ${el.min} - ${el.max}
								</div>)}
        </div>			
            <section className='product'>
                { card.map (Card => <ProductCard id={ Card.id } name={ Card.name } price={ Card.price } star={ Card.star } images={ Card.images[0].url } category={ Card.category } rating={ Card.rating } discount= { Card.discount}/>) }
            </section>
			
    </>
    );
};

export default ProductFilterPanel;
