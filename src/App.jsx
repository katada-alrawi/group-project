import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './components/news/Menu';
import NewsGrid from './components/news/NewsGrid';
import News from './components/news/News';

import './App.css'; 

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [popularity, setPopularity] = useState('general');

  useEffect(() => {
    fetchNews();
  }, [popularity]);

  const fetchNews = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=apple&from=2023-11-26&to=2023-11-26&sortBy=${popularity}&apiKey=bf4caeba0e7248ab958f1059307036e7`
    )
      .then((response) => response.json())
      .then((data) => {
        setItems(data.articles);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className='min-h-screen font-poppNews bg-gradient-to-r from-[#ec0b0b86] to-[#0d205a] text-white'>
      <div className='App'>
        <h1 className='title'> DigitalDose </h1>
        <Navbar />
        <Footer />
        <Menu active={active} setActive={setActive} setPopularity={setPopularity} />
        <NewsGrid items={items} />
      </div>
    </div>
  );
}

export default App;
