import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/Button";
import translate from "@/lib/i18n";
import { showToast } from "@/lib/toast";
import { spacing, typography } from "@/constants/spacing";

export default function HomeScreen() {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.safeView, { backgroundColor: colors.background }]}
    >
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={[styles.title, { color: colors.text }]}>
            EXPO BOILERPLATE
          </Text>
          <Text style={[styles.subtitle, { color: colors.secondary }]}>
            SDK 55 &bull; TypeScript &bull; expo-router
          </Text>
        </View>

        <Button
          title="Show Toast"
          onPress={() => showToast("Hello from the toast system!")}
        />

        <Text style={[styles.translatedText, { color: colors.text }]}>
          {translate("name")}
        </Text>
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
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Black",
    fontSize: typography.lg + 4,
  },
  subtitle: {
    fontFamily: "Regular",
    fontSize: typography.sm + 1,
    marginTop: spacing.sm,
  },
  translatedText: {
    fontFamily: "Bold",
    fontSize: typography.md + 1,
  },
});
