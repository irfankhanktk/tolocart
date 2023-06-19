import { PLACE_ORDER_DATA } from "../../constants";
import { setVehicle } from "../../store/reducers/user-reducer";
import { UTILS } from "../../utils";
import { getData, postData } from "./";
import { URLS } from "./api-urls";

export const getVehicleDetails = (type = "Bike") => {
  return async (dispatch, getState) => {
    try {
      const res = await getData(`${URLS.vehicle.getVehicleDetails}${type}`);
      dispatch(setVehicle(res?.data));
    } catch (error) {
      console.log("error in vehicle details", UTILS?.returnError(error));
      alert("", UTILS?.returnError(error));
    }
  };
};
//order here
export const placeOrder = (data = PLACE_ORDER_DATA) =>
  postData(`${URLS.order.place_order}`, data);

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
export const getRecommendedProducts = () =>
  getData(
    `${URLS.product.get_remmmended}ShopType=Store&PageNumber=1&PageSize=10&VendorShopId=3`
  );
export const getProductDetails = (product_id) =>
  getData(`${URLS.product.get_product_details}${product_id}`);
export const getSuggestedItems = (product_ids) =>
  getData(`${URLS.product.get_suggested_items}${product_ids}`);
