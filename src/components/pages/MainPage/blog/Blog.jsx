import React from 'react';

import BlogHeader from './blogHeader/BlogHeader'
import BlogPosts from './blogPosts/BlogPosts';

import './blog.css'


const Blog = () => {
  return (
    <section className='blog'>
    <BlogHeader title='Latest from blog' text='See all'/>
    <BlogPosts />
    </section>
  );
};

export default Blog;