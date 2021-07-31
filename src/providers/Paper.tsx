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
  
 type Props = {
   children: React.ReactNode
 };

const PaperProvider : React.FC<Props> = ({ children }) => (
  <Provider theme={theme}>
    {children}
  </Provider>
);


export default PaperProvider;
