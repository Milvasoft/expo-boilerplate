/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-alert */
import { addStoreData } from '@helpers/storage';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useEffect, useRef } from 'react';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function Notification({ children }) {

  const notificationListener = useRef();
  const responseListener = useRef();

  // const _clearBadge = async () => {
  //   await Notifications.setBadgeCountAsync(0);
  // };

  useEffect(() => {

    registerForPushNotificationsAsync()
      .then(async (token) => {

        await addStoreData('pushToken', token);
      
      });
      

    // This listener is fired whenever a notification is received while the app is foregrounded
    // notificationListener.current = Notifications
    //   .addNotificationReceivedListener((_notification) => {
    //     console.log(_notification);
    //   });

    // // This listener is fired whenever a user taps on or interacts with a notification 
    // // (works when app is foregrounded, backgrounded, or killed)

    // responseListener.current = 
    // Notifications.addNotificationResponseReceivedListener((response) => {
    //   console.log(response);
    // });

    return () => {

      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    
    };
  
  }, []);

  return (
    <>
      {children}
    </>
  );

}

async function registerForPushNotificationsAsync() {

  let token;
  if (Constants.isDevice) {

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {

      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    
    }
    if (finalStatus !== 'granted') {

      alert('Failed to get push token for push notification!');
      return;
    
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  
  } else {

    alert('Must use physical device for Push Notifications');
  
  }

  // eslint-disable-next-line consistent-return
  return token;

}