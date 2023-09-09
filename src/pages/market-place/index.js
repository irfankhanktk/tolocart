import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BestReviewedCard from "../../components/best-reviewed-card";
import Carousel from "../../components/carousel";
import CateryCard from "../../components/category-card";
import CompaignCard from "../../components/compaign-card";
import FrequentlyQuestion from "../../components/frequently-question/index";
import HomeHeader from "../../components/home-header";
import SeeMoreCategoriesModal from "../../components/modals/see-more-categories-modal";
import SeeMoreProductsModal from "../../components/modals/see-more-products-modal";
import PopularItemCard from "../../components/popular-item-card";
import StoreCard from "../../components/store-card";
import {
  getCategories,
  getFAQs,
  getPopularItems,
  getPopularShops,
  getRecommendedProducts,
  getShopCompaignBanners,
} from "../../services/api/api-actions";
import { setIsReqLogin } from "../../store/reducers/user-reducer";
import { UTILS } from "../../utils";
import ErrorPage from "../error-page";
import "./style.css";
const MarketPlace = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = React.useState("");
  const [showMore, setShowMore] = React.useState(false);
  const [showMoreCat, setShowMoreCat] = React.useState(false);
  const [moreProducts, setMoreProducts] = React.useState([]);
  const [moreCats, setMoreCats] = React.useState([]);
  const { category } = useSelector((state) => state);
  const [loading, setLoading] = React.useState(true);
  const [homeData, setHomeData] = React.useState({
    categories: [],
    popularShops: [],
    popularProducts: [],
    compaignBanners: [],
    popularProducts: [],
    recommended: [],
    faqs: [],
  });
  React.useEffect(() => {
    window.scrollTo(0, 0); //
    getHomeData();
  }, []);
  const getHomeData = React.useCallback(async () => {
    try {
      const res = await Promise.all([
        getCategories(3),
        getPopularShops(),
        getShopCompaignBanners(),
        getPopularItems(),
        getRecommendedProducts(),
        getFAQs(),
      ]);

      setHomeData({
        categories: res[0].data,
        popularShops: res[1].data,
        compaignBanners: res[2].data,
        popularProducts: res[3].data,
        recommended: res[4].data,
        faqs: res[5].data,
      });
    } catch (error) {
      console.log("error=>>", error);
      const errorMessage = UTILS?.returnError(error);
      if (errorMessage === "Request failed with status code 401") {
        dispatch(setIsReqLogin(true));
      } else {
        setError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  if (error) return <ErrorPage error={error} />;
  return (
    <div>
      <>
        <div className="h-25">
          <Carousel />
        </div>
        <div>
          <HomeHeader
            title={"Choose your best category"}
            onClickSeeMore={() => {
              setShowMoreCat(true);
              setMoreCats(homeData?.categories || []);
            }}
            seeMore={homeData?.categories?.length > 18}
          />
          <div className="mx-3">
            <div className="card-container row">
              {loading
                ? new Array(18)
                    ?.fill("")
                    ?.map((item, index) => (
                      <CateryCard
                        loading
                        key={index}
                        onClick={() => {}}
                        item={item}
                      />
                    ))
                : homeData?.categories
                    ?.slice(0, 18)
                    ?.map((item, index) => (
                      <CateryCard
                        key={index}
                        onClick={() => navigate(`/stores`)}
                        item={item}
                      />
                    ))}
            </div>
          </div>

          {homeData?.compaignBanners?.length ? (
            <p className="home-bg heading-title mx-3">
              Daily campaigns comfort your life
            </p>
          ) : null}
          <div className="mx-3">
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
                {loading
                  ? [0, 2, 1]?.map((item, index) => (
                      <CompaignCard
                        key={index}
                        loading
                        item={item}
                        title={item?.title}
                        description={item?.vendorShop?.name}
                      />
                    ))
                  : homeData?.compaignBanners?.map((item, index) => (
                      <CompaignCard
                        key={index}
                        item={item}
                        title={item?.title}
                        description={item?.vendorShop?.name}
                      />
                    ))}
              </Slider>
            </div>
          </div>

          <HomeHeader
            title={"Best Reviewed items which sale faster"}
            onClickSeeMore={() => {
              setShowMore(true);
              setMoreProducts(homeData?.popularProducts || []);
            }}
            seeMore={homeData?.categories?.length > 18}
          />

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
                {loading
                  ? new Array(10)
                      ?.fill("")
                      ?.map((item, index) => (
                        <BestReviewedCard
                          onClick={() => {}}
                          key={index}
                          loading
                          item={item}
                        />
                      ))
                  : homeData?.popularProducts?.map((item, index) => (
                      <BestReviewedCard
                        onClick={() => navigate(`/product-detail/${item?.id}`)}
                        key={index}
                        item={item}
                      />
                    ))}
              </Slider>
            </div>
          </div>
          <HomeHeader
            title={"Popular store in Ygnico by Area"}
            onClickSeeMore={() => {
              navigate("/stores");
            }}
            seeMore={homeData?.popularShops?.length > 3}
          />
          <div className="mx-3 d-md-flex flex-wrap">
            {loading
              ? new Array(10)
                  ?.fill("")
                  ?.map((item, index) => (
                    <StoreCard
                      onClick={() => {}}
                      key={index}
                      loading
                      item={item}
                    />
                  ))
              : homeData?.popularShops
                  ?.slice(0, 6)
                  .map((item, index) => <StoreCard key={index} item={item} />)}

            {homeData?.popularShops?.length > 9 && (
              <div className="w-100 text-center">
                <Link to="/stores" className="show_all">
                  Show All
                </Link>
              </div>
            )}
          </div>

          <HomeHeader
            title={"Popular Items Nearby"}
            onClickSeeMore={() => {
              setShowMore(true);
              setMoreProducts(homeData?.popularProducts || []);
            }}
            seeMore={homeData?.popularProducts?.length > 3}
          />
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

          <FrequentlyQuestion faqs={homeData?.faqs || []} />
        </div>
      </>
      <SeeMoreProductsModal
        products={moreProducts}
        show={showMore}
        setShow={() => {
          setMoreProducts([]);
          setShowMore(false);
        }}
      />
      <SeeMoreCategoriesModal
        categories={moreCats}
        show={showMoreCat}
        setShow={() => {
          setMoreCats([]);
          setShowMoreCat(false);
        }}
      />
    </div>
  );
};

export default MarketPlace;
