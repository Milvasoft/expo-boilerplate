import React from 'react';
import { getStoreDataAsync, getStoreStringAsync } from '@helpers/storage';
import AxiosInstance from '@api/network/AxiosInstance';
import { globalStateChange } from '@actions/Global';
import AppLoading from 'expo-app-loading';
import { storeEnum } from '@helpers/storage/Abstract';

 type Props = {
   children: React.ReactNode
 };

const AppLoadingProvider : React.FC<Props> = ({ children }) => {

  const [loading, setLoading] = React.useState(true);
   
  const _check = async () => {

    // Color Theme (USER)
    const mode = await getStoreStringAsync(storeEnum.ColorMode);

    globalStateChange({ property: 'userColorScheme', value: mode });

    const token = await getStoreDataAsync(storeEnum.Token);

    if (token) {

      AxiosInstance.defaults.headers.common.Authorization = `Bearer ${token?.accessToken}`;      

      // Requst Api Then (Change)
      
      globalStateChange({ property: 'user', value: {} });

      globalStateChange({ property: 'isSignedIn', value: true });
        
    
    } else {

      AxiosInstance.defaults.headers.common.Authorization = '';

      globalStateChange({ property: 'user', value: {} });

      globalStateChange({ property: 'isSignedIn', value: false });
    
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

};

export default AppLoadingProvider;
