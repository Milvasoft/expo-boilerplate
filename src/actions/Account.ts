import { removeStoreDataAsync } from '@helpers/storage';
import AxiosInstance from '@api/network/AxiosInstance';
import * as Types from '@helpers/Types/IAccount';
import { storeEnum } from '@helpers/storage/Abstract';
import { appStateChange } from './App';

export const signInAsync = async (loginDto : Types.ILoginDTOType) => {  
 
  appStateChange({ isSignedIn: true });

};

export const signOutAsync = async () => {

  await clearUserAsync();

};

export const clearUserAsync = async () => {

  await removeStoreDataAsync(storeEnum.Token);

  AxiosInstance.defaults.headers.common.Authorization = '';

  appStateChange({ user: {}, isSignedIn: false });    

};
