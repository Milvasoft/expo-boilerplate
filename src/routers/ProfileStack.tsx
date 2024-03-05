/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { enableScreens } from "react-native-screens";
import { useTheme } from "@src/hooks";
import Routes, { ProfileStackParams } from "@utils/Routes";
import Profile from "@screens/ProfileStack/Profile";
import Settings from "@screens/ProfileStack/Settings";
import Post from "@screens/ProfileStack/Post";
import translate from "@helpers/localization";
import { ScreenOptions } from "@utils/ScreenOptions";

enableScreens();

const Stack = createStackNavigator<ProfileStackParams>();

function ProfileStack() {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName={Routes.Profile}
      screenOptions={{ ...ScreenOptions, headerTintColor: theme.primary }}
    >
      <Stack.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          headerTitle: translate("navigation.profile"),
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={Routes.Settings}
        component={Settings}
        options={{
          headerTitle: translate("navigation.settings"),
        }}
      />

      <Stack.Screen
        name={Routes.Post}
        component={Post}
        options={({ route }) => ({ headerTitle: route.params.username })}
      />
    </Stack.Navigator>
  );
}

export default React.memo(ProfileStack);
