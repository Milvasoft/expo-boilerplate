import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { NotFoundComponentrProps } from "./type";

const NotFoundComponent = ({ title }: NotFoundComponentrProps) => (
  <View style={styles.root}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default NotFoundComponent;
