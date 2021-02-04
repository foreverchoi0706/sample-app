import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {FlatGrid} from 'react-native-super-grid';
import {useDispatch, useSelector} from 'react-redux';
//components
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';
//reducer
import {getImages} from '../util/reducer';
import Search from './Search';

const Home = () => {
  const {isLoaded, data, error} = useSelector((root) => root.getImages);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  if (!isLoaded) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.view}>
      <Search />
      <FlatGrid
        itemDimension={120}
        data={data.hits}
        renderItem={({item}) => (
          <Image
            style={styles.image}
            source={{uri: item.webformatURL}}
            onTouchEnd={() => alert(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingBottom: 55,
  },
  textInput: {
    padding: 15,
  },
  buttonsView: {
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: 125,
    borderRadius: 5,
  },
});

export default Home;
