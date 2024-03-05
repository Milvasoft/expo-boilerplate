/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Settings() {
  return (
    <View style={styles.root}>
      <Text>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Settings;
