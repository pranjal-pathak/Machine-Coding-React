import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Accordion from './components/Accordion';
// import Carousel from './components/Carousel';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordion" element={<Accordion />} />
        {/* <Route path="/carousel" element={<Carousel />} /> */}
      </Routes>
    </>
  );
}

export default App;
