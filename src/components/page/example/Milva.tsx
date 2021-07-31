/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Text, View, Button } from 'react-native';
import * as $AC from '@actions/Account'; 

  
const Milva : React.FC = () => {  

  const _onRequestAsync = async () => {
  
    const loginDto = {      
      userName: 'username',
      password: 'password'
    };

    await $AC.signInAsync(loginDto);
  
  };  

  return (   
    <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>  

      <Text style={{ fontFamily: 'Montserrat_900Black' }}>
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

};

export default Milva;
