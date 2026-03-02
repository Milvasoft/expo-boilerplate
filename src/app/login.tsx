import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/appSlice";
import { showToast } from "@/lib/toast";

export default function LoginScreen() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogin = () => {
    showToast("Welcome!");
    dispatch(setUser({ name: "Expo User" }));
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.welcome}>Welcome!</Text>
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  welcome: {
    fontFamily: "Bold",
    fontSize: 28,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#f27a1a",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Bold",
    fontSize: 18,
  },
});
