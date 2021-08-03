/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import * as Types from '@helpers/Types/IAccount';
import Network from './network';
import { IResult } from './network/abstract';

/**
* Sign In
* @param  {object} LoginDTO
* @url `/api/v1.0/Account/Personnel/Login`
* @ {
* @  `userName`: `string`,
* @  `password`: `string`,
* @ } */
export const signInAPIAsync = async (LoginDTO : Types.ILoginDTOType): Promise<IResult> => {

  const url = 'Account/Login';
  const request = await Network.postRequestAsync({ url, data: LoginDTO, isReturnWithResult: true });

  return request;

};

/**
* Sign Out
* @url `/api/v1.0/Account/Personnel/LogOut`
*/
export const signOutAPIAsync = async (): Promise<IResult> => {

  const url = 'Account/Login';
  const request = await Network.getRequestAsync({ url });
  return request;

};
