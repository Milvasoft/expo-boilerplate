/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import { appStateChange } from '@actions/App';
import Color from '@assets/color';
import { wp } from '@helpers/responsive';
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import * as Notifications from 'expo-notifications';


function Login() {

  const _goHomePage = async () => {

    const token = (await Notifications.getExpoPushTokenAsync()).data;

    console.log('token', token);
    appStateChange({ isSignedIn: true });

  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Login
      </Text>
      <Button
        mode="contained"
        style={{ width: wp(30), }}
        onPress={_goHomePage}
        uppercase={false}
        labelStyle={{
          fontSize: wp(3), textAlign: 'center', fontWeight: 'bold', color: Color().primary
        }}
      >
        Login
      </Button>

    </View>
  );

}

export default Login;
