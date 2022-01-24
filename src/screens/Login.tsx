/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import React, { useCallback } from 'react';
import { updateAppState, showToast } from '@modules/app/redux/actions';
import { wp } from '@helpers/responsive';
import {
  View, 
  Text,
  StyleSheet,
  Button 
} from 'react-native';

export default function Login() {

  const goHomePage = useCallback(() => {

    showToast('Welcome');

    updateAppState({ isSignedIn: true });

  }, []);

  return (
    <View style={styles.root}>

      <Text style={styles.welcome}>Welcome !</Text>

      <Button onPress={goHomePage} title="Login" />

    </View>
  );

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },

  welcome: {
    fontFamily: 'Bold',
    fontSize: wp(6),
  },
  buttonStyle: {
    width: wp(30),
    marginTop: 50,
  },
  labelStyle: {
    fontSize: wp(3),
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

