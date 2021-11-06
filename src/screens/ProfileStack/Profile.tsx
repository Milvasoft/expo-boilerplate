/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import React, { useCallback } from 'react';
import { Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as $ACS from '@actions/Profile';
import { useAppSelector } from '@reducers/Store';
  
function Profile() {

  const counter = useAppSelector((state) => state.ProfileReducer.counter);

  const _counterInc = useCallback(() => $ACS.increment(), []);
  const _counterDec = useCallback(() => $ACS.decrement(), []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>


        <Text style={{ fontFamily: 'Black' }}>
          Ali Burhan Keskin
        </Text>

        <Text style={{ marginTop: 30, fontSize: 30, color: 'red' }}>
          {counter}
        </Text>

        <View style={{ marginTop: 30 }}>
          <Button onPress={_counterInc} title="Increment" />
        </View>

        <View style={{ marginTop: 30 }}>
          <Button onPress={_counterDec} title="Fecrement" />
        </View>

      </View>
    </SafeAreaView>
  );

}


export default Profile;
