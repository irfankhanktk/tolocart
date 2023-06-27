import React from "react";
import { Container } from "react-bootstrap";
import { home_bg } from "../../assets/images";
import AboutHome from "../../components/about-home";
import CustomerHomeCard from "../../components/customer-home-card/index";
import FrequentlyQuestion from "../../components/frequently-question/index";
import HomeServices from "../../components/home-services/index";
import { useDispatch } from "react-redux";
import {
  getCurrentLocation,
  getVehicleDetails,
} from "../../services/api/api-actions";
import { STORAGE_KEYS } from "../../constants";
import { setUserInfo } from "../../store/reducers/user-reducer";
const Home = () => {
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
    <div className="container-fluid p-0">
      <img src={home_bg} style={{ width: "100%" }} />
      <p className="home-bg">Tolocart Everyday Needs</p>
      <HomeServices />
      <AboutHome />
      <div className="container">
        <div className="row">
          <CustomerHomeCard
            style={{ flexDirection: "column-reverse" }}
            descriptionBg={"#FF5A00"}
          />
          <CustomerHomeCard
            style={{ flexDirection: "column" }}
            descriptionBg={"#1BB504DE"}
          />
          <CustomerHomeCard
            style={{ flexDirection: "column-reverse" }}
            descriptionBg={"#FF5A00"}
          />
        </div>
      </div>

      <FrequentlyQuestion />
    </div>
  );
};
export default Home;
