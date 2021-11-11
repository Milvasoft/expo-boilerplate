import React from 'react';
import { getStoreDataAsync } from '@helpers/storage';
import { updateAppState } from 'src/modules/app/redux/actions';
import AppLoading from 'expo-app-loading';
import { storeEnum } from '@helpers/storage/Abstract';
import axiosInstance from '@utils/network/AxiosInstance';

 type Props = {
   children: React.ReactNode
 };

function AppLoadingProvider({ children }: Props) {

  const [loading, setLoading] = React.useState(true);

  const _check = async () => {

    const token = await getStoreDataAsync(storeEnum.Token);

    if (token) {

      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token?.accessToken}`;

      updateAppState({ isSignedIn: true });

      // TODO Asenkron process

    } else {

      axiosInstance.defaults.headers.common.Authorization = '';

      updateAppState({ isSignedIn: false });
    
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
