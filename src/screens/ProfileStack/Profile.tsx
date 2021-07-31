/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import React from 'react';
import { useSelector } from 'react-redux';
import { Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as $ACS from '@actions/Profile';
import { RootState } from '@reducers/Store';
  

const Profile: React.FC = () => {

  const counter = useSelector((state: RootState) => state.ProfileReducer.counter);

  const _counterInc = () => {

    $ACS.increment();
  
  };
  const _counterDec = () => {

    $ACS.decrement();
  
  };
  
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

};


export default Profile;
