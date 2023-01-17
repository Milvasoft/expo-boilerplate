import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet 
} from 'react-native';
import { hp, wp } from '@helpers/responsive';
import translate from '@helpers/localization';
import { ITheme } from '@src/assets/color/LightTheme';
import { useTheme, useThemedStyles } from '@src/hooks';

type Props = {
  text?: string
};
  
function GeneralActivityIndicator({ text }: Props) {

  const theme = useTheme();
  const themedStyles = useThemedStyles<typeof styles>(styles);

  // TODO Modal
  return (
    <View style={themedStyles.activityIndicator}>
      <ActivityIndicator
        animating
        size="large"
        color={theme.primary}
      />
      <Text style={themedStyles.activityIndicatorText}>
        {text || translate('generalActivityIndicatorText')}
      </Text>
    </View>
  );

}
export default GeneralActivityIndicator;

const styles = (theme: ITheme) => StyleSheet.create({
  activityIndicator: {
    position: 'absolute',
    zIndex: 9999999999,
    width: wp(100),
    height: hp(100),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.85)'
  },
      
  activityIndicatorText: {
    marginTop: hp(2),
    fontWeight: 'bold',
    fontSize: wp(4),
    color: theme.primary
  },
});
