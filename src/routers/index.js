import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import Example from '@screens/Example';
import BottomNavigation from './BottomNavigation';

const Stack = createStackNavigator();
export default function RootNavigation() {
  return (
    <SafeAreaProvider>

      <NavigationContainer>

        <Stack.Navigator initialRouteName="Home" headerMode="none">

          <Stack.Screen name="Home" component={BottomNavigation} />

          <Stack.Screen name="Settings" component={Example} />

        </Stack.Navigator>

      </NavigationContainer>
      
    </SafeAreaProvider>
  );
}
