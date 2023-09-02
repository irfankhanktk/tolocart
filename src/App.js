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
import "./firebase-config";
import {
  getCurrentLocation,
  getFavProductIds,
  getSlides,
  getVehicleDetails,
} from "./services/api/api-actions";
import { STORAGE_KEYS } from "./constants";
import Help from "./pages/help";
import About from "./pages/about";
import MapComponent from "./components/modals/map-modal";
import ErrorPage from "./pages/error-page";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsAndConditions from "./pages/terms-conditions";

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
    dispatch(getFavProductIds());
    dispatch(getSlides());
    dispatch(getCurrentLocation());
  }, []);
  return (
    <Router>
      <main>
        <TopMenu />
        <div style={{ minHeight: window.innerHeight }}>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/stores" element={<Stores />} />
            <Route path="/store-dashboard/:id" element={<SideDasboard />} />
            <Route path="/product-detail/:id" element={<ProductDetails />} />
            <Route path="/track-order/:id" element={<TrackOrder />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route index path="/" element={<MarketPlace />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          {/* <div className="layout"> */}
        </div>

        <Footer />
        {/* </div> */}
      </main>
    </Router>
  );
};

export default App;
