import React from 'react';

import ProductCard from './productCard/ProductCard';

import './product.css'

import img1 from './img/men/1.jpg'
import img2 from './img/men/2.jpg'
import img3 from './img/men/3.jpg'
import img4 from './img/men/4.jpg'
import img5 from './img/men/5.jpg'
import img6 from './img/men/6.jpg'
import img7 from './img/men/7.jpg'
import img8 from './img/men/8.jpg'

const ProductMen = () => {

  const MenDataProducts = [
    {
      id: 1,
      name: 'Women/s tracksuit Q109',
      price: '$ 30.00',
      star: 4,
      image: img1,
    },
  
    {
      id: 2,
      name: 'Women/s tracksuit Q109',
      price: '$ 30.00',
      star: 4,
      image: img2,
    },
  
    {
      id: 3,
      name: 'Women/s tracksuit Q109',
      price: '$ 30.00',
      star: 4,
      image: img3,
    },
  
    {
      id: 4,
      name: 'Women/s tracksuit Q109',
      price: '$ 30.00',
      star: 4,
      image: img4,
    },
  
    {
      id: 5,
      name: 'Women/s tracksuit Q109',
      price: '$ 30.00',
      star: 4,
      image: img5,
    },
  
    {
      id: 6,
      name: 'Women/s tracksuit Q109',
      price: '$ 30.00',
      star: 4,
      image: img6,
    },
  
    {
      id: 7,
      name: 'Women/s tracksuit Q109',
      price: '$ 30.00',
      star: 4,
      image: img7,
    },
  
    {
      id: 8,
      name: 'Women/s tracksuit Q109',
      price: '$ 30.00',
      star: 4,
      image: img8,
    },
  ];
  
  const ProductCards = MenDataProducts.map (Card => <ProductCard id={Card.id} name={Card.name} price={Card.price} star={Card.star} image={Card.image}/>)
  
  return (
    <section className='product'>
      { ProductCards }
    </section>
  );
};

export default ProductMen;