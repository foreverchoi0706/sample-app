import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

const Show = ({data, navigation}) => {
  return (
    <FlatGrid
      itemDimension={120}
      data={data}
      renderItem={({item}) => (
        <Image
          style={styles.image}
          source={{uri: item.webformatURL}}
          onTouchEnd={() => navigation.navigate('Detail', item)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 125,
    borderRadius: 5,
  },
});

export default Show;
