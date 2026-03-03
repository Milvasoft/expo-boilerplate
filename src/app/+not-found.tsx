import { View, Text, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/Button";
import { spacing } from "@/constants/spacing";

export default function NotFoundScreen() {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <>
      <Stack.Screen options={{ title: "Not Found" }} />
      <View style={[styles.root, { backgroundColor: colors.background }]}>
        <Text style={[styles.title, { color: colors.primary }]}>404</Text>
        <Text style={[styles.message, { color: colors.border }]}>
          This screen doesn't exist.
        </Text>
        <Button
          title="Go Home"
          onPress={() => router.replace("/")}
          style={{ marginTop: spacing.sm }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.md,
  },
  title: {
    fontFamily: "Black",
    fontSize: 48,
  },
  message: {
    fontFamily: "Regular",
    fontSize: 16,
  },
});
