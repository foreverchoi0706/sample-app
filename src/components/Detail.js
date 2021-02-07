import React, {useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  Linking,
  ScrollView,
} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//reducer
import {getRelevants} from '../util/reducer';
import Loading from './Loading';
import Show from './Show';

const tagStyle = () => ({
  borderRadius: 5,
  backgroundColor:
    '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6),
  color: 'white',
  marginRight: 10,
  padding: 5,
});

const Detail = ({navigation, route}) => {
  const {isLoaded, data, error} = useSelector(
    (root) => root.relevants,
    shallowEqual,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRelevants(route.params.tags.split(',')[0]));
  }, [route.params.id, dispatch]);

  return (
    <View style={styles.container}>
      <Button
        title="Go To Pixabay"
        onPress={() => Linking.openURL(route.params.pageURL)}
      />
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
        <Text style={styles.userName}>
          <FontAwesome name="user" size={12} color="#000000" />
          &nbsp;
          {route.params.user}
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.infoText}>
          <AntDesign name="like1" size={12} color="#000000" />
          &nbsp;
          {route.params.likes}
        </Text>
        <Text style={styles.infoText}>
          <MaterialIcons name="remove-red-eye" size={12} color="#000000" />
          &nbsp;
          {route.params.views}
        </Text>
        <Text style={styles.infoText}>
          <MaterialIcons name="file-download" size={12} color="#000000" />
          &nbsp;
          {route.params.downloads}
        </Text>
        <Text style={styles.infoText}>
          <MaterialIcons name="favorite" size={12} color="#000000" />
          &nbsp;
          {route.params.favorites}
        </Text>
      </View>

      <View>
        {!isLoaded && <Loading />}
        {error && <Error />}
        {data && <Show data={data.hits} navigation={navigation} />}
      </View>
    </View>
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
    top: 5,
    right: 5,
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
    justifyContent: 'space-around',
  },
  infoText: {
    fontWeight: 'bold',
  },
  relevantImg: {
    width: '100%',
    height: 125,
    borderRadius: 5,
  },
});

export default Detail;
