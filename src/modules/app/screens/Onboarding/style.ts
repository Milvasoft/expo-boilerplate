/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import padding from "@styles/padding";
import { StyleSheet } from "react-native";
import { ITheme } from "@styles/theme";

export const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    slide: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: padding.XLARGE,
    },
    image: {
      width: 300,
      height: 300,
      marginBottom: padding.XLARGE,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: theme.text,
      textAlign: "center",
      marginBottom: padding.MEDIUM,
    },
    description: {
      fontSize: 16,
      color: theme.text,
      opacity: 0.7,
      textAlign: "center",
      lineHeight: 24,
      paddingHorizontal: padding.LARGE,
    },
    pagination: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: padding.LARGE,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 4,
      backgroundColor: theme.text,
      opacity: 0.3,
    },
    dotActive: {
      width: 24,
      backgroundColor: theme.primary,
      opacity: 1,
    },
    footer: {
      padding: padding.LARGE,
      paddingBottom: padding.XLARGE,
    },
    button: {
      backgroundColor: theme.primary,
      paddingVertical: padding.MEDIUM,
      borderRadius: 12,
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "600",
    },
    skipButton: {
      paddingVertical: padding.MEDIUM,
      alignItems: "center",
      marginTop: padding.SMALL,
    },
    skipText: {
      color: theme.text,
      opacity: 0.6,
      fontSize: 16,
    },
  });
