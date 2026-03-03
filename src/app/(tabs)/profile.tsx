import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/Button";
import { spacing, typography } from "@/constants/spacing";

export default function ProfileScreen() {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.safeView, { backgroundColor: colors.background }]}
    >
      <View style={styles.root}>
        <Text style={[styles.name, { color: colors.text }]}>
          Expo Boilerplate User
        </Text>

        <Button
          title="Go to Post"
          onPress={() =>
            router.push({ pathname: "/post/[id]", params: { id: "1" } })
          }
        />

        <Button
          title="Go to Settings"
          variant="outline"
          onPress={() => router.push("/settings")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.lg,
  },
  name: {
    fontFamily: "Black",
    fontSize: typography.lg,
  },
});
