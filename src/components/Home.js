import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
//components
import Search from './Search';
import Show from '../components/Show';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';
//reducer
import {getImages} from '../util/reducer';

const Home = ({navigation}) => {
  const {isLoaded, data, error} = useSelector((root) => root.images);

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
      <Show data={data.hits} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingBottom: 55,
  },
});

export default Home;
