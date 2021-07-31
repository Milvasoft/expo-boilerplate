/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React from 'react';
import { enableScreens } from 'react-native-screens';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import * as ScreenOrientation from 'expo-screen-orientation';
import RootNavigation from './src/routers';
import CustomProvider from './src/providers';
import Store from './src/reducers/Store';
 
 
enableScreens();
 
const App : React.FC = () => {
 
  React.useEffect(() => {
 
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
   
  }, []);
   
  return (
    <Provider store={Store}>  
      <CustomProvider>
        <RootNavigation />   
      </CustomProvider>       
    </Provider>
  );
 
};
 
export default App;
 
