/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import * as React from 'react';
import { Provider, DefaultTheme } from 'react-native-paper';
import Color from '@assets/color';

const theme = {
  ...DefaultTheme,
  dark: false,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Color().primary,  
    accent: '#ffffff',
    background: '#ffffff',
    surface: '#ffffff',
    text: '#000000',
    placeholder: Color().primary

  },
};
export default function PaperProvider({ children }) {

  return (
    <Provider theme={theme}>
      {children}
    </Provider>
  );

}

