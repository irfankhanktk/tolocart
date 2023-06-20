export const API_URLS = {
  base_url: "http://efuikwaku-001-site19.etempurl.com/api/",
  shop_offer: {
    get_all_offers_shop_details: "v1/ShopOffer/GetAllOfferWithShopDetails",
  },
  main_categories: {
    get_categories: "MainCategory/GetCategories/", //id
  },
  product: {
    get_remmmended: "v1/Product/GetRecommended?", //params ShopType=store&PageNumber=1&PageSize=10&VendorShopId
  },
};
