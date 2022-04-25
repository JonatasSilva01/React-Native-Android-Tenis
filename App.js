import 'react-native-gesture-handler';

import React from 'react';
import AppLoading from 'expo-app-loading';
import Routes from './src/router';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';



export default function App() {

  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });
  
  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
    <>
      <StatusBar style="light" backgroundColor='#000' translucent={true}/>
      <Routes />
    </>
  );
}

{/*
  Falar do import expo-AppLoading
  Falar dos root
  Status bar traslucent
*/}
