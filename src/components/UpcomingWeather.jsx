import React from 'react'
import { SafeAreaView,StyleSheet,View,Text,FlatList,StatusBar,ImageBackground } from 'react-native';
import {Feather} from '@expo/vector-icons';
import OurChlid from './OurChild';
const Data=[
    {dt_txt:"2023-02-08 12:00:00",
    main : {
        temp_max:8.55,
        temp_main  : 7.55
    },
    weather:[
        {
            main : "clear"
        }
    ]
},

{dt_txt:"2023-02-08 19:00:00",
main : {
    temp_max:8.55,
    temp_main  : 7.55
},
weather:[
    {
        main : "Clouds"
    }
]
},

{dt_txt:"2023-02-08 23:00:00",
main : {
    temp_max:8.55,
    temp_main  : 7.55
},
weather:[
    {
        main : "Rain"
    }
]
},
]
const Item=(props)=>{
    const {dt_txt,min,max,condition}=props;
    return(
        <View style={styles.item}>
            <Feather name="sun" size={50} color={"white"}/>
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    )
}
const UpcomingWeather = () => {
    const renderItem=({item})=><Item condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_main} max={item.main.temp_max}/>;
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground  source={require('../../assets/upcoming-weather.jpg')} style={styles.image}>

        
        <Text>Upcoming Weather</Text>
    <FlatList data={Data} renderItem={renderItem} keyExtractor={(item)=>item.dt_txt}/>
    
    
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
    item:{
        padding: 20,
        marginVertical: 8,
        marginHorizontal : 16,
        flexDirection:"row", 
        alignItems: "center",
        justifyContent: "space-around",
        borderWidth: 5,
        backgroundColor: "pink"
    },
    temp : {
        color: "white",
        fontSize: 20
    },
    date: {
        color : "white",
        fontSize: 15
    },
    image:{
        flex: 1
    }
})
export default UpcomingWeather;