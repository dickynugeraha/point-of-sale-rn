import axios from "axios";
import { BASE_URL } from "./constant";
import * as SecureStorage from "expo-secure-store";
// import API from "./config";

const getToken = async () => {
  return await SecureStorage.getItemAsync("TOKEN");
};

export default {
  // Authentication
  onLoginKaryawan: async (body) => {},
  register: async (body) => {
    return axios({
      method: "post",
      url: `${BASE_URL}/register`,
      data: body,
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  },
  onLoginOwner: async (body) => {
    return axios({
      method: "post",
      url: `${BASE_URL}/login`,
      data: body,
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  },
  // Cabang
  onCreateCabang: async (body) => {
    return axios({
      method: "post",
      url: `${BASE_URL}/outlets`,
      data: body,
    })
      .then((response) => response.data)
      .catch((error) => error.response);
  },
  // Products
  getAllProducts: async (token) => {
    return axios({
      method: "get",
      url: `${BASE_URL}/products`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.data)
      .catch((error) => error.response);
  },
  // Customer
  getCustomers: async () => {
    return axios({
      method: "get",
      url: `${BASE_URL}/customers`,
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
    })
      .then((response) => response.data)
      .catch((error) => error.response);
  },
  addCustomer: async (body, token) => {
    return axios({
      method: "post",
      url: `${BASE_URL}/customers`,
      data: body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.data)
      .catch((error) => error.response);
  },
};
