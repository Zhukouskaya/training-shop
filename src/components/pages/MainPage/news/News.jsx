import React from 'react';

import './news.css'

const News = () => {
  return (
    <section className='news'>
      <div className='news__left'>
        <div className='news_text'>
        <div className='news_subtitle'>New Season</div>
        <div className='news_title'>lookbook collection</div>
        </div>
      </div>

      <div className='news__right'>
        <div className='news_text'>
        <div className='news_subtitle'>Sale</div>
        <div className='news_title'>Get UP to<span> 50% off</span></div>
        </div>
      </div>
    </section>
  );
};

export default News;