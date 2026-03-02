import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppSelector } from "@/store/hooks";
import { selectTheme } from "@/store/appSlice";
import translate from "@/lib/i18n";
import { showToast } from "@/lib/toast";

export default function HomeScreen() {
  const theme = useAppSelector(selectTheme);

  return (
    <SafeAreaView
      style={[styles.safeView, { backgroundColor: theme.background }]}
    >
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={[styles.title, { color: theme.text }]}>
            EXPO BOILERPLATE
          </Text>
          <Text style={[styles.subtitle, { color: theme.secondary }]}>
            SDK 55 &bull; TypeScript &bull; expo-router
          </Text>
        </View>

        <Pressable
          style={[styles.button, { backgroundColor: theme.primary }]}
          onPress={() => showToast("Hello from the toast system!")}
        >
          <Text style={styles.buttonText}>Show Toast</Text>
        </Pressable>

        <Text style={[styles.translatedText, { color: theme.text }]}>
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
    paddingHorizontal: 24,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Black",
    fontSize: 24,
  },
  subtitle: {
    fontFamily: "Regular",
    fontSize: 14,
    marginTop: 8,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Bold",
    fontSize: 16,
  },
  translatedText: {
    fontFamily: "Bold",
    fontSize: 18,
  },
});
