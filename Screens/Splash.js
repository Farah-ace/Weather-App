import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {
  StyleSheet, View, Text, SafeAreaView,
  TextInput, ScrollView,
  Button, Image, ImageBackground, Pressable
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';


function Splash(props) {
  const [city, setCity] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.innerContainer}
        >
        <View style={styles.textbox}>
          <Text style={{ ...styles.text,marginTop: 50, }}>Find City Weather</Text>
        </View>
        <Text style={{ ...styles.text, fontSize: 20, textAlign: 'center' }}>Enter your city name</Text>

        <TextInput
          style={styles.txinput}
          placeholder="City"
          onChangeText={city => setCity(city)}
        />

        <Pressable style={styles.button} onPress={() => {
          props.navigation.navigate('HomeScreen', {
            city: city
          });
        }}>
          <Text style={{ ...styles.text, fontSize: 20 }}>Find</Text>
        </Pressable>


      </ImageBackground >


    </SafeAreaView >
  );

}



export default Splash;





{/* Styles for Components */ }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141528',
    //opacity: 0.8
    

  },
  innerContainer: {
    flex: 1,
    //justifyContent: 'flex-end',
  },
  dialog: {
    height: '35%',
    width: '100%',
    backgroundColor: '#B38588',
    borderBottomStartRadius: 40

  },
  txinput: {
    height: 50,
    width: '80%',
    borderRadius: 20,
    borderColor: '#6066c4',
    borderWidth: 2,
    margin: 12,
    color: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,

  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',

  },
  textbox: {
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 10,
  },
  button: {
    height: 50,
    width: '50%',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6066c4',
    

  },

});