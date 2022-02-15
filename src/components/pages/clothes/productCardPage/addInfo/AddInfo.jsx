import React from 'react';

import './addInfo.css'

import AddInform from './AddInform';

const AddInfo = () => {
  return (
    <div className='add__info'>
      <div className='add__info_title'>Additional information</div>
      <div className='add__inform_block'>
      <AddInform title= 'Color:' info='Blue, White, Black, Grey'/>
      <AddInform title= 'Size:' info='XS, S, M, L'/>
      <AddInform title= 'Material:' info='100% Polyester'/>
      </div>
    </div>
  );
};

export default AddInfo;