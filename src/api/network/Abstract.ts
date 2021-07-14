/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */

export type Method =
| 'get' | 'GET'
| 'delete' | 'DELETE'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'patch' | 'PATCH'

export interface Result{
success? : boolean;
message? : string;
statusCode? : number;
result? : unknown;
errorCodes? : Array<number>;  
}

export interface ApiParams {
url?: string;
headers?: unknown,
queryString?: string,
data?: unknown,
isToast?:boolean,
isReturnWithResult?:boolean,
}
export interface NetworkParams extends ApiParams {
method?: Method,
}
