import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { NotFoundComponentrProps } from "./type";

/**
 * Renders a component for displaying a "Not Found" message.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title to be displayed.
 * @returns {JSX.Element} The rendered component.
 */
const NotFoundComponent = ({ title }: NotFoundComponentrProps) => (
  <View style={styles.root}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default NotFoundComponent;
