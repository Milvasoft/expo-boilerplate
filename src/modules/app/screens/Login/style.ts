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
    headerGradient: {
      paddingTop: 50,
      paddingBottom: 40,
      paddingHorizontal: 20,
      alignItems: "center",
    },
    headerContent: {
      alignItems: "center",
    },
    logoWrapper: {
      marginBottom: 20,
    },
    logoCircle: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: "rgba(255,255,255,0.25)",
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      width: 60,
      height: 60,
    },
    appName: {
      fontSize: 32,
      fontWeight: "bold",
      color: "#FFFFFF",
      marginTop: 15,
      marginBottom: 8,
      letterSpacing: 0.5,
    },
    tagline: {
      fontSize: 15,
      color: "#FFFFFF",
      opacity: 0.95,
      textAlign: "center",
    },
    formWrapper: {
      flex: 1,
      width: "100%",
    },
    formCard: {
      backgroundColor: "#FFFFFF",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingTop: 30,
      paddingHorizontal: 24,
      paddingBottom: 20,
      marginTop: -20,
      minHeight: "100%",
    },
    welcomeTitle: {
      fontSize: 24,
      fontWeight: "bold",
      color: theme.text,
      marginBottom: 8,
    },
    welcomeSubtitle: {
      fontSize: 14,
      color: theme.textSecondary,
      marginBottom: 24,
    },
    inputContainer: {
      marginBottom: 16,
    },
    inputWrapper: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#F5F5F5",
      borderWidth: 1,
      borderColor: "#E0E0E0",
      borderRadius: 12,
      paddingHorizontal: 16,
      gap: 10,
      height: 52,
    },
    input: {
      flex: 1,
      fontSize: 15,
      color: theme.text,
      backgroundColor: "transparent",
    },
    inputError: {
      borderColor: "#ff4444",
    },
    errorText: {
      color: "#ff4444",
      fontSize: 12,
      marginTop: padding.SMALL,
      marginLeft: padding.SMALL,
    },
    eyeButton: {
      padding: padding.SMALL,
    },
    forgotPassword: {
      alignSelf: "flex-end",
      marginBottom: 20,
      marginTop: 4,
    },
    forgotPasswordText: {
      color: theme.primary,
      fontSize: 14,
      fontWeight: "600",
    },
    button: {
      borderRadius: 12,
      overflow: "hidden",
      elevation: 4,
      shadowColor: theme.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      marginBottom: 20,
    },
    buttonDisabled: {
      opacity: 0.5,
      elevation: 0,
    },
    buttonGradient: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
      paddingVertical: 16,
      paddingHorizontal: 24,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "700",
    },
    divider: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 20,
    },
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: theme.border,
    },
    dividerText: {
      color: theme.text,
      opacity: 0.5,
      marginHorizontal: padding.MEDIUM,
      fontSize: 14,
      fontWeight: "500",
    },
    footer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      marginBottom: 30,
    },
    footerText: {
      color: theme.textSecondary,
      fontSize: 14,
    },
    footerLink: {
      color: theme.primary,
      fontSize: 14,
      fontWeight: "700",
      marginLeft: 4,
    },
    socialButtons: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 16,
      gap: 12,
    },
    socialButton: {
      flex: 1,
      borderRadius: 12,
      overflow: "hidden",
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    socialButtonGradient: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
      paddingVertical: 14,
      paddingHorizontal: 12,
    },
    socialButtonText: {
      color: "#fff",
      fontSize: 13,
      fontWeight: "600",
    },
  });
