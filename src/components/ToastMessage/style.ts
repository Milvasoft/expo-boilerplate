import { StyleSheet } from "react-native";

export const toastHeight = 120;

export const styles = StyleSheet.create({
    root: {
      height: toastHeight,
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      zIndex: 99999,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 35,
    },
    text: {
      fontWeight: "700",
      color: "white",
      fontSize: 16,
    },
  });