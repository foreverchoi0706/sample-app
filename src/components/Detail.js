import React from 'react';
import {View, Text} from 'react-native';

const Detail = ({route}) => {
  return (
    <View>
      <Text>{JSON.stringify(route.params)}</Text>
    </View>
  );
};

export default Detail;
