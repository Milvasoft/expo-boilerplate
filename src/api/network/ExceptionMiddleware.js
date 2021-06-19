import { showToast } from '@helpers/toast';
import ToastColor from '@assets/color/toast';
import GetLang from '@helpers/localization';
import AxiosInstance from './AxiosInstance';

// Change it for yourself
// Multiple controls can be added
const ExceptionMiddleware = (res, isToast) => {

  if (res?.data) {
 
    const statusCode = res?.data?.statusCode;
    if ([204, 400, 401, 403, 600].indexOf(statusCode) >= 0 || !statusCode) {

      const msg = res?.data?.message;
          
      const variant = ToastColor.warning;

      isToast && showToast({ msg, backgroundColor: variant });
  
      if (statusCode === 401) {

        AxiosInstance.defaults.headers.common.Authorization = null;
        // Other Process
      
      }
    
    }
  
  } else {

    showToast({ msg: GetLang('generalErrorText'), backgroundColor: ToastColor.error });
  
  }

};
export default ExceptionMiddleware;
