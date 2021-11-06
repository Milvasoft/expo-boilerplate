/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import * as React from 'react';
import * as Linking from 'expo-linking';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator, } from 'react-native-screens/native-stack';
import Login from '@screens/Login';
import { CardStyleInterpolators, } from '@react-navigation/stack';
import * as Notifications from 'expo-notifications';
import { useAppSelector } from '@reducers/Store';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

const prefix = Linking.createURL('/');

const notificationType = {
  Post: 1,
};

// Change ip
const baseUrl = 'exp://111.111.111.111:19000/--';

// For Notifcation 
const config = {
  screens: {
    Home: {
      screens: {
        
        Profile: {

          screens: {
            Post: 'mypost/:id',
          },

        }

      },
    },   
  },
};

const screenOptions = {
  gestureEnabled: true,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  stackAnimation: 'slide_from_right',
  headerShown: false,
};

export default function RootNavigation() {

  const isSignedIn = useAppSelector((state) => state?.AppReducer?.isSignedIn);  

 
  const _linking = {
    prefixes: [prefix],
    config,
    subscribe(listener) {

      const onReceiveURL = ({ url }) => listener(url);

      Linking.addEventListener('url', onReceiveURL); 

      const subscription = Notifications.addNotificationResponseReceivedListener((response) => {

        const data = response?.notification?.request?.content.data;
      
        if (data?.NotificationId === notificationType.Post) listener(`${baseUrl}/mypost/${data?.Data}`);
      
      });

      return () => {

        // Clean up the event listeners
        Linking.removeEventListener('url', onReceiveURL);
        subscription.remove();
      
      };
    
    },
  };

  return (
    <SafeAreaProvider>

      <NavigationContainer linking={_linking}>

        <Stack.Navigator 
          initialRouteName={isSignedIn ? 'Home' : 'Login'} 
          headerMode="none"
          detachInactiveScreens
          screenOptions={screenOptions}
        >

          {
            isSignedIn
              ? (
                <>
                  <Stack.Screen name="Home" component={BottomNavigation} options={{ gestureEnabled: false }} />
                </>
              )
              : (
                <>
                  <Stack.Screen name="login" component={Login} />

                </>
              )
          }

        </Stack.Navigator>

      </NavigationContainer>
      
    </SafeAreaProvider>
  );

}
