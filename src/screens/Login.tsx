/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import React, { useCallback } from 'react';
import { showToast } from '@src/modules/app/services/appService';
import { wp } from '@helpers/responsive';
import {
  View, 
  Text,
  StyleSheet,
  Button 
} from 'react-native';
import { dispatcher } from '@helpers/redux';
import { SetUser } from '@modules/app/redux/appSlice';

export default function Login() {

  const goHomePage = useCallback(() => {

    showToast('Welcome');

    dispatcher(SetUser({ name: 'Ali Burhan Keskin' }));

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

