/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@src/hooks";
import translate from "@helpers/localization";
import NewsList from "@modules/news/screens/NewsList";

const Stack = createStackNavigator();

function ProfileStack() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.primary,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="NewsList"
        component={NewsList}
        options={{
          headerTitle: translate("navigation.news"),
        }}
      />
    </Stack.Navigator>
  );
}

export default React.memo(ProfileStack);
