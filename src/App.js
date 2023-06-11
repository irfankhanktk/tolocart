import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import CheckoutModal from "./components/modals/checkout-modal";
import ProductDetailsModal from "./components/modals/product-details-modal/index";
import { TopMenu } from "./components/top-menu";
import Home from "./pages/home";
import MarketPlace from "./pages/market-place";
import SideDasboard from "./pages/store-dashboard";
import Stores from "./pages/stores";
const App = () => {
  return (
    <Router>
      <TopMenu />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market-place" element={<MarketPlace />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/store-dashboard" element={<SideDasboard />} />
          <Route path="/product-detail/:id" element={<ProductDetailsModal />} />
          <Route path="/checkoutDetail" element={<CheckoutModal />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
