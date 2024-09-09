import { ToastColorEnum } from "@components/ToastMessage/ToastColorEnum";
import { showToast } from "@helpers/toast/showToast";
import { LoggedOut } from "@modules/app/redux/appSlice";
import Store from "@store/index";
import axios from "axios";

const options = {
  baseURL: "baseURL",
  headers: {
    "Content-Type": "application/json",
    Authorization: Store.getState().AppReducer.authToken,
  },
};

const axiosInstance = axios.create(options);

axiosInstance.interceptors.request.use((config) => {
  console.log(config.url, " - request -", config.data);

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response?.data?.messages && response?.config?.withoutToast !== true) {
      response.data.messages?.forEach((message: any) => {
        showToast(message.message, message.type);
      });
    }
    return response;
  },
  (error) => {
    console.log(
      error.response.config.url,
      "- error response -",
      error.response?.data
    );

    if (error.response?.status === 401) {
      showToast("Unauthorized", ToastColorEnum.Error);

      Store.dispatch(LoggedOut());
    } else if (error.response?.data) {
      error.response?.data.Messages?.forEach((message: any) => {
        showToast(message.message, message.type);
      });
    } else {
      showToast("An error occurred ", ToastColorEnum.Error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
