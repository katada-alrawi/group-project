import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsGrid from './NewsGrid';
import Menu from './Menu';

function News() {
  return (
    <div className='News'>
      <Menu />
      <Routes>
        <Route path="/" element={<NewsGrid items="" />} />
      </Routes>
    </div>
  );
}

export default News;
