/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */

import Network from './network';

/**
* Sign In
* @param  {object} LoginDTO
* @url `Account/Login`
* @ {
* @  `userName`: `string`,
* @  `password`: `string`,
* @ } */
export const signInAPIAsync = async (LoginDTO) => {

  const url = 'Account/Login';
  const request = await Network.postRequestAsync({ url, data: LoginDTO });
  return request;

};

/**
* Sign Out
* @url `Account/Login`
*/
export const signOutAPIAsync = async () => {

  const url = 'Account/Login';
  const request = await Network.getRequestAsync({ url });
  return request;

};
