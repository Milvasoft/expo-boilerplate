/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import { appStateChange } from '@modules/app/redux/actions';
import { wp } from '@helpers/responsive';
import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import * as Notifications from 'expo-notifications';

function Login() {

  const _goHomePage = useCallback(async () => {

    const token = (await Notifications.getExpoPushTokenAsync()).data;

    console.log('token', token);

    appStateChange({ isSignedIn: true });

  }, []);

  return (
    <View style={styles.root}>

      <Text style={styles.welcome}>Welcome !</Text>

      <Button
        mode="contained"        
        style={styles.buttonStyle}
        onPress={_goHomePage}
        uppercase={false}
        labelStyle={styles.labelStyle}
      >
        Login
      </Button>

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


export default Login;
