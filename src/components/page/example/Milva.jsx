/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Text, View, Button } from 'react-native';
import { getStoreDataAsync } from '@helpers/storage';
import * as $AC from '@actions/Auth'; 

export default function Milva() {

  const _onRequestAsync = async () => {
  
    const loginDto = {      
      userName: 'username',
      password: 'password'
    };

    await $AC.signInAsync(loginDto);
  
  };
  
  const _onStorageAsync = async () => {

    // await storeData('new', { id: '1' });
    const storeData = await getStoreDataAsync('new');    
    alert(JSON.stringify(storeData));
  
  };

  return (   
    <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>  

      <Text style={{ fontFamily: 'Inter-Black' }}>
        MİLVASOFT      
      </Text>

      <View style={{ marginTop: 10 }}>
        
        <Button onPress={_onRequestAsync} title="SignIn" />

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

