import React from 'react';

import './advantageBlock.css';

const AdvantageBlock = (p) => {
  return (

      <div className='advantage__block'>
        <img src={p.advantageImg} alt='img'/>
        <div className='advantage__info'>
          <p className='advantage__title'>{p.title}</p>
          <p className='advantage__subtitle'>{p.subtitle}</p>
        </div>
      </div>
  );
};

export default AdvantageBlock;