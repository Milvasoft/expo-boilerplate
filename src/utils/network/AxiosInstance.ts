import axios from 'axios';

const options = {
  baseURL: '',
};

const axiosInstance = axios.create(options);

// axiosInstance.interceptors.request.use((config) => {

//   return config;

// });


export default axiosInstance;

