import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Accordion from './components/accordion/Accordion';
import Filter from './components/product-filter/Filter';
import MortgageCalc from './components/mortgage/MortgageCalc';
import Pagination from './components/pagination/Pagination';
// import Carousel from './components/Carousel';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="mortgage" element={<MortgageCalc />} />
        <Route path="pagination" element={<Pagination />} />

        {/* <Route path="/carousel" element={<Carousel />} /> */}
      </Routes>
    </>
  );
}

export default App;
