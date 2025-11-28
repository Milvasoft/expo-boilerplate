import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Platform, TouchableOpacity } from "react-native";
import Home from "@modules/app/screens/Home";
import Profile from "@modules/profile/screens/Profile/index";
import NewsList from "@modules/news/screens/NewsList";
import translate from "@helpers/localization";
import Routes from "@utils/Routes";
import { useTheme } from "@src/hooks";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.text + "60",
        tabBarStyle: {
          backgroundColor: theme.card,
          borderTopColor: theme.border,
          borderTopWidth: 1,
          height: Platform.OS === "ios" ? 88 : 60,
          paddingBottom: Platform.OS === "ios" ? 28 : 8,
          paddingTop: 8,
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        headerStyle: {
          backgroundColor: theme.primary,
          elevation: 4,
          shadowOpacity: 0.3,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
        },
      }}
    >
      <Tab.Screen
        name={Routes.Home}
        component={Home}
        options={{
          tabBarLabel: translate("navigation.home"),
          headerTitle: translate("navigation.home"),
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.News}
        component={NewsList}
        options={{
          tabBarLabel: translate("navigation.news"),
          headerTitle: translate("navigation.news"),
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "newspaper" : "newspaper-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          tabBarLabel: translate("navigation.profile"),
          headerTitle: translate("navigation.profile"),
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
          headerRight: ({}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.Settings)}
              style={{ marginRight: 16 }}
            >
              <Ionicons name="settings-outline" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
