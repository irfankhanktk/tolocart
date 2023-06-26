import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import CheckoutModal from "./components/modals/checkout-modal";
import { TopMenu } from "./components/top-menu";
import Home from "./pages/home";
import MarketPlace from "./pages/market-place";
import ProductDetails from "./pages/product-details";
import SideDasboard from "./pages/store-dashboard";
import Stores from "./pages/stores";
import TrackOrder from "./pages/track-order";
const App = () => {
  return (
    <Router>
      <TopMenu />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/market-place" element={<MarketPlace />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/store-dashboard/:id" element={<SideDasboard />} />
          <Route path="/product-detail/:id" element={<ProductDetails />} />
          <Route path="/checkoutDetail" element={<CheckoutModal />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
