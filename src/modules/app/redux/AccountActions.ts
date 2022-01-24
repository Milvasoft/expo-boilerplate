import { removeStoreDataAsync } from '@src/helpers/storage';
import { storeEnum } from '@src/helpers/storage/Abstract';
import axiosInstance from '@src/utils/network/AxiosInstance';
import { ILoginDTO } from '../types/ILoginDTO';
import { updateAppState } from './actions';

export async function signIn(loginDto: ILoginDTO) {

  console.log(loginDto);

  updateAppState({ isSignedIn: true });

}
  
export async function signOut() {

  await clearUser();

}
  
export async function clearUser() {

  await removeStoreDataAsync(storeEnum.Token);

  axiosInstance.defaults.headers.common.Authorization = '';

  updateAppState({ user: {}, isSignedIn: false });

}
  
