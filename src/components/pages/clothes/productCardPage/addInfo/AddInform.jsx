import React from 'react';

import './addInfo.css'

const AddInform = (p) => {
  return (
    <div className='add__inform'>
      <p className='add__inform_title'> { p.title }</p>
      <p className='add__inform_info'> { p.info }</p>
    </div>
  );
};

export default AddInform;