/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Text, View, Button } from 'react-native';
import { getStoreData } from '@helpers/storage';
import * as $AC from '@actions/auth/Action'; 

export default function Milva() {
  const onRequest = async () => {  
    const loginDto = {
      userName: 'username',
      password: 'password'
    };
    await $AC.signIn(loginDto);
  };
  const onStorage = async () => {
    // await storeData('new', { id: '1' });
    const storeData = await getStoreData('new');    
    alert(JSON.stringify(storeData));
  };

  return (   
    <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>  

      <Text style={{ fontFamily: 'Inter-Black' }}>
        MİLVASOFT      
      </Text>

      <View style={{ marginTop: 10 }}>
        
        <Button onPress={onRequest} title="SignIn" />

      </View>
      
      <View style={{ marginTop: 10 }}>
        <Button
          onPress={() => {
            // eslint-disable-next-line no-throw-literal
            throw 'Crash!';
          }}
          title="Crash"
        />

      </View>
    </View>    

  );
}

