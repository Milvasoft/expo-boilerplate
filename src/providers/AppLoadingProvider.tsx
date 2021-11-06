import React from 'react';
import { getStoreDataAsync, getStoreStringAsync } from '@helpers/storage';
import AxiosInstance from '@api/network/AxiosInstance';
import { appStateChange } from '@actions/App';
import AppLoading from 'expo-app-loading';
import { storeEnum } from '@helpers/storage/Abstract';

 type Props = {
   children: React.ReactNode
 };

function AppLoadingProvider({ children }: Props) {

  const [loading, setLoading] = React.useState(true);

  const _check = async () => {

    // Color Theme (USER)
    const mode = await getStoreStringAsync(storeEnum.ColorMode);

    appStateChange({ userColorScheme: mode });

    const token = await getStoreDataAsync(storeEnum.Token);

    if (token) {

      AxiosInstance.defaults.headers.common.Authorization = `Bearer ${token?.accessToken}`;

      // Requst Api Then (Change)
      appStateChange({ user: {}, isSignedIn: true });


    } else {

      AxiosInstance.defaults.headers.common.Authorization = '';

      appStateChange({ user: {}, isSignedIn: false });

    }

  };

  if (loading) {

    return (
      <AppLoading startAsync={_check} onFinish={() => setLoading(false)} onError={console.warn} />
    );

  }

  return (
    <>
      {children}
    </>
  );

}

export default AppLoadingProvider;
