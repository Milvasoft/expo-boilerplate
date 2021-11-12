import React, { memo } from 'react';
import { ITheme } from '@src/assets/color/LightTheme';
import { useThemedStyles } from '@src/hooks';
import { 
  View,
  Text,
  StyleSheet
} from 'react-native';

export default memo(function Example() {

  const themedStyles = useThemedStyles<typeof styles>(styles);

  return (
    <View style={themedStyles.root}>
      <Text style={themedStyles.text}>example</Text>
    </View>
  );

});

const styles = (theme: ITheme) => StyleSheet.create({
  root: {

  },

  text: {
    color: theme.secondary,
  }
});
