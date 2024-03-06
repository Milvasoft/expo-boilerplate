/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@modules/app/screens/Home";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useTheme } from "@src/hooks";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.primary,
        tabBarStyle: { backgroundColor: "#FFF" },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
