import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
//reducer
import {searchImages} from '../util/reducer';

const Search = () => {
  const [q, setQ] = useState('');

  const dispatch = useDispatch();

  const handleChangeText = (q) => setQ(q);

  const handleSubmitEditing = () => {
    dispatch(searchImages(q));
  };

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Search Your Image"
        value={q}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    padding: 15,
  },
});

export default Search;
