// Tech.jsx
import React, { useState, useEffect } from 'react';
import NewsGrid from './NewsGrid';
import Menu from './Menu';


function Tech() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(2); // Assuming 'Technology' has ID 2
  const [popularity, setPopularity] = useState('technology');
  const key = "bf4caeba0e7248ab958f1059307036e7"
  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=technology&from=2023-11-26&to=2023-11-26&sortBy=${popularity}&apiKey=${key}`)
      .then(response => response.json())
      .then(data => {
        setItems(data.articles);
      })
      .catch(error => {
        console.error('Error fetching tech news:', error);
      });
  }, [popularity]);

  return (
    <div className='Tech'>
        
      <Menu active={active} setActive={setActive} setPopularity={setPopularity} />
      <NewsGrid items={items} />
    </div>
  );
}

export default Tech;


// NewsGrid and NewsItem components remain the same as in your original code.
//const key = "bf4caeba0e7248ab958f1059307036e7"