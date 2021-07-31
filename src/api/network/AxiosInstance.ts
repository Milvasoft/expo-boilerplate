/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */

import axios from 'axios';

// Using the same example everywhere 
const AxiosInstance = axios.create({
  baseURL: ''
});
  
// To detect errors in api
// AxiosInstance.interceptors.response.use(async (response) => {

//   ExceptionMiddleware(response, AxiosInstance);
//   return response;

// }, (error) => {

//   ExceptionMiddleware(error, AxiosInstance);
//   return Promise.reject(error);

// });
  
export default AxiosInstance;
