import { Routes, Route } from 'react-router-dom';
import NewsGrid from './NewsGrid';
import Menu from './Menu';
function News() {
  return (
    <div className='News'>
      <Menu />
     
        {/* <Route path="/" element={<NewsGrid items="" />} /> */}
     
    </div>
  );
}
export default News;