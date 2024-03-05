import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useThemedStyles } from "@src/hooks";
import { ITheme } from "@styles/theme";

const Example = () => {
  const themedStyles = useThemedStyles<typeof styles>(styles);

  return (
    <View style={themedStyles.root}>
      <Text style={themedStyles.text}>example</Text>
    </View>
  );
};

const styles = (theme: ITheme) =>
  StyleSheet.create({
    root: {},

    text: {
      color: theme.secondary,
    },
  });

export default React.memo(Example);
