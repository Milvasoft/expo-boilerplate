import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import translate from "@/lib/i18n";
import { spacing, typography } from "@/constants/spacing";

interface Props {
  text?: string;
}

export function LoadingIndicator({ text }: Props) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={[styles.text, { color: colors.primary }]}>
        {text ?? translate("generalActivityIndicatorText")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 9999,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
  },
  text: {
    marginTop: spacing.md - 4,
    fontWeight: "bold",
    fontSize: typography.sm + 1,
  },
});
