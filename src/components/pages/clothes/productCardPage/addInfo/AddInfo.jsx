import React from 'react';

import './addInfo.css'

import AddInform from './AddInform';

const AddInfo = (p) => {
  
  return (
    <div className='add__info'>
      <div className='add__info_title'>Additional information</div>
      <div className='add__inform_block'>
      <AddInform title= 'Color:' info= { p.colorUnique.map (col => `${col}, `) }/> 
      <AddInform title= 'Size:' info= { p.sizes.map (size => `${size}, `) }/>
      <AddInform title= 'Material:' info={ p.material }/>
      </div>
    </div>
  );
};

export default AddInfo;