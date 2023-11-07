import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {
  StyleSheet, View, Text, SafeAreaView,
  TextInput, TouchableOpacity, ScrollView,
  Button, Image, ImageBackground
} from 'react-native';
import { useState, useEffect } from 'react';
import Splash from './Screens/Splash';
import HomeScreen from './Screens/HomeScreen';


const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Splash} /> 
      <Stack.Screen
      options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>

    </NavigationContainer>
  );

}










{/* Styles for Components */ }
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-top',
  },
  dialog: {
    height: '60%',
    backgroundColor: '#642DD6',
    borderBottomRightRadius: 200

  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  textbox: {
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 30,
    marginTop: 40
  },
  input: {
    padding: 15,
    height: 50,
    fontSize: 20,

    borderBottomWidth: 1,
    borderBottomColor: '#333',
    margin: 10
  },
  button: {
    height: 45,
    width: '80%',
    backgroundColor: '#F4D740',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  active:{
    height: 20, 
    width: 20,
    tintColor:'#6E2ED7'

  },
  inactive:{
    height: 20, 
    width: 20,
    tintColor:'grey'
  }

});
