import { dispatcher } from '@helpers/redux';
import { removeStoreDataAsync } from '@src/helpers/storage';
import { storeEnum } from '@src/helpers/storage/Abstract';
import axiosInstance from '@src/utils/network/AxiosInstance';
import { toastActions } from '@src/providers/Toast';
import { ClearUser, UpdateAppState } from '../redux/appSlice';
import { ILoginDTO } from '../types/ILoginDTO';
import { ToastColorEnum } from '../../../helpers/Types/ToastColorEnum';

export async function signIn(loginDto: ILoginDTO) {

  console.log(loginDto);

  dispatcher(UpdateAppState({ isSignedIn: true }));

}
  
export function signOut() {

  clearUser();

}
  
export async function clearUser() {

  await removeStoreDataAsync(storeEnum.Token);

  axiosInstance.defaults.headers.common.Authorization = '';

  dispatcher(ClearUser());

}
  
export function showToast(msg: string, type?: ToastColorEnum, duration?: number) {

  toastActions.open({ msg, type, duration });
  
}
  
