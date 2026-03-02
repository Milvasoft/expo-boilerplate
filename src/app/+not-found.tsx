import { View, Text, StyleSheet, Pressable } from "react-native";
import { Stack, useRouter } from "expo-router";

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: "Not Found" }} />
      <View style={styles.root}>
        <Text style={styles.title}>404</Text>
        <Text style={styles.message}>This screen doesn't exist.</Text>
        <Pressable style={styles.button} onPress={() => router.replace("/")}>
          <Text style={styles.buttonText}>Go Home</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  title: {
    fontFamily: "Black",
    fontSize: 48,
    color: "#f27a1a",
  },
  message: {
    fontFamily: "Regular",
    fontSize: 16,
    color: "#666",
  },
  button: {
    backgroundColor: "#f27a1a",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Bold",
    fontSize: 16,
  },
});
