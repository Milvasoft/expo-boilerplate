import React from 'react';
import {
  StyleSheet, TouchableWithoutFeedback, View, Text 
} from 'react-native';
import { MaterialIcons, } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Color from '@assets/color';
import { hp, wp } from '@helpers/responsive';
  
 type Props = {
   title: string
 };

const PageHaeder : React.FC<Props> = ({ title }) => {  

  const navigation = useNavigation();


  const _goback = () => {

    navigation.goBack();
      
  };  
    
  return (
    <View style={Styles.root}>

      <View style={Styles.goBackIcon}>
        <TouchableWithoutFeedback onPress={_goback}>           
          <MaterialIcons
            name="arrow-back-ios"
            size={wp(7)}
            color={Color().primary}
          />
        </TouchableWithoutFeedback>          
      </View>

      <Text style={Styles.title}>{title}</Text> 

      <View />

    </View>
  );

};

export default PageHaeder;


const Styles = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp(8),
    borderBottomColor: Color().primary,
    borderBottomWidth: 1,
  },

  goBackIcon: {
    paddingLeft: wp(3),        
  },

  title: {
    color: Color().primary,
    fontSize: wp(6),
    paddingRight: wp(3),        
    fontWeight: 'bold',
  }
});
      
