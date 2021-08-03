/* eslint-disable @typescript-eslint/no-empty-function */
import * as $API from '@api/Login';
import { addStoreDataAsync, removeStoreDataAsync } from '@helpers/storage';
import AxiosInstance from '@api/network/AxiosInstance';
import * as Types from '@helpers/Types/IAccount';
import { storeEnum } from '@helpers/storage/Abstract';
import { globalStateChange } from './Global';

export const signInAsync = async (loginDto : Types.ILoginDTOType) : Promise<boolean> => {
  
  let isSignIn = false;

  await $API.signInAPIAsync(loginDto)
    .then(async (res : Types.ILoginResult) => {
      
      if (res.statusCode === 200) {

        const token = res?.result?.token;

        await addStoreDataAsync(storeEnum.Token, JSON.stringify(token));
        
        AxiosInstance.defaults.headers.common.Authorization = `Bearer ${token?.accessToken}`;

        // Api isteği get Info
      
        isSignIn = true;
      
      }
    
    }).catch(() => {});

  return isSignIn;

};

export const signOutAsync = async (): Promise<void> => {

  await $API.signOutAPIAsync()
    .then(() => {})
    .catch(() => {});

  await clearUserAsync();

};

export const clearUserAsync = async (): Promise<void> => {

  await removeStoreDataAsync(storeEnum.Token);
  AxiosInstance.defaults.headers.common.Authorization = null;
  globalStateChange({ property: 'user', value: {} });    
  globalStateChange({ property: 'isSignedIn', value: false });    

};
