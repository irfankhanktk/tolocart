import axios from "axios";
import { URLS } from "../api/api-urls";
const CancelToken = axios.CancelToken;
export const source = CancelToken.source();
export const client = axios.create({
  baseURL: URLS.base_url,
});
const controller = new AbortController();
//Axios Interceptors
client.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem("@token");
    config.headers = {
      Accept: "*/*",
      // "Cache-Control": "no-cache",
      // "Content-Type": "application/json",
    };
    // config.signal = newAbortSignal(15000),
    config.params = config.params || {};
    config.cancelToken = source.token || {};
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    console.log("I am here");
    Promise.reject(error);
  }
);

const interceptor = client.interceptors.response.use(
  (response) => {
    console.log("RESPONSE INTERCPTOR : ", response?.status);
    return response;
  },
  async function (error) {
    console.log("INTERCEPTOR ERROR RESPONSE : ", error);
    console.log("INTERCEPTOR ERROR RESPONSE CONFIG: ", error?.config);
    // const token = await UTILS.setItem(STORAGEKEYS.token);
    const originalRequest = error.config;
    if (error?.response?.status === undefined && error?.config === undefined) {
      return Promise.reject("Hi Dude");
    } else if (error?.response?.status === 401) {
      originalRequest._retry = true;
      // Remove the interceptor to prevent recursive calls
      client.interceptors.response.eject(interceptor);
      localStorage.clear();
      // Perform the retry logic
      return client.get(error.config.url);
      //   navigate('Login');
      //await DIVIY_API.refreshToken(JSON.parse(token)?.refresh_token);
    } else {
      // controller.abort();
    }
    return Promise.reject(error);
  }
);
