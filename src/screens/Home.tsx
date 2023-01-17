/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import translate from '@helpers/localization';
import { useFocusEffect } from '@react-navigation/native';
import {
  Text, 
  View, 
  StyleSheet,
  Button
} from 'react-native';
import { wp } from '@src/helpers/responsive';
import { showToast } from '@src/modules/app/services/appService';

function Home() {

  // ! Used to render after the page is opened
  useFocusEffect(
    useCallback(() => {

      //  _getDataAsync();

    }, [])
  );

  return (
    <SafeAreaView style={styles.safeView}>
      
      <View style={styles.root}>

        <View style={styles.container}>
          <Text style={styles.fontBlack}>
            MİLVASOFT
          </Text>
        </View>

        <Button onPress={() => showToast('ShowToast')} title=" Show Toast" />

        <Text style={styles.fontBlack}>
          {translate('name')}
        </Text>

      </View>

    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  
  safeView: {
    flex: 1,
  },

  root: {
    flex: 1,
    justifyContent: 'space-around', 
    alignItems: 'center'
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  fontBlack: {
    fontFamily: 'Black',
    marginTop: 20,
    fontSize: wp(6),
  },

});

export default Home;
