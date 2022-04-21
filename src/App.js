import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GetCatImage from './http/GetCatImage';
import GetData from './http/GetData';
import { faker } from '@faker-js/faker'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [cat, setCat] = useState([])
  const [error, setError] = useState(null)
      
  useEffect(() => {
    (async () => {
      const images = await GetCatImage()
      let data = GetData()
      data = data.map((cat, i) => {
        cat.image = images[i].url
        cat.id = i
        return cat
      })
      setCat(data)
    })()
  }, [])



  return (
    <div className="App">
      <Router>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav> */}

        <Navbar />
      
        <Routes>
          <Route path="/" element={<Home cat={cat} />} />
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
