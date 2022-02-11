import React from 'react';
import './blogHeader.css'

const BlogHeader = (p) => {
  return (
    <div className='blogHeader'>
      <div className='title'>{p.title}</div>
      <button className='blogHeader__btn'>{p.text}</button>
    </div>
  );
};

export default BlogHeader;