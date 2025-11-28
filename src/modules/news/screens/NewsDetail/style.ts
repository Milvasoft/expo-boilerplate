/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import padding from "@styles/padding";
import { StyleSheet, Dimensions } from "react-native";
import { ITheme } from "@styles/theme";

export const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    imageContainer: {
      position: "relative",
      width: "100%",
      height: 350,
    },
    image: {
      width: "100%",
      height: "100%",
      backgroundColor: theme.border,
    },
    imageGradient: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: "flex-start",
      paddingTop: padding.MEDIUM,
      paddingHorizontal: padding.LARGE,
    },
    backButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: "rgba(0,0,0,0.5)",
      justifyContent: "center",
      alignItems: "center",
    },
    contentContainer: {
      padding: padding.LARGE,
      marginTop: -20,
      backgroundColor: theme.background,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    categoryBadge: {
      alignSelf: "flex-start",
      backgroundColor: theme.primary,
      paddingHorizontal: padding.MEDIUM,
      paddingVertical: padding.SMALL,
      borderRadius: 20,
      marginBottom: padding.MEDIUM,
    },
    categoryText: {
      color: "#fff",
      fontSize: 11,
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: 0.5,
    },
    title: {
      fontSize: 26,
      fontWeight: "bold",
      color: theme.text,
      marginBottom: padding.LARGE,
      lineHeight: 34,
    },
    metaContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: padding.LARGE,
      gap: padding.MEDIUM,
    },
    metaItem: {
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
      gap: padding.SMALL,
      backgroundColor: theme.card,
      padding: padding.MEDIUM,
      borderRadius: 12,
    },
    metaContent: {
      flex: 1,
    },
    metaLabel: {
      fontSize: 11,
      color: theme.text,
      opacity: 0.6,
      marginBottom: 4,
      textTransform: "uppercase",
      letterSpacing: 0.5,
    },
    metaValue: {
      fontSize: 13,
      color: theme.text,
      fontWeight: "600",
    },
    divider: {
      height: 1,
      backgroundColor: theme.border,
      marginBottom: padding.LARGE,
    },
    description: {
      fontSize: 17,
      color: theme.text,
      marginBottom: padding.LARGE,
      lineHeight: 26,
      fontWeight: "600",
      opacity: 0.9,
    },
    content: {
      fontSize: 15,
      color: theme.text,
      lineHeight: 26,
      marginBottom: padding.XLARGE,
      opacity: 0.8,
    },
    sourceContainer: {
      backgroundColor: theme.card,
      padding: padding.LARGE,
      borderRadius: 16,
      marginBottom: padding.XLARGE,
      flexDirection: "row",
      alignItems: "center",
      gap: padding.MEDIUM,
    },
    sourceLabel: {
      fontSize: 12,
      color: theme.text,
      opacity: 0.6,
      marginBottom: 4,
      textTransform: "uppercase",
      letterSpacing: 0.5,
    },
    sourceText: {
      fontSize: 15,
      color: theme.text,
      fontWeight: "600",
    },
    readMoreButton: {
      marginBottom: 30,
      borderRadius: 16,
      overflow: "hidden",
      elevation: 4,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
    },
    readMoreGradient: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      paddingVertical: padding.LARGE,
      paddingHorizontal: 30,
    },
    readMoreText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "700",
    },
  });
