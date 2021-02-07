import React from 'react';
import {StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Loading = () => (
  <View style={styles.view}>
    <AntDesign name="clockcircle" size={30} />
  </View>
);

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
