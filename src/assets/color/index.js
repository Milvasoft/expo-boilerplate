import { getState } from '@helpers/redux';
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

const Color = () => {
 
  const { GlobalReducer: { userColorScheme } } = getState();

  if (userColorScheme) {
    
    if (userColorScheme === 'dark') {

      return darkTheme;
    
    }
    
    return lightTheme;
    
  }

  if (colorScheme === 'dark') {

    return darkTheme;
  
  }

  return lightTheme;
  

};


export default Color;
    
  
