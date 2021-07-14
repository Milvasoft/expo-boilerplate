/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet 
} from 'react-native';
import Color from '@assets/color';
import { hp, wp } from '@helpers/responsive';
import GetLang from '@helpers/localization';

export default function GeneralActivityIndicator({ text }) {

  return (
    <View style={Styles.activityIndicator}>
      <ActivityIndicator
        animating
        size="large"
        color={Color.primary}
      />
      <Text style={Styles.activityIndicatorText}>
        {text || GetLang('generalActivityIndicatorText')}
      </Text>
    </View>
  );

}

const Styles = StyleSheet.create({
  activityIndicator: {
    position: 'absolute',
    zIndex: 9999999999,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.85)'
  },
      
  activityIndicatorText: {
    marginTop: hp(2),
    fontWeight: 'bold',
    fontSize: wp(4),
    color: Color.primary
  },
});
