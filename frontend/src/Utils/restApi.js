export const API_URL = "http://localhost:8888/";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: API_URL
});
