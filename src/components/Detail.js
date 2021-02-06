import React from 'react';
import {View, Image, Text, StyleSheet, Button, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {FlatGrid} from 'react-native-super-grid';

const tagStyle = () => {
  return {
    borderRadius: 5,
    backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
    color: 'white',
    marginRight: 10,
    padding: 5,
  };
};

const Detail = ({route}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imgs}>
        <Image
          source={{
            uri: route.params.userImageURL
              ? route.params.userImageURL
              : 'https://www.h-z-g-maschinen.com/pimages/Disco-da-trapano-BSG26PRO-HM-extra-big-3579-034.png',
          }}
          style={styles.userImg}
        />

        <Image source={{uri: route.params.webformatURL}} style={styles.img} />
      </View>

      <View style={styles.tagsAndUserName}>
        <View style={styles.tags}>
          {route.params.tags.split(',').map((tag, index) => (
            <Text key={index} style={tagStyle()}>
              {tag}
            </Text>
          ))}
        </View>
        <Text style={styles.userName}>Artist : {route.params.user}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.infoText}> like : {route.params.likes}</Text>
        <Text style={styles.infoText}> views : {route.params.views}</Text>
        <Text style={styles.infoText}>
          downloads : {route.params.downloads}
        </Text>
        <Text style={styles.infoText}>
          favorites : {route.params.favorites}
        </Text>
      </View>

      <Button
        title="Go To Pixabay"
        onPress={() => Linking.openURL(route.params.pageURL)}></Button>

      <View>
        <Text>How Is It?</Text>
        {/* <FlatGrid
          itemDimension={120}
          data={[1, 2, 3, 4]}
          renderItem={({item}) => <Text>{item}</Text>}
        /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  imgs: {
    position: 'relative',
  },
  img: {
    width: '100%',
    height: 300,
    borderRadius: 5,
  },
  userImg: {
    width: '15%',
    height: 60,
    borderRadius: 100,
    marginRight: 5,
    position: 'absolute',
    zIndex: 999,
    top: 10,
    right: 10,
  },
  tagsAndUserName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tags: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontWeight: 'bold',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    fontWeight: 'bold',
  },
});

export default Detail;
