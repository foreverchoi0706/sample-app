import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Home from "./components/Home";

const Stack = createStackNavigator();

const App = () => {
  return <Home />;
};


export default App;
