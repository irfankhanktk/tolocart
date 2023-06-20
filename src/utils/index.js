import { URLS } from "../services/api/api-urls";

// Initialize the module (needs to be done only once)
const getErrorList = (data) => {
  const { message, errors } = data;
  let concatenatedMessages = null;
  console.log("errors=>>::", errors);

  if (typeof errors === "object" && Object.keys(errors)?.length) {
    concatenatedMessages = errors
      ? Object.values(message)?.flat()?.join(", ")
      : null;
  } else if (typeof message === "string") return message;
  concatenatedMessages = message
    ? Object.values(message)?.flat()?.join(", ")
    : null;

  console.log(concatenatedMessages);
  return concatenatedMessages;
};
export const horizontalAnimation = {
  headerShown: false,
  gestureDirection: "horizontal",
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};
export const returnImage = (url) => `${URLS.image_url}${url}`;
export const UTILS = {
  getFormData: (object) => {
    const formData = new FormData();
    Object.keys(object).forEach((key) => formData.append(key, object[key]));
    return formData;
  },
  returnError: (error) => {
    if (error?.response?.request) {
      let { _response } = error?.response?.request;
      console.log("FACTORY ERRORS :: ", JSON.parse(_response));
      const temp = JSON.parse(_response);
      const resp = getErrorList(temp);
      console.log("ASDFGFDSDF:::", resp);
      return resp;
    } else if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("=>>>>>>::::", error.response.data?.errors);
      console.log(error.response.status);
      // console.log(error.response.headers);
      console.log("error data ==>", error?.response.data);
      if (error.response.data?.errors) {
        return `${error?.response?.data?.errors}`;
      }
      return `${error?.response?.data?.message || error?.response?.status}`;
    } else if (error?.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error?.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
    console.log("type of code: ", error?.code);
    console.log("type of message: ", error?.message);
    if (typeof error === "string") {
      return error;
    }
    return error?.message || error?.code;
  },
  capitalizeFirst: (str) => str?.charAt(0)?.toUpperCase() + str?.slice(1),
  returnStringify: (data) => JSON.stringify(data),
  get_current_location: async (
    onSuccess = (position) => {},
    onError = (error) => {}
  ) => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
      } else {
        console.log("Geolocation not supported");
      }
    } catch (error) {
      throw new Error(error);
    }
  },

  // _returnAddress: async (latitude, longitude) => {
  //   const addressObject = await Geocoder.from(latitude || '', longitude || '')
  //   let returnAddress = {
  //     street_number: null,
  //     street_address: null,
  //     fulladdress: addressObject?.results[0]?.formatted_address,
  //     geoCode: {
  //       ...addressObject.results[0]?.geometry?.location,
  //     },
  //     place_id: addressObject.results[0]?.place_id,
  //     province: null,
  //     district: null,
  //     tehsil: null,
  //     city: null,
  //     area: null,
  //     country: null,
  //     country_short_name: null,
  //   };
  //   addressObject.results?.forEach((element) => {
  //     element?.address_components?.forEach((item) => {
  //       if (
  //         item.types.some((el) => el === 'administrative_area_level_1')
  //       ) {
  //         returnAddress = { ...returnAddress, province: item.long_name };
  //       } else if (
  //         item.types.some((el) => el === 'administrative_area_level_2')
  //       ) {
  //         returnAddress = { ...returnAddress, district: item.long_name };
  //       } else if (
  //         item.types.some((el) => el === 'administrative_area_level_3')
  //       ) {
  //         returnAddress = { ...returnAddress, tehsil: item.long_name };
  //       } else if (item.types.some((el) => el === 'locality')) {
  //         returnAddress = { ...returnAddress, city: item.long_name };
  //       } else if (item.types.some((el) => el === 'sublocality')) {
  //         returnAddress = { ...returnAddress, area: item.long_name };
  //       } else if (item.types.some((el) => el === 'street_address')) {
  //         returnAddress = {
  //           ...returnAddress,
  //           street_address: item.long_name || null,
  //         };
  //       } else if (item.types.some((el) => el === 'street_number')) {
  //         returnAddress = {
  //           ...returnAddress,
  //           street_number: item.long_name || null,
  //         };
  //       } else if (item.types.some((el) => el === 'country')) {
  //         returnAddress = {
  //           ...returnAddress,
  //           country: item.long_name || null,
  //           country_short_name: item?.short_name,
  //         };
  //       }
  //     });
  //   });
  //   return returnAddress;
  // },

  _removeEmptyKeys: (payload) => {
    const obj = payload;
    Object.keys(obj).forEach((key) => {
      if (obj[key] === undefined || obj[key] === null) {
        delete obj[key];
      }
    });
    return obj;
  },
};
