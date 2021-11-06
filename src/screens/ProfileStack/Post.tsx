/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import React from 'react';
import { View, Text } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import Routes, { ProfileStackParams } from '@utils/Routes';

function Post() {

  const route = useRoute<RouteProp<ProfileStackParams, Routes.Post>>();
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

export default Post;
