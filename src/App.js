import logo from './logo.svg';
import './App.css';
import Counter from "./Counter"
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import NoPage from './pages/NoPage';
import Navigationbar from './Navigationbar.jsx';
import Aboutus from './pages/Aboutus'

import Footer from './Footer.jsx'
import Usercard from './Usercard';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Counter/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:_id" element={<Usercard />} />
        <Route path="*" element={<NoPage />} />
    </Routes>
    <Footer/>
    


    </div >
  );
}

export default App;
