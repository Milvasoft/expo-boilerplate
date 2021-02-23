import React from 'react';
import { getStoreData } from '@helpers/storage';
import AxiosInstance from '@api/network/AxiosInstance';

/**
 * When the application `reloaded`, 
   it retrieves the token from `AsyncStorage` and
   adds it to the `AxiosInstance` object.
 */
export default function AuthProvider({ children }) {
  React.useEffect(() => {
    const tokenCheck = async () => {
      const token = await getStoreData('token');
      if (token) {
        AxiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
      }
    };
    tokenCheck();
  }, []);
  return (
    <>
      {children}
    </>
  );
}
