import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import { TopMenu } from "./components/top-menu";
// import Home from "./pages/home";
import MarketPlace from "./pages/market-place";
import OrderHistory from "./pages/order-history";
import ProductDetails from "./pages/product-details";
import SideDasboard from "./pages/store-dashboard";
import Stores from "./pages/stores";
import TrackOrder from "./pages/track-order";
import { useDispatch } from "react-redux";
import { setUserInfo } from "./store/reducers/user-reducer";
import {
  getCurrentLocation,
  getVehicleDetails,
} from "./services/api/api-actions";
import { STORAGE_KEYS } from "./constants";

const App = () => {
  const dispatch = useDispatch();
  const getData = () => {
    const res = localStorage.getItem(STORAGE_KEYS.user);
    const token = localStorage.getItem(STORAGE_KEYS.token);
    if (!res) return;
    const user = JSON.parse(res);
    dispatch(setUserInfo({ data: user, jwtToken: token }));
  };
  React.useEffect(() => {
    getData();
    dispatch(getVehicleDetails());
    dispatch(getCurrentLocation());
  }, []);
  return (
    <Router>
      <TopMenu />
      <div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<MarketPlace />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/store-dashboard/:id" element={<SideDasboard />} />
          <Route path="/product-detail/:id" element={<ProductDetails />} />
          <Route path="/track-order/:id" element={<TrackOrder />} />
          <Route path="/order-history" element={<OrderHistory />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
