import axios from "axios";
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
export const returnImage = (url) => `${url}`;
export const UTILS = {
  getFormData: (object) => {
    const formData = new FormData();
    Object.keys(object).forEach((key) => formData.append(key, object[key]));
    return formData;
  },
  getDistance: async (lat1, lat2, lon1, lon2) => {
    console.log("lat1, lat2, lon1, lon2", lat1, lat2, lon1, lon2);
    try {
      var km = 1;
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${lat1},${lon1}&destinations=${lat2},${lon2}&key=AIzaSyDH7Afsb0W4BTLHKELRLf_hg1UPiTvwc7k`
      );
      if (response?.data?.status === "OK") {
        console.log("Distance is ");
        km = response?.data?.rows[0]?.elements[0]?.distance?.value / 1000;
      }
      return km;
    } catch (error) {
      throw new Error(UTILS.returnError(error));
    }
  },
  returnError: (error) => {
    console.log("error.response:::", error.response);
    if (error.message) return `${error.message}`;
    if (error.response) {
      if (error.response?.data?.Message || error.response?.data?.message) {
        return `${
          error.response?.data?.Message || error.response?.data?.message
        }`;
      }
      if (error.response.data && error.response.data.errors) {
        const errorMessages = Object.values(error.response.data.errors).flatMap(
          (errors) => errors
        );
        const concatenatedErrors = errorMessages.join(", ");
        console.log(concatenatedErrors);
        return concatenatedErrors;
      }
      console.log(error.response.status);
      console.log(error.response.headers);
      if (error?.message) return error?.message;
      return `${error.response.status}`;
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
      return "Something went wrong!";
    } else {
      // Something else happened while setting up the request
      console.log("Error", error.message);
      console.log(error.config);
      return "Something went wrong!";
    }
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
        throw new Error("Geolocation not supported");
      }
    } catch (error) {
      throw new Error(error);
    }
  },

  _returnAddress: async (latitude, longitude) => {
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDH7Afsb0W4BTLHKELRLf_hg1UPiTvwc7k`
    );
    const addressObject = res?.data;
    let returnAddress = {
      street_number: null,
      street_address: null,
      fulladdress: addressObject?.results[0]?.formatted_address,
      geoCode: {
        ...addressObject.results[0]?.geometry?.location,
      },
      place_id: addressObject.results[0]?.place_id,
      province: null,
      district: null,
      tehsil: null,
      city: null,
      area: null,
      country: null,
      country_short_name: null,
    };
    addressObject.results?.forEach((element) => {
      element?.address_components?.forEach((item) => {
        if (item.types.some((el) => el === "administrative_area_level_1")) {
          returnAddress = { ...returnAddress, province: item.long_name };
        } else if (
          item.types.some((el) => el === "administrative_area_level_2")
        ) {
          returnAddress = { ...returnAddress, district: item.long_name };
        } else if (
          item.types.some((el) => el === "administrative_area_level_3")
        ) {
          returnAddress = { ...returnAddress, tehsil: item.long_name };
        } else if (item.types.some((el) => el === "locality")) {
          returnAddress = { ...returnAddress, city: item.long_name };
        } else if (item.types.some((el) => el === "sublocality")) {
          returnAddress = { ...returnAddress, area: item.long_name };
        } else if (item.types.some((el) => el === "street_address")) {
          returnAddress = {
            ...returnAddress,
            street_address: item.long_name || null,
          };
        } else if (item.types.some((el) => el === "street_number")) {
          returnAddress = {
            ...returnAddress,
            street_number: item.long_name || null,
          };
        } else if (item.types.some((el) => el === "country")) {
          returnAddress = {
            ...returnAddress,
            country: item.long_name || null,
            country_short_name: item?.short_name,
          };
        }
      });
    });
    return returnAddress;
  },

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
