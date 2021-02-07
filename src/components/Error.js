import React from 'react';
import {View, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Error = () => {
  <View style={styles.view}>
    <MaterialIcons name="error" size={30} />
  </View>;
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Error;
