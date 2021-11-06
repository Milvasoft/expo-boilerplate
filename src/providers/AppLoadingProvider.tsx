import React from 'react';
import { getStoreDataAsync, getStoreStringAsync } from '@helpers/storage';
import AxiosInstance from '@api/network/AxiosInstance';
import { globalStateChange } from '@actions/Global';
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

    globalStateChange({ userColorScheme: mode });

    const token = await getStoreDataAsync(storeEnum.Token);

    if (token) {

      AxiosInstance.defaults.headers.common.Authorization = `Bearer ${token?.accessToken}`;

      // Requst Api Then (Change)
      globalStateChange({ user: {}, isSignedIn: true });


    } else {

      AxiosInstance.defaults.headers.common.Authorization = '';

      globalStateChange({ user: {}, isSignedIn: false });

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
