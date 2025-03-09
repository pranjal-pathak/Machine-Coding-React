import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Accordion from './components/accordion/Accordion';
import Filter from './components/product-filter/Filter';
import MortgageCalc from './components/mortgage/MortgageCalc';
import Pagination from './components/pagination/Pagination';
import ProgressBar from './components/progress-bar/ProgressBar';
import ToDO from './components/todo/ToDO';
import Carousel from './components/carousel/Carousel';
import AutoComplete from './components/auto-complete/AutoComplete';
import Modal from './components/modal/Modal';

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
        <Route path="progressbar" element={<ProgressBar />} />
        <Route path="todo" element={<ToDO />} />
        <Route path="carousel" element={<Carousel />} />
        <Route path="auto" element={<AutoComplete />} />
        <Route path="modal" element={<Modal />} />
      </Routes>
    </>
  );
}

export default App;
