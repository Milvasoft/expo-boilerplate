import React from 'react';
import { getStoreDataAsync, getStoreStringAsync } from '@helpers/storage';
import { appStateChange } from 'src/modules/app/redux/actions';
import AppLoading from 'expo-app-loading';
import { storeEnum } from '@helpers/storage/Abstract';
import axiosInstance from '@utils/network/AxiosInstance';

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

      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token?.accessToken}`;

      // Requst Api Then (Change)
      appStateChange({ user: {}, isSignedIn: true });

    } else {

      axiosInstance.defaults.headers.common.Authorization = '';

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
