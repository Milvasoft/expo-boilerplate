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
    content: {
      flex: 1,
    },
    section: {
      marginTop: 20,
      paddingHorizontal: padding.LARGE,
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: "700",
      color: theme.text,
      opacity: 0.6,
      marginBottom: padding.MEDIUM,
      textTransform: "uppercase",
      letterSpacing: 0.5,
    },
    menuItem: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.card,
      padding: padding.LARGE,
      borderRadius: 12,
      marginBottom: padding.SMALL + 2,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
    },
    menuIconContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.primary + "15",
      justifyContent: "center",
      alignItems: "center",
      marginRight: padding.MEDIUM,
    },
    menuTextContainer: {
      flex: 1,
    },
    menuTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: theme.text,
      marginBottom: 4,
    },
    menuSubtitle: {
      fontSize: 13,
      color: theme.text,
      opacity: 0.6,
    },
    logoutButton: {
      marginHorizontal: padding.LARGE,
      marginBottom: padding.LARGE,
      marginTop: padding.SMALL,
      backgroundColor: "#ff4444",
      paddingVertical: padding.LARGE,
      borderRadius: 12,
      alignItems: "center",
      shadowColor: "#ff4444",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 4,
    },
    logoutText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "700",
    },
  });
