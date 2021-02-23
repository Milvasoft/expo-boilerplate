import React from 'react';
import { useSelector } from 'react-redux';
import { Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as $ACS from '@actions/profile/Action';

export default function Profile() {
  const counter = useSelector((state) => state.ProfileReducer.counter);

  const counterInc = () => {
    $ACS.increment();
  };
  const counterDec = () => {
    $ACS.decrement();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    
        <Text style={{ fontFamily: 'Inter-Black' }}>
          Ali Burhan Keskin
        </Text>  

        <Text style={{ marginTop: 30, fontSize: 30, color: 'red' }}>
          {counter}
        </Text>

        <View style={{ marginTop: 30 }}>        
          <Button onPress={counterInc} title="Increment" />
        </View>

        <View style={{ marginTop: 30 }}>        
          <Button onPress={counterDec} title="Fecrement" />
        </View>
      
      </View>
    </SafeAreaView>
  );
}

