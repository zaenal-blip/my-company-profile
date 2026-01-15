import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://younghands-us.backendless.app",
});