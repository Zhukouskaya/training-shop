import React from 'react';

import './sortEl.css'

const SortEl = (p) => {
  return (
    <div className='sort__el'>
      <p className='sort__el_title'>{ p.title }</p>
      <p className='sort__el_text'>{ p.text }</p>
    </div>
  );
};

export default SortEl;