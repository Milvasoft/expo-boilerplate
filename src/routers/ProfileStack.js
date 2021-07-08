import * as React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Profile from '@screens/ProfileStack/Profile';
import Settings from '@screens/ProfileStack/Settings';

const Stack = createNativeStackNavigator();
export default function ProfileStack() {
 
  const screenOptions = {
    gestureEnabled: true,
    stackAnimation: 'slide_from_right',
    headerShown: false,
  };

  return (
    <Stack.Navigator 
      initialRouteName="Profile"
      headerMode="none"
      detachInactiveScreens
      screenOptions={screenOptions}      
    >
        
      <Stack.Screen name="Profile" component={Profile} />

      <Stack.Screen name="Settings" component={Settings} />


    </Stack.Navigator>
  );

}
