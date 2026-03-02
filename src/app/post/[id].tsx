import { View, Text, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { useAppSelector } from "@/store/hooks";
import { selectTheme } from "@/store/appSlice";

export default function PostScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const theme = useAppSelector(selectTheme);

  return (
    <>
      <Stack.Screen
        options={{
          title: `Post #${id}`,
          headerStyle: { backgroundColor: theme.card },
          headerTintColor: theme.primary,
          headerTitleStyle: { fontFamily: "Bold" },
        }}
      />
      <View
        style={[styles.root, { backgroundColor: theme.background }]}
      >
        <Text style={[styles.text, { color: theme.text }]}>Post - {id}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "SemiBold",
    fontSize: 18,
  },
});
