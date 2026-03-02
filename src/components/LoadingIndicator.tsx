import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useAppSelector } from "@/store/hooks";
import { selectTheme } from "@/store/appSlice";
import translate from "@/lib/i18n";

interface Props {
  text?: string;
}

export function LoadingIndicator({ text }: Props) {
  const theme = useAppSelector(selectTheme);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.primary} />
      <Text style={[styles.text, { color: theme.primary }]}>
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
    marginTop: 12,
    fontWeight: "bold",
    fontSize: 14,
  },
});
