import React from 'react';
import NewsItem from './NewsItem';

function NewsGrid({ items }) {
  if (!Array.isArray(items)) {
    return <p>Loading news or no news available...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {items.map((item, i) => (
        <NewsItem key={i} item={item} />
      ))}
    </div>
  );
}

export default NewsGrid;
