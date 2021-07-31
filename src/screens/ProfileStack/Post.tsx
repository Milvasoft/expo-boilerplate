/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import React from 'react';
import { View, Text } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

type ParamList = {
  Post: {
    id?: string;
  };
};

const Post: React.FC = () => {

  const route = useRoute<RouteProp<ParamList, 'Post'>>();
  const { id } = route?.params; 

  console.log(id);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Post
      </Text>
    </View>
  );

};

export default Post;
