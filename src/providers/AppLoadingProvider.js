/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import React from 'react';
import { getStoreStringAsync } from '@helpers/storage';
import AxiosInstance from '@api/network/AxiosInstance';
import { globalStateChange } from '@actions/Global';
import AppLoading from 'expo-app-loading';

/**
 * When the application `reloaded`, 
   it retrieves the token from `AsyncStorage` and
   adds it to the `AxiosInstance` object.
 */
export default function AppLoadingProvider({ children }) {

  const [loading, setLoading] = React.useState(true);
   
  const _check = async () => {

    // Color Theme (USER)
    const mode = await getStoreStringAsync('colorMode');

    globalStateChange({ property: 'userColorScheme', value: mode });

    const token = await getStoreStringAsync('token');
    
    if (token) {

      AxiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;      

      // Requst Api Then (Change)
      
      globalStateChange({ property: 'user', value: {} });

      globalStateChange({ key: 'isSignedIn', value: true });
        
    
    } else {

      AxiosInstance.defaults.headers.common.Authorization = '';

      globalStateChange({ property: 'user', value: {} });

      globalStateChange({ key: 'isSignedIn', value: false });
    
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
