/* eslint-disable consistent-return */
import { dispatcher } from '@helpers/redux';
import * as $AT from '@utils/redux/actionTypes';
import { showToast } from '@src/modules/app/services/appService';
import { ToastColorEnum } from '@src/helpers/Types/ToastColorEnum';
// import { removeStoreDataAsync } from '@src/helpers/storage';
import AxiosInstance from './AxiosInstance';
import { IApiResult } from './Abstract';

const ExceptionMiddleware = async ({ data, errorMessaging }: IApiResult) => {

  // network logging
  process.env.NODE_ENV === 'development' && console.log('api', data);
    
  const statusCode = data?.statusCode || 400;

  if ([400, 401, 403, 500].includes(statusCode)) {

    errorMessaging && showToast(data.message, ToastColorEnum.Warning);

    if (statusCode === 401) {
   
      AxiosInstance.defaults.headers.common.Authorization = '';

      // await removeStoreDataAsync();

      dispatcher({
        type: $AT.APP_STATE_CHANGE,
        payload: { isSignedIn: false, } 
      });      

    }

  } else if ([600].indexOf(statusCode) >= 0 || !statusCode) {

    return () => new Promise((resolve) => resolve(showToast(data.message, ToastColorEnum.Error)));

  }

};
export default ExceptionMiddleware;
