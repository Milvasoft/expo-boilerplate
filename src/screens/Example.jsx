/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import React from 'react';
import { Text, View, InteractionManager } from 'react-native';
import Milva from '@components/page/example/Milva';
import { SafeAreaView } from 'react-native-safe-area-context';
import GetLang from '@helpers/localization';

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

        <Text style={{ fontFamily: 'Montserrat_900Black' }}>
          {GetLang('name')}   
        </Text>  

        <Text style={{ fontFamily: 'Montserrat_900Black' }}>
          {GetLang('welcome')}  
        </Text>       
      </View>
    </SafeAreaView>
  );

}

