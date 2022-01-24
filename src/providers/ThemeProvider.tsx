import React from 'react';
import DarkTheme from '@src/assets/color/DarkTheme';
import LightTheme, { ITheme } from '@src/assets/color/LightTheme';
import { useAppSelector } from '@utils/redux/store';

export const ThemeContext = React.createContext<ITheme>(LightTheme);

type Props = {
  children: React.ReactNode
};


function ThemeProvider({ children }:Props) {

  const userColorScheme = useAppSelector((s) => s.AppReducer.userColorScheme);

  return (
    <ThemeContext.Provider value={userColorScheme === 'dark' ? DarkTheme : LightTheme}>
      {children}
    </ThemeContext.Provider>
  );

}

export default ThemeProvider;
