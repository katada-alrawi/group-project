import React, { useEffect, useState } from 'react';
import './index.css';
import { Navbar, NavItem } from './components/Navbar';  // Import named exports
import Footer from './components/Footer';

import {  Route, Routes} from 'react-router-dom';
import Weather from './pages/weather';
import Home from './pages/home';
import Menu from './components/news/Menu';
import NewsGrid from './components/news/NewsGrid';
import Sports from "./pages/sports";
import PageNotFound from "./pages/pageNotFound";
import SingleLeague from  "./pages/singleLeague.jsx"
import News from './components/news/News';
import Tech from './components/news/tech';
import Contact from './pages/contact';

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
     <Navbar />
      <>
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/weather' element={<Weather />} />
            <Route path="/sports" element={<Sports />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/single-league/:id" element={<SingleLeague />} />
        <Route path='/tech' element={<Tech />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </>
     <Footer />
      

        
        
        
     
    </div>
  );
}

export default App;
