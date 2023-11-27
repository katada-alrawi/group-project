import React from 'react';

function NewsItem({ item }) {
  if (!item) {
    return null; // Add a check for item being undefined or null
  }

  const websiteUrl = item.url || ''; // Use the OR operator to provide a default empty string
  const website = websiteUrl.split('https://').pop().split('/')[0];

  const date = item.publishedAt || ''; // Use the OR operator to provide a default empty string
  const formatDate = date.replace('T', ' ');
  const formatTime = formatDate.replace('Z', ' ');

  return (
    <div>
      <a href={websiteUrl} className='article'>
        <div className='article-image'>
          <img src={item.urlToImage} alt={item.title || ''} /> {/* Assuming 'urlToImage' is the image URL */}
        </div>
      </a>
    </div>
  );
}

export default NewsItem;
