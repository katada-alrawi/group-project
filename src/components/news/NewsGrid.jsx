import React from 'react';
import NewsItem from './NewsItem'; 

function NewGrid({ items }) { // Destructure the props to get 'items'
  return (
    <div className='news-grid'>
      {items.map((item, i) => (
        <NewsItem key={i} item={item} /> 
      ))}
    </div>
  );
}

export default NewGrid;
