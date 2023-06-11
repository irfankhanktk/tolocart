import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { home_bg, laptop_home, vegetable } from "../../assets/images";
import BestReviewedCard from "../../components/best-reviewed-card";
import CateryCard from "../../components/category-card";
import CompaignCard from "../../components/compaign-card";
import FrequentlyQuestion from "../../components/frequently-question/index";
import PopularItemCard from "../../components/popular-item-card";
import StoreCard from "../../components/store-card";
import { setCategories } from "../../store/reducers/category-slice";
import {
  useGetCategoriesQuery,
  useGetOffersWithShopDetailsQuery,
} from "./../../store/api";
const MarketPlace = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state); // assuming your category slice name is 'categories'
  const dispatch = useDispatch();
  const {
    data: main_categories,
    isLoading,
    isError,
    error,
  } = useGetCategoriesQuery();
  const {
    data: offers_with_shop_details,
    isLoading: offers_loading,
    isError: isOffersError,
    error: offerError,
  } = useGetOffersWithShopDetailsQuery();
  React.useEffect(() => {
    if (main_categories) {
      dispatch(setCategories(main_categories));
    }
  }, [main_categories, dispatch]);

  if (isLoading) {
    return <div className="d-flex bg-info">Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching categories: {error}</div>;
  }
  return (
    <>
      <div className="container-fluid">
        <img src={home_bg} style={{ width: "100%" }} />
      </div>
      <div>
        <p className="home-bg font-size-heavy">Choose your best category</p>
        <div className="mx-5">
          <div
            className="card-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {main_categories?.data?.map((item, index) => (
              <CateryCard
                onClick={() => navigate(`/product-detail/${item?.id}`)}
                title={item?.title}
                // border={item?.border}
                // bg={item?.bg}
              />
            ))}
          </div>
        </div>
        <p className="home-bg heading-title mx-3">
          Daily campaigns comfort your life
        </p>
        <div className="mx-5">
          <div className="card-container">
            <Slider
              dots={false}
              infinite={false}
              speed={500}
              slidesToShow={2}
              slidesToScroll={1}
              className="card-slider"
              responsive={[
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,
                  },
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ]}
            >
              {offers_with_shop_details?.data?.map((item, index) => (
                <CompaignCard
                  item={item}
                  title={item?.title}
                  description={item?.vendorShop?.name}
                  // bg={item?.bg}
                  // image={item?.image}
                />
              ))}
            </Slider>
          </div>
        </div>
        <p className="home-bg heading-title">
          Best Reviewed items which sale faster
        </p>
        <div className="mx-3">
          <div className="card-container">
            <Slider
              dots={false}
              infinite={false}
              speed={500}
              slidesToShow={5}
              slidesToScroll={1}
              className="card-slider"
              responsive={[
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,
                  },
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ]}
            >
              {/* className='card-slider'> */}
              {[
                { title: "Groceries", bg: "#F8A44C1A", border: "#F8A44CB2" },
                { title: "Retail", bg: "#53B1751A", border: "#53B175B2" },
                { title: "Electronic", bg: "#D3B0E01A", border: "##D3B0E01A" },
                { title: "Groceries", bg: "#F8A44C1A", border: "#F8A44CB2" },
                { title: "Groceries", bg: "#F8A44C1A", border: "#F8A44CB2" },
              ].map((item, index) => (
                <BestReviewedCard
                  onClick={() => navigate("/product-detail")}
                  key={index}
                  title={item?.title}
                  bg={item?.bg}
                />
              ))}
            </Slider>
          </div>
        </div>
        <p className="home-bg heading-title">Popular store in Ygnico by Area</p>
        <div className="d-md-flex flex-wrap">
          {[
            { title: "Groceries", bg: "#F8A44C1A", border: "#F8A44CB2" },
            { title: "Retail", bg: "#53B1751A", border: "#53B175B2" },
            { title: "Electronic", bg: "#D3B0E01A", border: "##D3B0E01A" },
            { title: "Groceries", bg: "#F8A44C1A", border: "#F8A44CB2" },
            { title: "Groceries", bg: "#F8A44C1A", border: "#F8A44CB2" },
            { title: "Groceries", bg: "#F8A44C1A", border: "#F8A44CB2" },
          ].map((item, index) => (
            <StoreCard key={index} title={item?.title} bg={item?.bg} />
          ))}
        </div>

        <p className="home-bg heading-title">Popular Items Nearby</p>
        <div className="mx-3">
          <div className="card-container">
            <Slider
              dots={false}
              infinite={false}
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              className="card-slider"
              responsive={[
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                  },
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ]}
            >
              {[
                { title: "Groceries", bg: "#F8A44C1A", border: "#F8A44CB2" },
                { title: "Retail", bg: "#53B1751A", border: "#53B175B2" },
                { title: "Electronic", bg: "#D3B0E01A", border: "##D3B0E01A" },
                { title: "Groceries", bg: "#F8A44C1A", border: "#F8A44CB2" },
                { title: "Groceries", bg: "#F8A44C1A", border: "#F8A44CB2" },
              ].map((item, index) => (
                <PopularItemCard
                  onClick={() => navigate("/product-detail")}
                  key={index}
                  title={item?.title}
                  bg={item?.bg}
                />
              ))}
            </Slider>
          </div>
        </div>
        {/* <PopularItemCard/> */}
        <FrequentlyQuestion />
      </div>
    </>
  );
};

export default MarketPlace;
