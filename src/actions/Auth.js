import * as $API from '@api/Login';
import { storeData } from '@helpers/storage';
import AxiosInstance from '@api/network/AxiosInstance';

export const signIn = async (loginDto) => {
  await $API.signInAPI(loginDto)
    .then(async (res) => {
      if (res.statusCode === 200) {
        const token = res?.result?.token;
        await storeData('token', token)
          .then(() => {
            AxiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
          });
      }
     
      return res;
    }).catch((err) => console.log(err));
};

export const signOut = async () => {
  await $API.signOutAPI()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
