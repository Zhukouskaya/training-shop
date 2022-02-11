import React from 'react';

import './blogPosts.css'

import Post from './post/Post';

import post1 from './img/post1.jpg'
import post2 from './img/post2.jpg'
import post3 from './img/post3.jpg'

const BlogPosts = () => {
  return (
    <div className='blog__posts'>
      <Post img= {post1} title='The Easiest Way to Break' text='But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor' />
      <Post img= {post2} title='Wedding Season' text='But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor' />
      <Post img= {post3} title='Recent Favorites On Repeat' text='But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor' />
    </div>
  );
};

export default BlogPosts;