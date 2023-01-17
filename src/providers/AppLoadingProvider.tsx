/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import AppLoading from 'expo-app-loading';

 type Props = {
   children: React.ReactNode
 };

function AppLoadingProvider({ children }: Props) {

  const [loading, setLoading] = React.useState(true);

  const _check = async () => {
   
    // TODO Asenkron process

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

export default AppLoadingProvider;
