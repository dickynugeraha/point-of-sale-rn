import axios from "axios";
import * as StorageScure from "expo-secure-store";
import { BASE_URL } from "./constant";
import { StackActions, useNavigation } from "@react-navigation/native";

const navigation = useNavigation();

export default API = async (
  url,
  options = {
    method: "GET",
    head: {},
    body: {},
    params: {},
  },
  type = "application/json"
) => {
  options.head = {
    "Content-Type": type,
  };
  const token = await StorageScure.getItemAsync("TOKEN");
  if (token !== null || token !== undefined) {
    options.head.Authorization = `Bearer ${token}`;
  }

  const request = {
    baseURL: BASE_URL,
    url,
    method: options.method,
    headers: options.head,
    timeout: 10000,
    responseType: "json",
    params: options.params ?? {},
  };
  if (
    request.method === "POST" ||
    request.method === "PUT" ||
    request.method === "PATCH" ||
    request.method === "DELETE"
  )
    request.data = options.body;

  try {
    const response = await axios(request);
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log("cek error ", error);
    return buildErrorResponse(error?.response);
  }

  const buildErrorResponse = (response) => {
    if (response) {
      if (response.status === 401) {
        console.log("Token expired, unauthorization, please login first");
        return navigation.dispatch(StackActions.replace("Login"));
      }
      if (response.status === 200 || response.status === 201) {
        return response;
      }
      return response;
    }
    return response;
  };
};
