/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
/* eslint-disable camelcase */
/* eslint-disable global-require */
import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';

type Props = {
  children: React.ReactNode
};

function FontProvider({ children }: Props) {

  const Thin = Montserrat_100Thin;
  const ExtraLight = Montserrat_200ExtraLight;
  const Light = Montserrat_300Light;
  const Regular = Montserrat_400Regular;
  const Medium = Montserrat_500Medium;
  const SemiBold = Montserrat_600SemiBold;
  const Bold = Montserrat_700Bold;
  const ExtraBold = Montserrat_800ExtraBold;
  const Black = Montserrat_900Black;

  const [fontsLoaded] = useFonts({
    Thin,
    ExtraLight,
    Light,
    Regular,
    Medium,
    SemiBold,
    Bold,
    ExtraBold,
    Black,
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

export default FontProvider;
