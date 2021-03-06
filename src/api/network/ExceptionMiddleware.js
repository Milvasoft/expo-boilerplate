/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */

import { showToast } from '@helpers/toast';
import ToastColor from '@assets/color/toast';
import GetLang from '@helpers/localization';
import { removeStoreDataAsync } from '@helpers/storage';
import { dispatcher } from '@helpers/redux';
import * as $AT from '@actions/ActionTypes';
import AxiosInstance from './AxiosInstance';

// Change it for yourself
// Multiple controls can be added
const ExceptionMiddleware = async (res, isToast) => {

  if (res?.data) {
 
    const statusCode = res?.data?.statusCode;
    if ([204, 400, 401, 403, 600].indexOf(statusCode) >= 0 || !statusCode) {

      const msg = res?.data?.message;
          
      const variant = ToastColor.warning;

      isToast && showToast({ msg, backgroundColor: variant });
  
      if (statusCode === 401) {

        // Account clearUser function

        AxiosInstance.defaults.headers.common.Authorization = null;
        await removeStoreDataAsync('token');
        dispatcher({ type: $AT.GLOBAL_STATE_CHANGE, payload: { property: 'user', value: {} } });
        dispatcher({ type: $AT.GLOBAL_STATE_CHANGE, payload: { property: 'isSignedIn', value: false } });
      
      }
    
    }
  
  } else {

    showToast({ msg: GetLang('generalErrorText'), backgroundColor: ToastColor.error });
  
  }

};
export default ExceptionMiddleware;
