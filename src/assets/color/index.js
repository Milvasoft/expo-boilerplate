import { getState } from '@helpers/redux';
import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();

const light = {
  primary: 'black',
  secondary: 'yellow',
};

const dark = {
  primary: 'red',
  secondary: 'green',
};

const Color = () => {
 
  const { GlobalReducer: { userColorScheme } } = getState();

  if (userColorScheme) {
    
    if (userColorScheme === 'dark') {

      return dark;
    
    }
    
    return light;
    
  }

  if (colorScheme === 'dark') {

    return dark;
  
  }

  return light;
  

};


export default Color;
    
  
