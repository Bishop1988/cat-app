import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [cat, setCat] = useState([])
  const [error, setError] = useState(null)
      
  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search")
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json()
        setCat(data)
      } catch (err) {
        console.log(err.message)
        setError("Could not fetch data")
      }
    }
    fetchCats()
  }, [])

  console.log(cat)

  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          {/* test comment */}
        </nav>
      
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
