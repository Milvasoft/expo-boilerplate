/* eslint-disable max-len */
/* eslint-disable no-return-await */
import { LoginApi } from './info';
import Network from './network';


export const signIn = async (LoginDTO) => await Network.postRequest({ url: LoginApi.signIn, data: LoginDTO });


export const signOut = async () => Network.getRequest({ url: LoginApi.signOut });
