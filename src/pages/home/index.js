import React from "react";
import { Container } from "react-bootstrap";
import { home_bg } from "../../assets/images";
import AboutHome from "../../components/about-home";
import CustomerHomeCard from "../../components/customer-home-card/index";
import FrequentlyQuestion from "../../components/frequently-question/index";
import HomeServices from "../../components/home-services/index";
import { useDispatch } from "react-redux";
import { getVehicleDetails } from "../../services/api/api-actions";
const Home = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getVehicleDetails());
  }, []);
  return (
    <div className="container-fluid">
      <img src={home_bg} style={{ width: "100%" }} />
      <p className="home-bg">Tolocart Everyday Needs</p>
      <HomeServices />
      <AboutHome />
      <Container className="container row justify-content-around d-flex align-items-center mx-auto">
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
      </Container>

      <FrequentlyQuestion />
    </div>
  );
};
export default Home;
