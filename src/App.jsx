import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Sports from "./pages/sports";
import PageNotFound from "./pages/pageNotFound";
import SingleLeague from "./pages/singleLeague";

function App() {
  return (
    <>
      <div className="min-h-screen font-poppins bg-gradient-to-r from-[#ec0b0bc8] to-[#0d205a] text-white">
        <Navbar />
        <Routes>
        <Route path="/sports" element={<Sports />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/single-league/:id" element={<SingleLeague />} />
        </Routes>
        <Footer />
      </div>
  
    </>
  );
}

export default App;
