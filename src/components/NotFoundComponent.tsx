import React from "react";
import { StyleSheet, View, Text } from "react-native";
import padding from "@styles/padding";

type props = {
  title: string;
};

const NotFoundComponent = ({ title }: props) => (
  <View style={styles.root}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default NotFoundComponent;

const styles = StyleSheet.create({
  root: {
    marginTop: padding.HUGE,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#f27a1a",
  },
});
