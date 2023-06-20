import axios from "axios";
import { URLS } from "./api-urls";
import { client } from "../axios-interceptor";
import { UTILS } from "../../utils";
export const postData = async (url, data) => {
  console.log("url: ", url);
  console.log("data: ", data);
  const response = await client.post(url, data);
  return response?.data;
};
export const deleteData = async (url, payload) => {
  console.log("url: ", url);
  const response = await client.delete(url, { data: payload });
  return response;
};
export const putData = async (url, data) => {
  console.log("url: ", url);
  const response = await client.put(url, data);
  return response;
};
export const postFormData = async (url, data) => {
  console.log("url==>", url);

  data = UTILS.getFormData(data);
  const token = "";
  return axios
    .post(URLS.base_url + url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};
export const postArrrayFormData = async (url, data) => {
  console.log("url==>", url);
  return axios
    .post(URLS.base_url + url, data, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};
export const getData = async (url) => {
  console.log("url: ", url);
  const response = await client.get(url);
  return response?.data;
};
