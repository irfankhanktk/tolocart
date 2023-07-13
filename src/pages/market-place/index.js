import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { home_bg } from "../../assets/images";
import BestReviewedCard from "../../components/best-reviewed-card";
import CateryCard from "../../components/category-card";
import CompaignCard from "../../components/compaign-card";
import FrequentlyQuestion from "../../components/frequently-question/index";
import PopularItemCard from "../../components/popular-item-card";
import StoreCard from "../../components/store-card";
import Loader from "../../components/loader/index";
import "./style.css";
import {
  getCategories,
  getPopularItems,
  getPopularProducts,
  getPopularShops,
  getRecommendedProducts,
  getShopCompaignBanners,
  getShopOffersWithShopDetails,
} from "../../services/api/api-actions";
import { UTILS } from "../../utils";
import { setIsReqLogin } from "../../store/reducers/user-reducer";
import { Container } from "react-bootstrap";
const MarketPlace = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state);
  const [loading, setLoading] = React.useState(true);
  const [homeData, setHomeData] = React.useState({
    categories: [],
    popularShops: [],
    popularProducts: [],
    compaignBanners: [],
    popularProducts: [],
    recommended: [],
  });
  React.useEffect(() => {
    getHomeData();
  }, []);
  const getHomeData = async () => {
    try {
      const res = await Promise.all([
        getCategories(3),
        getPopularShops(),
        getShopCompaignBanners(),
        getPopularItems(),
        getRecommendedProducts(),
      ]);

      setHomeData({
        categories: res[0].data,
        popularShops: res[1].data,
        compaignBanners: res[2].data,
        popularProducts: res[3].data,
        recommended: res[4].data,
      });
    } catch (error) {
      console.log("error=>>", error);
      if (UTILS?.returnError(error) === "Request failed with status code 401") {
        dispatch(setIsReqLogin(true));
      } else {
        alert(UTILS?.returnError(error));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
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
                {homeData?.categories?.map((item, index) => (
                  <CateryCard
                    key={index}
                    onClick={() => navigate(`/stores`)}
                    // title={item?.title}
                    item={item}
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
                  {homeData?.compaignBanners?.map((item, index) => (
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
                  {homeData?.popularProducts?.map((item, index) => (
                    <BestReviewedCard
                      onClick={() => navigate(`/product-detail/${item?.id}`)}
                      key={index}
                      item={item}
                    />
                  ))}
                </Slider>
              </div>
            </div>
            <p className="home-bg heading-title">
              Popular store in Ygnico by Area
            </p>
            <div className="d-md-flex flex-wrap">
              {homeData?.popularShops?.slice(0, 9).map((item, index) => (
                <StoreCard key={index} item={item} />
              ))}

              {homeData?.popularShops?.length > 9 && (
                <div className="w-100 text-center">
                  <a href="/stores" className="show_all">
                    Show All
                  </a>
                </div>
              )}
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
                  {homeData?.popularProducts?.map((item, index) => (
                    <PopularItemCard
                      onClick={() => navigate(`/product-detail/${item?.id}`)}
                      key={index}
                      item={item}
                    />
                  ))}
                </Slider>
              </div>
            </div>
            {/* <PopularItemCard/> */}
            <FrequentlyQuestion />
          </div>
        </>
      )}
    </div>
  );
};

export default MarketPlace;
