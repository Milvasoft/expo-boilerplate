import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/appSlice";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/Button";
import { showToast } from "@/lib/toast";
import { spacing, typography } from "@/constants/spacing";

export default function LoginScreen() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { colors } = useTheme();

  const handleLogin = () => {
    showToast("Welcome!");
    dispatch(setUser({ name: "Expo User" }));
    router.replace("/(tabs)");
  };

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <Text style={[styles.welcome, { color: colors.text }]}>Welcome!</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontFamily: "Bold",
    fontSize: typography.xl - 4,
    marginBottom: spacing.lg,
  },
});
