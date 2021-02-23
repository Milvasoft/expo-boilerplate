// import routerPush from '@actions/Router/Actions';
// import { toastActive } from '@actions/Current/Actions';

// Change it for yourself
// Multiple controls can be added
const ExceptionMiddleware = (res, axiosInstance) => {
  // Unauthorized Check
  if (res.statusCode === 401) {
    // axiosInstance.defaults.headers.common.Authorization = null;
    // localStorage.setItem('token', '');

    // routerPush('/');
  } else {
    // toast(resp.message, 'error');
  }
};
export default ExceptionMiddleware;
