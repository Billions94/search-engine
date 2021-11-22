import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Search from './components/Home/Search';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
    <Routes>
      <Route path="/search" element={<Search />}/>
      <Route path="/jobdetails/:id" element={<Search />}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
