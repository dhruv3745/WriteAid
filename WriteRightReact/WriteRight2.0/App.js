import {View, Text, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {About} from './navigation/pages/example-page'
import {SearchClass} from './navigation/pages/search-class';
import MainContainer from './navigation/MainContainer';


function App() {
  return(
    <MainContainer/>
  );
};


export default App;
