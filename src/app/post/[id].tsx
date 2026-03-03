import { View, Text, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { useTheme } from "@/hooks/useTheme";
import { typography } from "@/constants/spacing";

export default function PostScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { colors } = useTheme();

  return (
    <>
      <Stack.Screen
        options={{
          title: `Post #${id}`,
          headerStyle: { backgroundColor: colors.card },
          headerTintColor: colors.primary,
          headerTitleStyle: { fontFamily: "Bold" },
        }}
      />
      <View style={[styles.root, { backgroundColor: colors.background }]}>
        <Text style={[styles.text, { color: colors.text }]}>Post - {id}</Text>
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
