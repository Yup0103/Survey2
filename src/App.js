import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Benefits from './pages/Benefits';
import Faq from './pages/Faq';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
