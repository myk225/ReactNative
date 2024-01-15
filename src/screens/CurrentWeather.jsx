import React from 'react'
import { View,Text,SafeAreaView,StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utils/weatherType';

function CurrentWeather({weatherData}){
  console.log(weatherType)
  const {main:{temp,feels_like,temp_max,temp_min},weather}=weatherData;
  const weatherCondition=weather[0].main;  
  return(
    <SafeAreaView style={[styles.wrapper,{backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
      <View style={styles.container}>
      <Feather name={weatherType[weatherCondition].icon} size={100} color="white" /> 
      <Text style={styles.temp}>
        {temp}°
      </Text>
      <Text style={styles.feels}>
        {`feels like ${feels_like}`} 5
      </Text>
      <View style={styles.highLowCont}>
        <Text style={styles.highLow}>{`High : ${temp_max}° `}</Text>
        <Text style={styles.highLow}>{`Low : ${temp_min}°`}</Text>
      </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>
          {weather[0].description}
        </Text>
        <Text style={styles.message}>{weatherType[weatherCondition].message}</Text>
      </View> 
      
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container :{
    flex:1,
    alignItems:"center" ,
    justifyContent: "center"
  },
  wrapper:{
    backgroundColor:"pink",
    flex : 1,
  },
  temp : {
    color:'black',
    fontSize : 48
  },
  feels:{
    fontSize:30,
    color : "black"
  },
  highLowCont:{
    flexDirection: "row"
  },
  highLow:{
    color:'black',
    fontSize: 20  
  },
  bodyWrapper:{
    justifyContent: "flex-end",
    alignItems:"flex-start",
    paddingLeft:25,
    marginBottom:40
  },
  description:{
    fontSize:48
  },
  message:{
    fontSize:30
  }
})

export default CurrentWeather;