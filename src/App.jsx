// App.js
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {  Route, Routes} from 'react-router-dom';
import Weather from './pages/weather';
import Home from './pages/home';
function App() {
  return (
    <div className='min-h-screen font-poppins bg-gradient-to-r from-[#ec0b0bc8] to-[#0d205a] text-white'>
     <Navbar />
      <>
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/weather' element={<Weather />} />
      </Routes>
      </>
     <Footer />
     
    </div>
  );
}

export default App;
