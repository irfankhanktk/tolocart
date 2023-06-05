import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import { TopMenu } from "./components/top-menu";
import MarketPlace from "./pages/market-place";
import Stores from "./pages/stores";
import Home from "./pages/home";
import "./App.css";
import Footer from "./components/footer";
import SideDasboard from "./pages/store-dashboard";
// import Drawer from './components/drawer';
const App = () => {
  return (
    <Router>
      <TopMenu />
      <div>
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market-place" element={<MarketPlace />} />
          <Route path="/stores" element={<Stores />} />
<<<<<<< HEAD
          <Route path="/store-dashboard" element={<SideDasboard />} />
=======
          <Route path="/SideDashboard" element={<SideDasboard />} />
          <Route path="/productDetail" element={<ProductDetailsModal/>} />
>>>>>>> 17d3a87ffe91756768dd8f88abc3238446db69ba
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
