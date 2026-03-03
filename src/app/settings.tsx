import { View, Text, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { useTheme } from "@/hooks/useTheme";
import translate from "@/lib/i18n";
import { typography } from "@/constants/spacing";

export default function SettingsScreen() {
  const { colors } = useTheme();

  return (
    <>
      <Stack.Screen
        options={{
          title: translate("navigation.settings"),
          headerStyle: { backgroundColor: colors.card },
          headerTintColor: colors.primary,
          headerTitleStyle: { fontFamily: "Bold" },
        }}
      />
      <View style={[styles.root, { backgroundColor: colors.background }]}>
        <Text style={[styles.text, { color: colors.text }]}>Settings</Text>
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
    fontSize: typography.md + 1,
  },
});
