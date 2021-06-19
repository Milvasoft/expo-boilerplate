import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from 'react-native-vector-icons';
import Example from '@screens/Example';
import Profile from '@screens/Profile';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {

  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
        //   backgroundColor: '#000',
        },
        // activeTintColor: '#fff'
      }}
    >
      <Tab.Screen
        name="Home"
        component={Example}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="home" size={24}
              color={color}
            />
          ) 
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="person-outline" color={color}
              size={24}
            />
          ) 
        }}
      />

    </Tab.Navigator>
  );

}
