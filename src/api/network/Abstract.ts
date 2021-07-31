/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */

export type Method =
| 'get' | 'GET'
| 'delete' | 'DELETE'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'patch' | 'PATCH'

export enum MethodEnum {
  GET = 'GET',
  DELETE= 'DELETE',
  POST= 'POST',
  PUT= 'PUT',
  PATCH= 'PATCH',
}

export interface IResult{
  success? : boolean;
  message? : string;
  statusCode? : number;
  result? : unknown;
  errorCodes? : Array<number>;  
}
export interface IApiResult {
  data:{
    data: unknown,
    statusCode: number,
    message: string
  }
}

export interface IApiParams {
  url?: string;
  headers?: unknown,
  queryString?: string,
  data?: unknown,
  isToast?:boolean,
  isReturnWithResult?:boolean,
}
export interface INetworkParams extends IApiParams {
  method?: Method,
}
