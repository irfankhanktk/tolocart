import { PLACE_ORDER_DATA } from "../../constants";
import {
  setActiveOrders,
  setPastOrders,
} from "../../store/reducers/order-slice";
import {
  setAddFavProduct,
  setAddFavStore,
  setFavProductIds,
  setFavStoreIds,
  setIsReqLogin,
  setLocation,
  setRemoveFavProduct,
  setRemoveFavStore,
  setSlides,
  setVehicle,
} from "../../store/reducers/user-reducer";
import { UTILS } from "../../utils";
import { deleteData, getData, postData } from "./";
import { URLS } from "./api-urls";

export const getSlides = () => {
  return async (dispatch, getState) => {
    try {
      const res = await getData(`${URLS.get_slides}`);
      dispatch(setSlides(res?.data));
    } catch (error) {
      console.log("error in getSlides", UTILS?.returnError(error));
      if (UTILS?.returnError(error) === "Request failed with status code 401") {
        dispatch(setIsReqLogin(true));
      } else {
        // alert(UTILS?.returnError(error));
      }
    }
  };
};
export const getVehicleDetails = (type = "Bike") => {
  return async (dispatch, getState) => {
    try {
      const res = await getData(`${URLS.vehicle.getVehicleDetails}${type}`);
      dispatch(setVehicle(res?.data));
    } catch (error) {
      console.log("error in vehicle details", UTILS?.returnError(error));
      if (UTILS?.returnError(error) === "Request failed with status code 401") {
        dispatch(setIsReqLogin(true));
      } else {
        // alert(UTILS?.returnError(error));
      }
    }
  };
};
export const getFavProductIds = () => {
  return async (dispatch, getState) => {
    try {
      if (!getState()?.user?.userInfo) {
        dispatch(setFavProductIds([]));
      } else {
        const res = await getData(`${URLS.product.favourite_product_ids}`);
        dispatch(setFavProductIds(res?.data));
      }
    } catch (error) {
      console.log("error ingetFavProductIds", UTILS?.returnError(error));
    }
  };
};
export const getFavStoreIds = () => {
  return async (dispatch, getState) => {
    try {
      if (!getState()?.user?.userInfo) {
        dispatch(setFavStoreIds([]));
      } else {
        const res = await getData(`${URLS.shop.favourite_store_ids}`);
        dispatch(setFavStoreIds(res?.data));
      }
    } catch (error) {
      console.log("error ingetFavProductIds", UTILS?.returnError(error));
    }
  };
};
export const getCurrentLocation = () => {
  return async (dispatch, getState) => {
    try {
      const { location } = getState()?.user;
      if (!location) {
        UTILS.get_current_location(
          async (position) => {
            const res = await UTILS?._returnAddress(
              position?.coords?.latitude,
              position?.coords?.longitude
            );
            dispatch(
              setLocation({
                latitude: position?.coords?.latitude,
                longitude: position?.coords?.longitude,
                address: res?.fulladdress,
              })
            );
          },
          (error) => {
            // alert("Location Error", UTILS?.returnError(error));
          }
        );
      }
      // const res = await ;
      // dispatch(setVehicle(res?.data));
    } catch (error) {
      console.log("error in vehicle details", UTILS?.returnError(error));
      alert("", UTILS?.returnError(error));
    }
  };
};
export const getUserOrders = (setLoading, setError) => {
  return async (dispatch, getState) => {
    try {
      setLoading(true);
      const res = await getData(`${URLS.order.active_orders}Store`);
      const res1 = await getData(`${URLS.order.past_orders}Store`);
      dispatch(setActiveOrders(res?.data));
      dispatch(setPastOrders(res1?.data));
    } catch (error) {
      console.log("error in vehicle details", UTILS?.returnError(error));
      if (UTILS?.returnError(error) === "Request failed with status code 401") {
        dispatch(setIsReqLogin(true));
      } else {
        setError(UTILS?.returnError(error));
      }
    } finally {
      setLoading(false);
    }
  };
};
//order here
export const placeOrder = (data = PLACE_ORDER_DATA) =>
  postData(`${URLS.order.place_order}`, data);
export const addProductReview = (data) =>
  postData(`${URLS.product.add_review}`, data);

export const getCategories = (id) =>
  getData(`${URLS.category.get_categories}${id}`);

export const getShopOffersWithShopDetails = () =>
  getData(`${URLS.shop.get_all_offers_shop_details}`);

export const getShopCompaignBanners = () =>
  getData(`${URLS.shop.get_compaign_banners}`);

export const getPopularShops = () => getData(`${URLS.shop.get_popular_shops}`);
export const getProductsByCategories = (shop_id) =>
  getData(`${URLS.shop.get_categories_products}${shop_id}`);
export const getSearchProducts = (term) =>
  getData(`${URLS.product.search_products}${term}`);
export const getPopularItems = () =>
  getData(`${URLS.product.get_popular_products}`);
export const getNotifications = () => getData(`${URLS.get_notifications}`);
export const getRecommendedProducts = () =>
  getData(
    `${URLS.product.get_remmmended}ShopType=Store&PageNumber=1&PageSize=10&VendorShopId=3`
  );
export const getProductDetails = (product_id) =>
  getData(`${URLS.product.get_product_details}${product_id}`);
export const getProductReviews = (product_id) =>
  getData(`${URLS.product.get_product_reviews}${product_id}`);
export const getSuggestedItems = (product_ids) =>
  getData(`${URLS.product.get_suggested_items}${product_ids}`);
export const getOrderDetails = (order_id) =>
  getData(`${URLS.order.order_details}${order_id}`);
export const updateOrderPayment = (data) =>
  postData(`${URLS.order.update_payment}`, data);
export const getFAQs = () => getData(`${URLS.faqs}`);
//product fav

export const toggleFavouriteProduct = (data, setLoading = () => {}) => {
  return async (dispatch, getState) => {
    try {
      setLoading(true);
      const isFavourite = getState()?.user?.fav_product_ids?.some(
        (x) => x == data?.productId
      );
      if (isFavourite) {
        await deleteData(`${URLS.product.favourite_product}`, data);
        dispatch(setRemoveFavProduct(data?.productId));
      } else {
        await postData(`${URLS.product.favourite_product}`, data);
        dispatch(setAddFavProduct(data?.productId));
      }
    } catch (error) {
      console.log("error in vehicle details", UTILS?.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
export const toggleFavouriteStore = (data, setLoading = () => {}) => {
  return async (dispatch, getState) => {
    try {
      console.log("data:::::", data);
      setLoading(true);
      const isFavourite = getState()?.user?.fav_store_ids?.some(
        (x) => x == data?.shopId
      );
      if (isFavourite) {
        await deleteData(`${URLS.shop.favourite_store}`, data);
        dispatch(setRemoveFavStore(data?.shopId));
      } else {
        await postData(`${URLS.shop.favourite_store}`, data);
        dispatch(setAddFavStore(data?.shopId));
      }
    } catch (error) {
      console.log("error in vehicle details", UTILS?.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
