import React from 'react';
import { Text, View } from 'react-native';
import i18n from 'i18n-js';
import Milva from '@components/Milva';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Example() {

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
       
        <Milva />

        <Text style={{ fontFamily: 'Inter-Black' }}>
          {i18n.t('name')}   
        </Text>  

        <Text style={{ fontFamily: 'Inter-Black' }}>
          {i18n.t('welcome')}  
        </Text>       
      </View>
    </SafeAreaView>
  );

}

