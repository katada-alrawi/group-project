import React, { useEffect } from 'react';
import './index.css';
import { NavItem, Navbar } from './components/Navbar'; 
import Footer from './components/Footer';
import Menu from './components/news/Menu';
import NewsGrid from './components/news/NewsGrid';
import News from './components/news/News';
import NewsItem from './components/news/NewsItem';

function App() {
  const [items, setItems] = React.useState([]);
  const [active, setActive] = React.useState(1);
  const [popularity, setPopularity] = React.useState('general');

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=apple&from=2023-11-26&to=2023-11-26&sortBy=${popularity}&apiKey=bf4caeba0e7248ab958f1059307036e7`)
      .then(response => response.json())
      .then(data => {
        console.log(data.articles);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [popularity]); // Include popularity in the dependency array

  return (
    <div className='min-h-screen font-poppins bg-gradient-to-r from-[#ec0b0bc8] to-[#0d205a] text-white'>
      <div className='App'>
        <h1 className='title'>App</h1>
        <Navbar />
        <Footer />
        <NavItem />
        <Menu active={active} setActive={setActive} setPopularity={setPopularity} />
        <NewsGrid items={items} />
        <News />
        <NewsItem />
        Hallo Katada
      </div>
    </div>
  );
}

export default App;
