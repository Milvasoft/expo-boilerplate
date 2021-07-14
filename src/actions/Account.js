/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
/* eslint-disable @typescript-eslint/no-empty-function */
import * as $API from '@api/Login';
import { addStoreDataAsync, removeStoreDataAsync } from '@helpers/storage';
import AxiosInstance from '@api/network/AxiosInstance';
import { globalStateChange } from './Global';

export const signInAsync = async (loginDto) => {
  
  let isSignIn = false;

  await $API.signInAPIAsync(loginDto)
    .then(async (res) => {

      if (res.statusCode === 200) {

        const token = res?.token;

        await addStoreDataAsync('token', token);
        
        AxiosInstance.defaults.headers.common.Authorization = `Bearer ${token?.accessToken}`;
      
        isSignIn = true;
      
      }
    
    }).catch(() => {});

  return isSignIn;

};

export const signOutAsync = async () => {

  await $API.signOutAPIAsync()
    .then(() => {})
    .catch(() => {});

};


export const clearUser = async () => {

  await removeStoreDataAsync('token');
  AxiosInstance.defaults.headers.common.Authorization = null;
  globalStateChange({ property: 'user', value: {} });    
  globalStateChange({ property: 'isSignedIn', value: false });    

};
