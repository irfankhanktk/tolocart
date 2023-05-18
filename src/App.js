import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import { TopMenu } from './components/top-menu';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import './App.css'
import Footer from './components/footer';

const App = () => {

  return (
    <Router>
      <div>
        <TopMenu />
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>)
}

export default App;
