import React, { memo } from "react";
import { useThemedStyles } from "@src/hooks";
import { View, Text, StyleSheet } from "react-native";
import { ITheme } from "@styles/theme";

function Example() {
  const themedStyles = useThemedStyles<typeof styles>(styles);

  return (
    <View style={themedStyles.root}>
      <Text style={themedStyles.text}>example</Text>
    </View>
  );
}

const styles = (theme: ITheme) =>
  StyleSheet.create({
    root: {},

    text: {
      color: theme.secondary,
    },
  });

export default memo(Example);
