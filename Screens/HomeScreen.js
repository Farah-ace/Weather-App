import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {
  StyleSheet, View, Text, SafeAreaView,
  TextInput, ScrollView, FlatList,
  Button, Image, ImageBackground, Pressable
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function HomeScreen(props) {
  //let cityName = props.route.params.city;
  const [response, setResponse] = useState("");
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(true);

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.route.params.city}&appid=0199c865dbfaf6a9c2250521d5bd7f5c&units=metric`;


  // let apiDays = `http://dataservice.accuweather.com/forecasts/v1/daily/15day/${apiUrl}`;

  let apiDays = `https://api.openweathermap.org/data/2.5/forecast/?q=${props.route.params.city}&cnt=7&units=metric&appid=0199c865dbfaf6a9c2250521d5bd7f5c`;
  let weatherData;
  let daysData;


  async function getApiData() {
    weatherData = await axios.get(
      apiUrl
    );
    setResponse(weatherData);
    setLoading(false)
  }
  async function getApiData1() {
    daysData = await axios.get(
      apiDays
    );

    setDays(daysData.data.list);
    setLoading(false)
  }
  useEffect(() => {

    getApiData();
    getApiData1();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.innerContainer}>
        <View style={styles.dialog}>



          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column' }}>
              {response ? <Text style={{ ...styles.text, marginTop: 5, marginLeft: 10, fontWeight: 'bold',}}>
                {response.data.name}, {response.data.sys.country}</Text> : null}
              {response ? <Text style={{ ...styles.text, fontSize: 15, marginLeft: 15 }}>
                {response.data.weather[0].description}</Text>
                : null}
            </View>
          
          {response ? <Image source={`https://openweathermap.org/img/w/${response.data.weather[0].icon}.png`} style={{ height: 150, width: 200 }} /> : null}

          </View>


         
          <View style={styles.textbox}>
            {response ? <Text style={{ ...styles.text, fontSize: 50 }}>
              {(response.data.main.temp).toFixed()}°C</Text> : null}
          </View>

          <View style={styles.textbox}>
            {response ? <Text style={{ ...styles.text, fontSize: 12, marginBottom: 30, marginTop: 10 }}>   Feels like {(response.data.main.feels_like).toFixed()}°C</Text> : null}
          </View>






          {/* <View style={{ flexDirection: 'row' }}>
            {response ? <Text style={{ ...styles.text, color: 'black', fontSize: 12, marginTop: 10, marginLeft: 60 }}>
              Min-Temp {(response.data.main.temp_min).toFixed()}°C</Text> : null}

            {response ? <Text style={{ ...styles.text, color: 'black', fontSize: 12, marginTop: 10, marginLeft: 60 }}>
              Max-Temp {(response.data.main.temp_max).toFixed()}°C</Text> : null}
          </View> */}

          <View style={{ ...styles.flat, width: '95%', height: 90 }}>

            <View style={{ flexDirection: 'row', marginTop: 30, }}>
              <Image source={require('../icons/humidity.png')} style={{ height: 30, width: 30, marginLeft: 20 }} />
              {response ? <Text style={{ ...styles.text, fontSize: 12, marginTop: 10, marginLeft: 5 }}>
                {response.data.main.humidity}%</Text> : null}

              <Image source={require('../icons/visibility.png')} style={{ height: 30, width: 30, marginLeft: 20 }} />
              {response ? <Text style={{ ...styles.text, fontSize: 12, marginTop: 10, marginLeft: 5 }}>
                {response.data.visibility}</Text> : null}

              <Image source={require('../icons/wind.png')} style={{ height: 30, width: 30, marginLeft: 20 }} />
              {response ? <Text style={{ ...styles.text, fontSize: 12, marginTop: 10, marginLeft: 5, marginBottom: 40 }}>
                {response.data.wind.speed} km/h</Text> : null}
            </View>
          </View>
          <Text style={{ ...styles.text, marginLeft: 10, marginTop: 20, fontSize: 15 }}>Weekly Forcast</Text>


          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={days}
            keyExtractor={(item, index) => item}

            renderItem={({ item }) => {
              return (


                <View style={styles.flat}>

                  {days ? <Image source={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} style={{ height: 40, width: 40, margin: 10 }} /> : null}
                  {days ? <Text style={{
                    ...styles.text,
                    margin: 5, fontWeight: 'bold', fontSize: 15,
                  }}>{(item.main.temp).toFixed()}°C</Text> : <Text>show some data </Text>}


                </View>


              )
            }}
            //numColumns={7}
          />

        </View>

      </ImageBackground>


    </SafeAreaView>
  );

}










{/* Styles for Components */ }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141528',
    //opacity:0.8

  },
  flat: {
    height: 120,
    width: 60,
    //justifyContent: 'space-between',
    //flexDirection: 'row',
    flexWrap: "wrap",
    margin: 10,
    backgroundColor: '#18192B',
    borderRadius: 30
  }
  ,
  innerContainer: {
    flex: 1,
    justifyContent: 'centre',
    alignItems: 'center'
  },
  dialog: {
    marginTop: 40,
    height: '85%',
    width: '90%',
    backgroundColor: '#0B0C1E',
    borderRadius: 20,
    //opacity: '0.8'

  },
  txinput: {
    height: 50,
    width: '80%',
    borderRadius: 20,
    borderColor: '#243543',
    borderWidth: 2,
    margin: 12,
    color: 'black',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,

  },

  text: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Roboto'
  },
  textbox: {
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    height: 50,
    width: '50%',
    backgroundColor: 'black',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',

  },

});













