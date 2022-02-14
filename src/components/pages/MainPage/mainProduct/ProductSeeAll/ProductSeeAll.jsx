import React from 'react';

import { Link } from 'react-router-dom';

import './productSeeAll.css'

const ProductSeeAll = (p) => {
  return (
    <button className='see__all'>
      <Link className='see__all' to= { `${ p.link }` } > See All</Link>
    </button>
  );
};

export default ProductSeeAll;