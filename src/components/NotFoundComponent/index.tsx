import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { NotFoundComponentrProps } from "./type";

const testID = "errorcomponent";
/**
 * Renders a component for displaying a "Not Found" message.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title to be displayed.
 * @param {function} props.onPress - The function to be called when the component is pressed.
 * @returns {JSX.Element} The rendered component.
 */
const NotFoundComponent = ({ title, onPress }: NotFoundComponentrProps) => (
  <View style={styles.root} testID={`${testID}-container-view`}>
    <Text style={styles.title} testID={`${testID}-title-text`}>
      {title}
    </Text>
  </View>
);

export default NotFoundComponent;
