import React from 'react';

import './column.css';

const Column = (p) => {

  return (
    <div className='footer__column'>
      <div className='column__title'> 
      {p.title }
      </div>
      <div className='footer__nav'>
        <ul className='footer__list'>
        { p.link }
        </ul>
      </div>
    </div>
  );
};

export default Column;