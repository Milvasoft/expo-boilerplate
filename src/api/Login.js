import Network from './network';

/**
* Oturum açma
* @param  {object} LoginDTO
* @url `Account/Login`
* @ {
* @  `userName`: `string`,
* @  `password`: `string`,
* @ } */
export const signInAPI = async (LoginDTO) => {
    const url = 'Account/Login';
    return await Network.postRequest({ url, data: LoginDTO });
};

/**
* Oturum Kapatma
* @url `Account/Login`
*/
export const signOutAPI = async () => {
      const url = 'Account/Login';
  return await Network.getRequest({ url });
}
