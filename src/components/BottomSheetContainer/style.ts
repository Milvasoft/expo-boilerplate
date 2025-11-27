/**
 * Bottom Sheet Container Styles
 */
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  handleIndicator: {
    backgroundColor: "#D1D5DB",
    width: 40,
    height: 4,
    borderRadius: 2,
  },
  background: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});
