import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "./Button";
import translate from "@/lib/i18n";
import { spacing, typography } from "@/constants/spacing";

interface Props {
  errorMessage?: string;
  onRetry?: () => void;
}

export function ErrorComponent({ errorMessage, onRetry }: Props) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <MaterialIcons name="error" size={50} color={colors.primary} />
      {errorMessage && (
        <Text style={[styles.message, { color: colors.text }]}>
          {errorMessage}
        </Text>
      )}
      {onRetry && (
        <Button
          title={translate("retry")}
          onPress={onRetry}
          style={{ marginTop: spacing.md }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: typography.md + 1,
    marginVertical: spacing.md,
    textAlign: "center",
  },
});
