import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Projects from './Components/Projects';
import {Routes, Route } from 'react-router-dom';
import ContactMe from './Components/ContactMe';

function App() {
  return (
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contactme" element={<ContactMe />} />
      </Routes>
   
  );
}

export default App;
