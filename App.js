import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Avatar, Button, Card, Title, Paragraph, Appbar, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Search from './bars/SearchBar';
import BottomBar from './bars/BottomBar';
import TopBar from './bars/TopBar';
import Navig from './navigation/Navigation'
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
}

export default function App() {
  return (

    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        {/* <TopBar/>
      <Search/> */}
        <Navig />
        {/*  <HomeScreen/>
    <ProductSheet/>
    <GamingScreen/> */}
        {/* <BottomBar/>
 */}       </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
