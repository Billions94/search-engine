import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Search from './components/Home/Search';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Company from './components/Company/Company';
import Favorite from './components/Favorites/Favorite';
import { useState } from "react"

function App() {

  const [input, setInput] = useState({
    text: "",
  });

  return (
    <Router>
    <div className="App">
      <NavBar />
    <Routes>
      <Route path="/search" element={<Search input={input} setInput={setInput}/>}/>
      <Route path="/:company" element={<Company />}/>
      <Route path="/favorites" element={<Favorite />}/>
    </Routes>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
