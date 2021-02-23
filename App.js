/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import RootNavigation from './src/routers';
import CustomProvider from './src/providers/CustomProvider';
import Store from './Store';

export default function App() {
  return (
    <Provider store={Store}>  
      <CustomProvider>
        <RootNavigation />   
      </CustomProvider>       
    </Provider>
  );
}
