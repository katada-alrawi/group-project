import React from 'react';

function NewsItem({ item }) {
  if (!item) {
    return null;
  }

  const defaultImage = 'path_to_default_image.jpg'; // URL or local path to a default placeholder image

  return (
    <a href={item.url} className="block overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" target="_blank" rel="noopener noreferrer">
      <div className='h-48 w-full overflow-hidden'>
        <img src={item.urlToImage || defaultImage} alt={item.title || 'News Image'} className="object-cover w-full h-full" />
      </div>
      <div className='p-4'>
        <div className='flex items-center mb-2'>
          <img src={item.source?.id || defaultImage} alt={item.source?.name} className="h-6 w-6 rounded-full mr-2" />
          <span className="text-sm font-semibold">{item.source?.name}</span>
        </div>
        <h2 className="text-lg font-bold mb-2">{item.title}</h2>
        <p className='text-gray-700 text-sm mb-4'>
          {item.description}
        </p>
        <div className='text-right'>
          <small className="text-gray-600 text-xs">Published: {new Date(item.publishedAt).toLocaleString()}</small>
        </div>
      </div>
    </a>
  );
}

export default NewsItem;
