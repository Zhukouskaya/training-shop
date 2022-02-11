import React from 'react';

import './post.css'

const Post = (p) => {
  return (
    <div className='post'>
      <imag className='post_img' src= {p.image} alt='image post' />
      <div className='post_info'>
        <div className='post_title'>{p.title}</div>
        <div className='post_text'>{p.text}</div>
      </div>
    </div>
  );
};

export default Post;