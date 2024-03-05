import Store from '@store/index';
import { removeStoreDataAsync } from '@src/helpers/storage';
import { StoreEnum } from "@helpers/storage/storeEnum";
import { LoggedOut } from '../redux/appSlice';
import { ILoginDTO } from '../types/ILoginDTO';

/**
 * Signs in the user.
 * @param loginDto - The login data transfer object.
 */
export async function signIn(loginDto: ILoginDTO) {
  console.log(loginDto);
}

/**
 * Clears the user data by removing the token from the store and dispatching a LoggedOut action.
 * @returns {Promise<void>} A promise that resolves once the user data is cleared.
 */
export async function clearUser() {
  await removeStoreDataAsync(StoreEnum.Token);

  Store.dispatch(LoggedOut());
}

/**
 * Signs out the user by clearing user data.
 */
export function signOut() {
  clearUser();
}
