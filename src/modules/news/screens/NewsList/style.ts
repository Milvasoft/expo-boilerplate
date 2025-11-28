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
      paddingHorizontal: padding.LARGE,
      paddingVertical: padding.XLARGE,
      paddingTop: 50,
    },
    headerTitle: {
      fontSize: 32,
      fontWeight: "bold",
      color: "#fff",
      marginBottom: 6,
      letterSpacing: 0.5,
    },
    headerSubtitle: {
      fontSize: 15,
      color: "#fff",
      opacity: 0.9,
    },
    categoryContainer: {
      paddingVertical: padding.MEDIUM,
      backgroundColor: theme.card,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    categoryScroll: {
      paddingHorizontal: padding.MEDIUM,
    },
    categoryButton: {
      paddingHorizontal: padding.LARGE,
      paddingVertical: padding.SMALL + 2,
      borderRadius: 25,
      marginRight: 10,
      backgroundColor: theme.background,
      borderWidth: 2,
      borderColor: theme.border,
    },
    categoryButtonActive: {
      backgroundColor: theme.primary,
      borderColor: theme.primary,
    },
    categoryText: {
      color: theme.text,
      fontSize: 14,
      fontWeight: "600",
    },
    categoryTextActive: {
      color: "#fff",
      fontWeight: "700",
    },
    newsItem: {
      backgroundColor: theme.card,
      marginBottom: padding.MEDIUM,
      borderRadius: 20,
      overflow: "hidden",
      elevation: 4,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
    },
    imageGradient: {
      position: "relative",
    },
    newsImage: {
      width: "100%",
      height: 220,
      backgroundColor: theme.border,
    },
    categoryBadge: {
      position: "absolute",
      top: padding.MEDIUM,
      left: padding.MEDIUM,
      backgroundColor: theme.primary,
      paddingHorizontal: padding.MEDIUM,
      paddingVertical: padding.SMALL - 2,
      borderRadius: 20,
    },
    categoryBadgeText: {
      fontSize: 11,
      color: "#fff",
      fontWeight: "700",
      textTransform: "uppercase",
    },
    newsContent: {
      padding: padding.LARGE,
    },
    newsTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme.text,
      marginBottom: padding.SMALL,
      lineHeight: 24,
    },
    newsDescription: {
      fontSize: 14,
      color: theme.text,
      opacity: 0.7,
      marginBottom: padding.MEDIUM,
      lineHeight: 20,
    },
    newsFooter: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    authorContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
    newsAuthor: {
      fontSize: 13,
      color: theme.text,
      opacity: 0.6,
      fontWeight: "500",
    },
    dateContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
    newsDate: {
      fontSize: 13,
      color: theme.text,
      opacity: 0.6,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: padding.LARGE,
    },
    emptyText: {
      fontSize: 16,
      color: theme.text,
      opacity: 0.6,
      textAlign: "center",
    },
  });
