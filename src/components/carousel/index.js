import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";
import { home_bg } from "../../assets/images";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { SLIDES_LIST } from "../../constants";

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots custom-dots",
  };
  const { slides } = useSelector((s) => s?.user);
  const slidesData = slides?.length ? slides : SLIDES_LIST;
  return (
    <Slider {...settings}>
      {slidesData?.map((item, index) => (
        <div key={index}>
          <img
            style={{ height: "auto", width: "90%" ,marginLeft:"50%",transform:"translate(-50%,0%)",marginTop:"35px",borderRadius:"12px",opacity:".7"}}
            src={item?.image}
            alt="First slide"
          />
          <div className="text-center">
            {/* <h3>{item?.title}</h3> */}
            {/* <p>Explore a diverse range of cuisines from around the world.</p> */}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MyCarousel;
