import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useAppSelector } from "@/store/hooks";
import { selectTheme } from "@/store/appSlice";

export default function ProfileScreen() {
  const router = useRouter();
  const theme = useAppSelector(selectTheme);

  return (
    <SafeAreaView
      style={[styles.safeView, { backgroundColor: theme.background }]}
    >
      <View style={styles.root}>
        <Text style={[styles.name, { color: theme.text }]}>
          Expo Boilerplate User
        </Text>

        <Pressable
          style={[styles.button, { backgroundColor: theme.primary }]}
          onPress={() =>
            router.push({ pathname: "/post/[id]", params: { id: "1" } })
          }
        >
          <Text style={styles.buttonText}>Go to Post</Text>
        </Pressable>

        <Pressable
          style={[styles.button, { backgroundColor: theme.primary }]}
          onPress={() => router.push("/settings")}
        >
          <Text style={styles.buttonText}>Go to Settings</Text>
        </Pressable>
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
    gap: 24,
  },
  name: {
    fontFamily: "Black",
    fontSize: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 180,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Bold",
    fontSize: 16,
  },
});
