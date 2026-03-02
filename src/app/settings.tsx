import { View, Text, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { useAppSelector } from "@/store/hooks";
import { selectTheme } from "@/store/appSlice";
import translate from "@/lib/i18n";

export default function SettingsScreen() {
  const theme = useAppSelector(selectTheme);

  return (
    <>
      <Stack.Screen
        options={{
          title: translate("navigation.settings"),
          headerStyle: { backgroundColor: theme.card },
          headerTintColor: theme.primary,
          headerTitleStyle: { fontFamily: "Bold" },
        }}
      />
      <View
        style={[styles.root, { backgroundColor: theme.background }]}
      >
        <Text style={[styles.text, { color: theme.text }]}>Settings</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "SemiBold",
    fontSize: 18,
  },
});
