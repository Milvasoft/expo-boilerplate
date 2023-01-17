/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from 'axios';
import { getReduxStore } from '../redux/store';

const options = {
  baseURL: '',
};

const axiosInstance = axios.create(options);

axiosInstance.interceptors.request.use((config) => {

  const token = getReduxStore().AppReducer?.token || '';

  // @ts-ignore
  config?.headers?.set('Authorization', `Bearer ${token}`);

  return config;

});


export default axiosInstance;

