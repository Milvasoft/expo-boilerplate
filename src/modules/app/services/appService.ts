import Store from '@store/index';
import { removeStoreDataAsync } from '@src/helpers/storage';
import { StoreEnum } from "@helpers/storage/storeEnum";
import { LoggedOut } from '../redux/appSlice';
import { ILoginDTO } from '../types/ILoginDTO';

export async function signIn(loginDto: ILoginDTO) {
  console.log(loginDto);
}

export async function clearUser() {
  await removeStoreDataAsync(StoreEnum.Token);

  Store.dispatch(LoggedOut());
}

export function signOut() {
  clearUser();
}
