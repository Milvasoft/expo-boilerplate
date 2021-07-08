import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Post() {

  const route = useRoute(); 
  const { id } = route?.params; 

  console.log(id);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Post
      </Text>
    </View>
  );

}
