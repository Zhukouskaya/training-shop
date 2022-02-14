import React from 'react';
import './blogHeader.css'

const BlogHeader = (p) => {
  return (
    <div className='blog__header'>
      <div className='title'>{p.title}</div>
      <button className='blog__header_btn'>{p.text}</button>
    </div>
  );
};

export default BlogHeader;