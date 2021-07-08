/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React from 'react';
import { enableScreens } from 'react-native-screens';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import * as ScreenOrientation from 'expo-screen-orientation';
import RootNavigation from './src/routers';
import CustomProvider from './src/providers/CustomProvider';
import Store from './Store';


enableScreens();

export default function App() {

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

}
