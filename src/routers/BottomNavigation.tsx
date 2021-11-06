/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Example from '@screens/Example';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Color from '@assets/color';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {

  return (
    <Tab.Navigator
      screenOptions={{        
        tabBarActiveTintColor: Color().primary,
        tabBarStyle: { backgroundColor: '#D6CEBE', },        
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Example}
        options={{ tabBarIcon: ({ color }) => (<AntDesign name="home" size={24} color={color} />) }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color }) => (<Ionicons name="person-outline" color={color} size={24} />) 
        }}
      />

    </Tab.Navigator>
  );

}
