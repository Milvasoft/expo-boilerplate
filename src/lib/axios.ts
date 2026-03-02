import axios from "axios";
import { store } from "@/store";
import { logout } from "@/store/appSlice";
import { showToast, ToastType } from "./toast";

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? "https://api.example.com";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = store.getState().app.authToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      showToast("Session expired", ToastType.Error);
      store.dispatch(logout());
    } else {
      showToast(
        error.response?.data?.message ?? "An error occurred",
        ToastType.Error
      );
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
