import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useEffect} from 'react/cjs/react.development';
import {useDispatch, useSelector} from 'react-redux';
import {getImages} from '../util/reducer';

import Loading from "../components/common/Loading";

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
    return (
      <View>
        <Text>Errror</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Text>{JSON.stringify(data)}</Text>
    </ScrollView>
  );
};

export default Home;
