import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,FlatList,StatusBar,ImageBackground } from 'react-native';
import ListItem from '../components/ListItem';
const UpcomingWeather = ({weatherData}) => {
      
    const renderItem=({item})=><ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />;
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground  source={require('../../assets/upcoming-weather.jpg')} style={styles.image}>

        
     
    <FlatList data={weatherData} renderItem={renderItem} keyExtractor={(item)=>item.dt_txt}/>
    
    
    </ImageBackground>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    container : {
        flex : 1,
        marginTop:  StatusBar.currentHeight || 0,
        backgroundColor : 'royalblue'
    },
    image:{
        flex: 1
    }
})
export default UpcomingWeather;