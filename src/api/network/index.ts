/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/

import AxiosInstance from './AxiosInstance';
import { 
  MethodEnum, IResult, IApiParams, INetworkParams 
} from './Abstract';

import ExceptionMiddleware from './ExceptionMiddleware';

export default class Network {
  static network(params: IApiParams & INetworkParams): Promise<IResult> {

    const {
      url, method, headers, data, isToast = true, isReturnWithResult 
    } = params;
    
    return new Promise((resolve, reject) => {

      AxiosInstance({
        url, method, headers, data 
      })
        .then((res) => {
          
          ExceptionMiddleware(res, isToast);

          // Change it for yourself
          if (res?.data?.statusCode === 200) {         
              
                       
            if (isReturnWithResult) {

              return resolve(res?.data);
            
            }

            return resolve(res?.data?.result);            
          
          }   

          return reject(res?.data);
        
        })
        .catch((err) => reject(err));
    
    });
  
  }

  static getRequestAsync(params: IApiParams): Promise<IResult> {

    return this.network({ ...params, method: MethodEnum.GET });
  
  }

  static deleteRequestAsync(params: IApiParams): Promise<IResult> {

    return this.network({ ...params, method: MethodEnum.DELETE });
  
  }

  static postRequestAsync(params: IApiParams): Promise<IResult> {

    return this.network({ ...params, method: MethodEnum.POST });
  
  }
 
  static putRequestAsync(params: IApiParams): Promise<IResult> {

    return this.network({ ...params, method: MethodEnum.PUT });
  
  }
 
  static patchRequestAsync(params: IApiParams): Promise<IResult> {

    return this.network({ ...params, method: MethodEnum.PATCH });
  
  }
}
