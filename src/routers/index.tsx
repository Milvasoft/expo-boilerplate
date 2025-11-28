import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAppSelector } from "@src/store";
import translate from "@helpers/localization";
import { enableScreens } from "react-native-screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "@src/hooks";
import { navigationRef } from "../helpers/router";
import Onboarding from "@modules/app/screens/Onboarding";
import Login from "@modules/app/screens/Login";
import Signup from "@modules/app/screens/Signup";
import NewsDetail from "@modules/news/screens/NewsDetail";
import Settings from "@modules/profile/screens/Settings";
import BottomNavigation from "./BottomNavigation";
import { ScreenOptions } from "@utils/ScreenOptions";
import Routes, { RootStackParams } from "@utils/Routes";

enableScreens();

const Stack = createStackNavigator<RootStackParams>();

function RootNavigation() {
  const isSignedIn = useAppSelector((s) => s.AppReducer?.isSignedIn);
  const hasSeenOnboarding = useAppSelector(
    (s) => s.AppReducer?.hasSeenOnboarding
  );
  const userColorScheme = useAppSelector((s) => s?.AppReducer?.userColorScheme);
  const theme = useTheme();
  const isDarkTheme = userColorScheme === "dark";

  const getInitialRoute = () => {
    if (!hasSeenOnboarding) return Routes.Onboarding;
    if (!isSignedIn) return Routes.Login;
    return Routes.Home;
  };

  const navigationTheme = {
    dark: isDarkTheme,
    colors: {
      primary: theme.primary,
      background: theme.background,
      card: theme.card,
      text: theme.text,
      border: theme.border,
      notification: theme.notification,
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        <Stack.Navigator
          initialRouteName={getInitialRoute()}
          screenOptions={{ ...ScreenOptions, headerTintColor: theme.primary }}
        >
          {!hasSeenOnboarding ? (
            <Stack.Screen
              name={Routes.Onboarding}
              component={Onboarding}
              options={{ headerShown: false }}
            />
          ) : null}

          {!isSignedIn ? (
            <>
              <Stack.Screen
                name={Routes.Login}
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name={Routes.Signup}
                component={Signup}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name={Routes.Home}
                component={BottomNavigation}
                options={{
                  gestureEnabled: false,
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={Routes.NewsDetail}
                component={NewsDetail}
                options={{
                  headerTitle: translate("navigation.newsDetail"),
                  headerStyle: {
                    backgroundColor: theme.primary,
                  },
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },
                }}
              />
              <Stack.Screen
                name={Routes.Settings}
                component={Settings}
                options={{
                  headerTitle: translate("navigation.settings"),
                  headerStyle: {
                    backgroundColor: theme.primary,
                  },
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default RootNavigation;
