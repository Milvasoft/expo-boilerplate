import ToastColor from '@assets/color/toast';
import { removeStoreDataAsync } from '@helpers/storage';
import { dispatcher } from '@helpers/redux';
import * as $AT from '@actions/ActionTypes';
import { storeEnum } from '@helpers/storage/Abstract';
import AxiosInstance from './AxiosInstance';
import { IApiResult } from './abstract';

const ExceptionMiddleware = async (res: IApiResult, isToast:boolean):Promise<void> => {

  if (res?.data) {
 
    const statusCode = res?.data?.statusCode;
    if ([204, 400, 401, 403, 600].indexOf(statusCode) >= 0 || !statusCode) {

      const msg = res?.data?.message;
          
      const variant = ToastColor.warning;

      // isToast && showToast({ msg, backgroundColor: variant });
  
      if (statusCode === 401) {

        // Account clearUser function

        AxiosInstance.defaults.headers.common.Authorization = null;

        await removeStoreDataAsync(storeEnum.Token);

        dispatcher({ type: $AT.GLOBAL_STATE_CHANGE, payload: { property: 'user', value: {} } });
        
        dispatcher({ type: $AT.GLOBAL_STATE_CHANGE, payload: { property: 'isSignedIn', value: false } });
      
      }
    
    }
  
  } else {

    // showToast({ msg: GetLang('generalErrorText'), backgroundColor: ToastColor.error });
  
  }

};
export default ExceptionMiddleware;
