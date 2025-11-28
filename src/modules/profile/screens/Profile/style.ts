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
    header: {
      paddingHorizontal: padding.XLARGE,
      paddingTop: padding.LARGE,
      paddingBottom: padding.XLARGE + padding.LARGE,
      alignItems: "center",
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
    avatarContainer: {
      width: 110,
      height: 110,
      borderRadius: 55,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: padding.LARGE,
      elevation: 6,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
    },
    avatarGradient: {
      width: "100%",
      height: "100%",
      borderRadius: 55,
      justifyContent: "center",
      alignItems: "center",
    },
    avatarText: {
      fontSize: 42,
      fontWeight: "bold",
      color: theme.primary,
    },
    nameText: {
      fontSize: 26,
      fontWeight: "bold",
      color: "#fff",
      marginBottom: 6,
      letterSpacing: 0.5,
    },
    emailText: {
      fontSize: 14,
      color: "#fff",
      opacity: 0.9,
    },
    content: {
      flex: 1,
      marginTop: -20,
      backgroundColor: theme.background,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    section: {
      padding: padding.LARGE,
      paddingTop: padding.XLARGE,
    },
    sectionTitle: {
      fontSize: 13,
      fontWeight: "700",
      color: theme.text,
      opacity: 0.6,
      marginBottom: padding.LARGE,
      textTransform: "uppercase",
      letterSpacing: 1.2,
    },
    menuItem: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.card,
      paddingVertical: padding.LARGE,
      paddingHorizontal: padding.MEDIUM,
      borderRadius: 16,
      marginBottom: padding.MEDIUM,
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 6,
    },
    menuIconContainer: {
      width: 48,
      height: 48,
      borderRadius: 24,
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
      lineHeight: 18,
    },
    logoutButton: {
      marginHorizontal: padding.LARGE,
      marginBottom: padding.LARGE,
      borderRadius: 16,
      overflow: "hidden",
      elevation: 4,
      shadowColor: "#ff4444",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
    },
    logoutGradient: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      paddingVertical: padding.LARGE,
    },
    logoutText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "700",
    },
  });
