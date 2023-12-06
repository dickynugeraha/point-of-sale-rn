import axios from "axios";
import { BASE_URL } from "./constant";
import * as SecureStorage from "expo-secure-store";
// import API from "./config";

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
};
