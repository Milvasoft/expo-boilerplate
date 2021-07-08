import * as $API from '@api/Login';
import { addStoreDataAsync } from '@helpers/storage';
import AxiosInstance from '@api/network/AxiosInstance';

export const signInAsync = async (loginDto) => {

  await $API.signInAPIAsync(loginDto)
    .then(async (res) => {

      if (res.statusCode === 200) {

        const token = res?.result?.token;

        await addStoreDataAsync('token', token)
          .then(() => {

            AxiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
          
          });
      
      }
     
      return res;
    
    }).catch((err) => console.log(err));

};

export const signOutAsync = async () => {

  await $API.signOutAPIAsync()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

};
