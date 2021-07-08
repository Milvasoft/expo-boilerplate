import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Example from '@screens/Example';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();
export default function RootNavigation() {

  const screenOptions = {
    gestureEnabled: true,
    stackAnimation: 'slide_from_right',
    headerShown: false,
  };

  return (
    <SafeAreaProvider>

      <NavigationContainer>

        <Stack.Navigator 
          initialRouteName="Home"
          headerMode="none"
          detachInactiveScreens
          screenOptions={screenOptions}
        >

          <Stack.Screen
            name="Home" 
            component={BottomNavigation} 
            options={{ gestureEnabled: false }} 
          />

          <Stack.Screen name="Settings" component={Example} />

        </Stack.Navigator>

      </NavigationContainer>
      
    </SafeAreaProvider>
  );

}
