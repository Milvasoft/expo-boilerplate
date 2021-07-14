/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from 'react-native-vector-icons';
import Example from '@screens/Example';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {

  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
        //   backgroundColor: '#000',
        },
        // activeTintColor: '#fff',
        // inactiveTintColor: _tintColor
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
        component={ProfileStack}
        // listeners={{
        //   tabPress: () => {
        //     // Process
        //   },
        //   focus: () => {
        //     // Process
        //   }
        // }}
        options={{
          // unmountOnBlur: true, ! Important =>  To re-render each time
          // tabBarLabel: () => null,
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
