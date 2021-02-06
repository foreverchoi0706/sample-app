import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector,shallowEqual} from 'react-redux';
//components
import Search from './Search';
import Show from '../components/Show';
import Loading from '../components/Loading';
import Error from '../components/Error';
//reducer
import {getImages} from '../util/reducer';

const Home = ({navigation}) => {
  const {isLoaded, data, error} = useSelector((root) => root.images,shallowEqual);

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
