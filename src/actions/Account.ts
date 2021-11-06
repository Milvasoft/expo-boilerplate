/* eslint-disable @typescript-eslint/no-empty-function */
import * as $API from '@api/Login';
import { addStoreDataAsync, removeStoreDataAsync } from '@helpers/storage';
import AxiosInstance from '@api/network/AxiosInstance';
import * as Types from '@helpers/Types/IAccount';
import { storeEnum } from '@helpers/storage/Abstract';
import { appStateChange } from './App';

export const signInAsync = async (loginDto : Types.ILoginDTOType) => {
  
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

export const signOutAsync = async () => {

  await $API.signOutAPIAsync()
    .then(() => {})
    .catch(() => {});

  await clearUserAsync();

};

export const clearUserAsync = async () => {

  await removeStoreDataAsync(storeEnum.Token);

  AxiosInstance.defaults.headers.common.Authorization = null;

  appStateChange({ user: {}, isSignedIn: false });    

};
