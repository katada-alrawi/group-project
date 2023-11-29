import React from 'react';

function NewsItem({ item }) {
  console.log('Item in NewsItem:', item);

  const websiteUrl = item.url || '';
  const website = websiteUrl.split('https://').pop().split('/')[0];

  const date = item.publishedAt || '';
  const formatDate = date.replace('T', ' ');
  const formatTime = formatDate.replace('Z', ' ');

  return (
    <div>
      <a href={websiteUrl} className='article' target="_blank" rel="noopener noreferrer">
        <div className='article-image'>
          <img src={item.urlToImage || ''} alt='' />
        </div>
        <div className='article-content'>
          <div className='article-source'>
            <img src={item.sourceImageSrc || ''} alt='' />
            <span>{website}</span>
          </div>
          <div className='article-title'>
            <h2>{item.title || ''}</h2>
          </div>
          <p className='article-description'>
            {item.description || ''}
          </p>
          <div className='article-details'>
            <small><b>Published At:</b> {formatTime}</small>
          </div>
        </div>
      </a>
    </div>
  );
}

export default NewsItem;
