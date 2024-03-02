import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Review from './components/Review';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
