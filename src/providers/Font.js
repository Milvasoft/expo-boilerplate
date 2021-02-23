/* eslint-disable global-require */
import React from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function FontProvider({ children }) {
  const [fontsLoaded] = Font.useFonts({
    'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
  });  
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      {children}
    </>
  );
}
