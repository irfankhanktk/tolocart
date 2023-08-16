export const URLS = {
  base_url: "https://hamiddawod-001-site2.htempurl.com/api/",
  image_url: "https://efuikwaku-001-site16.etempurl.com/UploadedFiles/",
  faqs: "v1/Faqs/GetAll",
  get_notifications: "v1/Notification",
  auth: {
    login: "account/authenticate",
    login_phone: "account/loginwithphone",
    // register: "account/register",
    register: "account/register-with-email",
    update_profile: "account/update",
    forgot_password: "account/forgot-password",
    new_password: "account/new-password",
  },
  get_slides: "v1/SliderImages/GetAll",
  shop: {
    get_all_offers_shop_details: "v1/ShopOffer/GetAllOfferWithShopDetails",
    get_compaign_banners: "v1/ShopOffer/GetBanners/Store",
    get_popular_shops: "v1/VendorShop?Type=Store",
    get_categories_products:
      "v1/Product/FilterProductsByCategoriesAndName?ShopId=",
  },
  category: {
    get_categories: "MainCategory/GetCategories/", //id
  },
  product: {
    search_products: "v1/Product/Search?ShopType=Store&Search=",
    get_popular_products: "v1/Product/GetPopular?ShopType=Store",
    get_product_details: "v1/Product/",
    get_suggested_items: "v1/Product/GetAllSuggested?ProductIds=", //1,3,5
    get_remmmended: "v1/Product/GetRecommended?", //params ShopType=store&PageNumber=1&PageSize=10&VendorShopId
  },
  vehicle: {
    getVehicleDetails: "v1/VehicleType/GetByType/",
  },
  order: {
    place_order: "v1/order",
    order_details: "v1/order/", //12
    past_orders: "v1/Order/GetCustomerPastOrders?ShopType=", //Store
    active_orders: "v1/Order/GetCustomerActiveOrders/", //Store
    update_payment: "v1/Order/UpdatePayment",
  },
};
