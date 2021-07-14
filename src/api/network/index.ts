/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */

import AxiosInstance from './AxiosInstance';
import { 
  Method, Result, ApiParams, NetworkParams 
} from './abstract';
import ExceptionMiddleware from './ExceptionMiddleware';

// ApiParams Mapping to NetworkParams
export function networkParamsMap(param: ApiParams, method: Method): NetworkParams {
  
  const networkObject : NetworkParams = {};  

  Object.assign(networkObject, param);
  
  networkObject.method = method;

  return networkObject;

}

export default class Network {
  static network(params: NetworkParams): Promise<Result> {

    const {
      url, method, headers, data, isToast, isReturnWithResult 
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

  static getRequestAsync(params: ApiParams): Promise<Result> {

    return this.network(networkParamsMap(params, 'GET'));
  
  }

  static deleteRequestAsync(params: ApiParams): Promise<Result> {

    return this.network(networkParamsMap(params, 'DELETE'));
  
  }

  static postRequestAsync(params: ApiParams): Promise<Result> {

    return this.network(networkParamsMap(params, 'POST'));
  
  }
 
  static putRequestAsync(params: ApiParams): Promise<Result> {

    return this.network(networkParamsMap(params, 'PUT'));
  
  }
 
  static patchRequestAsync(params: ApiParams): Promise<Result> {

    return this.network(networkParamsMap(params, 'PATCH'));
  
  }
}
