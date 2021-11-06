/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import React, { useCallback } from 'react';
import Milva from '@components/page/example/Milva';
import { SafeAreaView } from 'react-native-safe-area-context';
import GetLang from '@helpers/localization';
import { useFocusEffect } from '@react-navigation/native';
import { Text, View } from 'react-native';

function Example() {

  // ! Used to render after the page is opened
  useFocusEffect(
    useCallback(() => {

      //  _getDataAsync();

    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1, }}>
      
      <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>

        <Milva />

        <Text style={{ fontFamily: 'Black' }}>
          {GetLang('name')}
        </Text>

        <Text style={{ fontFamily: 'Black' }}>
          {GetLang('welcome')}
        </Text>
      </View>

    </SafeAreaView>
  );

}


export default Example;
