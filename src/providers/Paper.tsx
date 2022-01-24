import { useTheme } from '@src/hooks';
import * as React from 'react';
import { Provider, DefaultTheme } from 'react-native-paper';

  
 type Props = {
   children: React.ReactNode
 };

function PaperProvider({ children } : Props) {

  const customTheme = useTheme();

  const theme = {
    ...DefaultTheme,
    dark: false,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: customTheme.primary,  
      accent: '#ffffff',
      background: '#ffffff',
      surface: '#ffffff',
      text: '#000000',
      placeholder: customTheme.primary
  
    },
  };

  return (
    <Provider theme={theme}>
      {children}
    </Provider>
  );

}


export default PaperProvider;
