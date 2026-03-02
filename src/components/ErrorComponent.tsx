import { View, Text, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useAppSelector } from "@/store/hooks";
import { selectTheme } from "@/store/appSlice";
import translate from "@/lib/i18n";

interface Props {
  errorMessage?: string;
  onRetry?: () => void;
}

export function ErrorComponent({ errorMessage, onRetry }: Props) {
  const theme = useAppSelector(selectTheme);

  return (
    <View style={styles.container}>
      <MaterialIcons name="error" size={50} color={theme.primary} />
      {errorMessage && <Text style={styles.message}>{errorMessage}</Text>}
      {onRetry && (
        <Pressable
          onPress={onRetry}
          style={[styles.retryButton, { backgroundColor: theme.primary }]}
        >
          <Text style={styles.buttonText}>{translate("retry")}</Text>
        </Pressable>
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
    fontSize: 18,
    marginVertical: 16,
    textAlign: "center",
  },
  retryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
