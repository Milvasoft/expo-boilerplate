// import { showToast } from '@actions/app';
// import { ToastColorEnum } from '@globalTypes/IGlobal';
import NetInfo from '@react-native-community/netinfo';
// import GetLang from '@helpers/localization';
import { ToastColorEnum } from '@src/helpers/Types/ToastColorEnum';
import { showToast } from '@src/modules/app/services/appService';
import translate from '@src/helpers/localization';
import AxiosInstance from './AxiosInstance';
import { 
  MethodEnum, 
  IApiParams, 
  INetworkParams,
  Result as ApiResult 
} from './Abstract';

import ExceptionMiddleware from './ExceptionMiddleware';

export default class Network {

  static newRequest<_Result, Response>(params: IApiParams & INetworkParams) {

    const {
      url, 
      method,
      headers,
      data,
      successMessaging = true,
      errorMessaging = true 
    } = params;
    
    process.env.NODE_ENV !== 'production' && console.log({
      url, data, method, headers
    });

    return new Promise<ApiResult<_Result, Response>>((resolve, reject) => {

      AxiosInstance({
        url, 
        method,
        headers,
        data 
      })
        .then(async (res : any) => {
          
          const errorCallBack = await ExceptionMiddleware({ ...res, errorMessaging });

          if (errorMessaging && res?.data?.statusCode !== 200) errorCallBack?.();

          if (res?.data?.statusCode === 200) {
                                   
            if (successMessaging) showToast(res.data.message, ToastColorEnum.Succes);

            return resolve(res?.data);
                      
          }   

          return reject(res?.data);
        
        })
        .catch(async (err) => {

          NetInfo.fetch().then((state) => {

            if (!state.isConnected)showToast(translate('noInternet'), ToastColorEnum.Info);
    
          });
         
          if (!err.response?.status) showToast('', ToastColorEnum.Error);
          
          else {

            const errorCallBack = await ExceptionMiddleware({ ...err.response, errorMessaging });

            if (errorMessaging) errorCallBack?.();

          }

          return reject(err);
        
        });
    
    });
  
  }

  static get<_Result = any, Response = ApiResult<_Result>>({ version = 'v1.0', ...requestParams }: IApiParams) {

    return this.newRequest<_Result, Response>({
      ...requestParams,
      url: `${version}${requestParams.url}`,
      method: MethodEnum.GET,
    });

  }

  static delete<_Result = any, Response = ApiResult<_Result>>({ version = 'v1.0', ...requestParams }: IApiParams) {

    return this.newRequest<_Result, Response>({
      ...requestParams,
      url: `${version}${requestParams.url}`,
      method: MethodEnum.DELETE,
    });

  }

  static patch<_Result = any, Response = ApiResult<_Result>>({ version = 'v1.0', ...requestParams }: IApiParams) {

    return this.newRequest<_Result, Response>({
      ...requestParams,
      url: `${version}${requestParams.url}`,
      method: MethodEnum.PATCH,
    });

  }

  static put<_Result = any, Response = ApiResult<_Result>>({ version = 'v1.0', ...requestParams }: IApiParams) {

    return this.newRequest<_Result, Response>({
      ...requestParams,
      url: `${version}${requestParams.url}`,
      method: MethodEnum.PUT,
    });

  }

  static post<_Result = any, Response = ApiResult<_Result>>({ version = 'v1.0', ...requestParams }: IApiParams) {

    return this.newRequest<_Result, Response>({
      ...requestParams,
      url: `${version}${requestParams.url}`,
      method: MethodEnum.POST,
    });

  }
}
