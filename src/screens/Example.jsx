import React from 'react';
import { Text, View, InteractionManager } from 'react-native';
import i18n from 'i18n-js';
import Milva from '@components/Milva';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Example() {

  // ! Used to render after the page is opened
  React.useEffect(() => {

    InteractionManager.runAfterInteractions(() => {
      // Process
    });
    return () => {
      // Clear Process
    };
  
  }, []);

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

