import React from 'react';

import './blogPosts.css'

import Post from './post/Post';

import Post1 from './img/1.jpg'
import Post2 from './img/2.jpg'
import Post3 from './img/3.jpg'

const BlogPosts = () => {
  return (
    <div className='blogPosts'>
      <Post image= {Post1} title='The Easiest Way to Break' text='But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor' />
      <Post image= {Post2} title='Wedding Season' text='But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor' />
      <Post image= {Post3} title='Recent Favorites On Repeat' text='But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor' />
    </div>
  );
};

export default BlogPosts;