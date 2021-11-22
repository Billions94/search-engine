import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Search from './components/Home/Search';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Company from './components/Company/Company';
import { useState } from "react"

function App() {
  const [search, setSearch] = useState(null);
  const [input, setInput] = useState({
    text: "",
  });

  console.log(search)
  return (
    <Router>
    <div className="App">
      <NavBar />
    <Routes>
      <Route path="/search" element={<Search 
      data={search}
      setData={setSearch}
      input={input}
      setInput={setInput}/>}/>
      <Route path="/:company" element={<Company />}/>
    </Routes>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
