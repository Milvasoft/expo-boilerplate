import Network from './network';

/**
* Oturum açma
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
* Oturum Kapatma
* @url `Account/Login`
*/
export const signOutAPIAsync = async () => {

  const url = 'Account/Login';
  const request = await Network.getRequestAsync({ url });
  return request;

};
