import { removeStoreDataAsync } from '@src/helpers/storage';
import { storeEnum } from '@src/helpers/storage/Abstract';
import axiosInstance from '@src/utils/network/AxiosInstance';
import { ILoginDTO } from '../utils/Types';
import { appStateChange } from './actions';

export const signIn = async (loginDto : ILoginDTO) => {  
 
  console.log(loginDto);
  
  appStateChange({ isSignedIn: true });
  
};
  
export const signOut = async () => {
  
  await clearUser();
  
};
  
export const clearUser = async () => {
  
  await removeStoreDataAsync(storeEnum.Token);
  
  axiosInstance.defaults.headers.common.Authorization = '';
  
  appStateChange({ user: {}, isSignedIn: false });    
  
};
  
