import { Pressable, Text, StyleSheet, type ViewStyle } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { spacing, typography } from "@/constants/spacing";

interface Props {
  title: string;
  onPress: () => void;
  variant?: "primary" | "outline" | "ghost";
  style?: ViewStyle;
  disabled?: boolean;
}

export function Button({
  title,
  onPress,
  variant = "primary",
  style,
  disabled = false,
}: Props) {
  const { colors } = useTheme();

  const containerStyle: ViewStyle =
    variant === "primary"
      ? { backgroundColor: colors.primary }
      : variant === "outline"
        ? {
            backgroundColor: "transparent",
            borderWidth: 1.5,
            borderColor: colors.primary,
          }
        : { backgroundColor: "transparent" };

  const textColor =
    variant === "primary" ? "#fff" : colors.primary;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.container,
        containerStyle,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.md - 4,
    paddingHorizontal: spacing.lg,
    borderRadius: spacing.sm,
    minWidth: 140,
    alignItems: "center",
  },
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontFamily: "Bold",
    fontSize: typography.base,
  },
});
