import { StyleSheet } from "react-native";
import type { ITheme } from "@styles/theme";

export const styles = (theme: ITheme) =>
  StyleSheet.create({
    activityIndicator: {
      position: "absolute",
      zIndex: 9999,
      width: "100%",
      height: "100%",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      backgroundColor: "rgba(0, 0, 0, 0.85)",
    },

    activityIndicatorText: {
      marginTop: 2,
      fontWeight: "bold",
      fontSize: 4,
      color: theme.primary,
    },
  });
