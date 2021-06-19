import React from 'react';
import { getStoreString } from '@helpers/storage';
import AxiosInstance from '@api/network/AxiosInstance';
import { globalStateChange } from '@actions/Global';
import AppLoading from 'expo-app-loading';

/**
 * When the application `reloaded`, 
   it retrieves the token from `AsyncStorage` and
   adds it to the `AxiosInstance` object.
 */
export default function AuthProvider({ children }) {

  const [loading, setLoading] = React.useState(true);
   
  const _check = async () => {

    const token = await getStoreString('token');
    if (token) {

      AxiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;

      globalStateChange({ key: 'isSignedIn', value: true });
        
    
    } else {

      // Process
    
    }
  
  };

  if (loading) {

    return (
      <AppLoading
        startAsync={_check}
        onFinish={() => setLoading(false)}
        onError={console.warn}
      />
    ); 
  
  }

  return (
    <>
      {children}
    </>
  );

}
