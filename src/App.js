import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import { TopMenu } from './components/top-menu';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import './App.css'
import Footer from './components/footer';
import SideDasboard from './pages/sideDashboard';
// import Drawer from './components/drawer';
const App = () => {

  return (
    <Router>
      <TopMenu />
      <div>
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/SideDashboard" element={<SideDasboard/>} />
        </Routes>
        <Footer />

      </div>
    </Router>)
}

export default App;
