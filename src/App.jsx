import React, { useEffect, useState } from 'react';
import './index.css';
import { Navbar, NavItem } from './components/Navbar';  // Import named exports
import Footer from './components/Footer';
import Menu from './components/news/Menu';
import NewsGrid from './components/news/NewsGrid';

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [popularity, setPopularity] = useState('general');

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=apple&from=2023-11-26&to=2023-11-26&sortBy=${popularity}&apiKey=bf4caeba0e7248ab958f1059307036e7`)
      .then(response => response.json())
      .then(data => {
        setItems(data.articles);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [popularity]);

  return (
    <div className='min-h-screen font-poppins bg-gradient-to-r from-[#ec0b0bc8] to-[#0d205a] text-white'>
      <div className='App'>
        <h1 className='title'>App</h1>
        <Navbar />
        <Footer />
        <NavItem /> {/* This might be causing the issue */}
        <Menu active={active} setActive={setActive} setPopularity={setPopularity} />
        <NewsGrid items={items} />
        Hallo Katada
      </div>
    </div>
  );
}

export default App;
