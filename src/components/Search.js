import React, {useState} from 'react';
import {View,TextInput, StyleSheet} from 'react-native';

const Search = () => {
  const [q, setQ] = useState('');

  const handleChange = (e) => setQ(e.target.value);

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Search Your Image"
        value={q}
        onChange={handleChange}
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
