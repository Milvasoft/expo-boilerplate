import { getAppState } from '@reducers/Store';
import { Appearance } from 'react-native';

const lightTheme = {
  primary: 'black',
  secondary: 'yellow',
};

const darkTheme = {
  primary: 'red',
  secondary: 'green',
};

const colorScheme = Appearance.getColorScheme();

const Color = (): IMyTheme => {
 
  const userColorScheme = getAppState()?.AppReducer?.userColorScheme;

  if (userColorScheme) {
    
    if (userColorScheme === 'dark') return darkTheme;    
    return lightTheme;
    
  }

  if (colorScheme === 'dark') return darkTheme;

  return lightTheme;
  

};


interface IMyTheme {
  primary: string,
  secondary: string,
}

export default Color;
    
  
