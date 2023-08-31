import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BestReviewedCard from "../../components/best-reviewed-card";
import ProductCounter from "../../components/counter";
import Loader from "../../components/loader";
import CheckoutModal from "../../components/modals/checkout-modal";
import {
  getProductDetails,
  getSuggestedItems,
} from "../../services/api/api-actions";
import { UTILS, returnImage } from "../../utils";
import "./style.css";
import { useDispatch } from "react-redux";
import { setAddToCart } from "../../store/reducers/cart-slice";
import ErrorPage from "../error-page";

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [checkoutModal, setCheckoutModal] = useState(false);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  const [productDetails, setProductDetails] = React.useState({
    data: {},
    recommended_products: [],
  });
  const handleAddToCart = (item) => {
    try {
      dispatch(setAddToCart(item));
      // Continue with any other logic after successful addToCart
    } catch (error) {
      // Handle the error
      console.error("Error adding item to cart:", error.message);
      alert(UTILS.returnError(error));
      // Display an error message to the user or perform any other error handling action
    }
  };
  const getDetails = async () => {
    try {
      setLoading(true);
      const res = await Promise.all([
        getProductDetails(id),
        getSuggestedItems(id),
      ]);
      setProductDetails({
        data: res[0]?.data,
        recommended_products: res[1]?.data[0]?.vendorShop?.products || [],
      });
    } catch (error) {
      console.log("error=>>", error);
      setError(UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    window.scrollTo(0, 0); //
    getDetails();
  }, [id]);
  if (loading) {
    return <Loader />;
  }
  if (error) return <ErrorPage error={error} />;

  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-md-4 mb-3 d-flex align-items-center justify-content-end">
            <div
              className="d-flex align-items-center p-3 rounded"
              style={{
                width: "100%",
                height: "300px",
                border: "1px solid #E2E2E2",
              }}
            >
              <img
                className="rounded w-100 h-100"
                style={{ objectFit: "contain" }}
                src={returnImage(productDetails?.data?.imagePath)}
              />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="singleproduct-wrap">
              <div className="singleproduct-title d-flex align-items-center justify-content-between mb-2">
                <h2>{productDetails?.data?.name}</h2>
                <div className="icon-list d-flex align-items-center gap-3">
                  <i
                    class="fa fa-share-alt"
                    aria-hidden="true"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <i
                    class="fa fa-heart-o"
                    aria-hidden="true"
                    style={{ fontSize: "20px" }}
                  ></i>
                </div>
              </div>

              <p className="lb-price">$3.49/lb</p>
              <h6 className="stock-product">In stock</h6>
              <div className="add-product-counter d-flex align-items-center justify-content-between">
                <ProductCounter item={productDetails?.data} />
                <div className="product-price h-auto ">
                  <span>${productDetails?.data?.price}</span>
                  <p className="mb-2">49</p>
                </div>
              </div>
              <div className="satisfaction-gurantee d-flex align-items-center gap-2 mb-2 mt-2">
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                <Link to="#" style={{ color: "#5468FF" }}>
                  {" "}
                  100% satisfaction guarantee{" "}
                </Link>
                <i
                  class="fa fa-question-circle"
                  aria-hidden="true"
                  style={{ color: "#ccc" }}
                ></i>
              </div>

              {/* accordian strt */}
              <div class="accordion" id="accordionExample">
                <div class="accordion-item custom-accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button custom-accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Product Detail
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      {productDetails?.data?.description}
                    </div>
                  </div>
                </div>
                <div class="accordion-item custom-accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed custom-accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Ingredients
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body"></div>
                  </div>
                </div>
                <div class="accordion-item custom-accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed custom-accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Nutritions
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div class="dropdown mb-2">
              <Link
                class="btn btn-secondary dropdown-toggle custom-dropdown"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div>
                  <i
                    class="fa fa-refresh"
                    aria-hidden="true"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Set order as a shecdule
                </div>
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </Link>

              <ul
                class="dropdown-menu custom-dropdown-menu"
                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <Link class="dropdown-item" to="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
            <div class="dropdown mb-2">
              <Link
                class="btn btn-secondary dropdown-toggle custom-dropdown"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div>
                  <i
                    class="fa fa-list"
                    aria-hidden="true"
                    style={{ marginRight: "10px" }}
                  ></i>{" "}
                  Add to List
                </div>
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </Link>
              <ul
                class="dropdown-menu custom-dropdown-menu"
                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <Link class="dropdown-item" to="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
            <div class="dropdown mb-2">
              <Link
                class="btn btn-secondary dropdown-toggle custom-dropdown"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Reviews
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </Link>

              <ul
                class="dropdown-menu custom-dropdown-menu"
                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <Link class="dropdown-item" to="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              to="#"
              className="element-custom-btn decoration-none"
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart(productDetails?.data);
              }}
            >
              Add To Basket
            </Link>
          </div>
        </div>

        <div
          className="row"
          style={{ marginTop: "50px", marginBottom: "30px" }}
        >
          <div className="col-md-12">
            <div className="item-title d-flex justify-content-between align-items-center mb-4">
              <h2>Related Items</h2>
              <Link to="#">See all</Link>
            </div>
          </div>

          {productDetails?.recommended_products?.map((item, index) => (
            <div key={index} className="col-md-3">
              <BestReviewedCard
                item={item}
                onClick={() => navigate(`/product-detail/${item?.id}`)}
                title={item?.title}
                // bg={item?.bg}
              />
            </div>
          ))}
        </div>
      </div>
      <CheckoutModal show={checkoutModal} setShow={setCheckoutModal} />
    </>
  );
};

export default ProductDetails;
