
import React from "react"
import { View,Text, SafeAreaView,StyleSheet, ImageBackground,StatusBar } from "react-native"
import {Feather} from "@expo/vector-icons"
import IconText from "../components/IconText"
import moment from 'moment';
const City=({weatherData})=>{
    const {name,country,population,sunrise,sunset}=weatherData;
    return(
        <SafeAreaView style={styles.container}>
          <ImageBackground style={{flex:1}} source={require('../../assets/city_background.jpg')}>
          <Text style={[styles.city,styles.defaultText]}>
                {name}
           </Text>
           <Text style={[styles.country,styles.defaultText]}>{country}</Text>
            <IconText name={"user"} text={population} viewStyle={styles.populationWrapper} textStyle={styles.populationText}/>
           <View style={styles.riseSetWrapper}>
           <IconText name={"sunset"} text={moment(sunrise).format('h:mm:ss a')} viewStyle={styles.rise} textStyle={styles.riseText} text={"10:45:45 AM"}/>
            <IconText name={"sunset"} text={sunset} viewStyle={styles.rise} textStyle={styles.riseText} text={"10:45:45 PM"}/>
           </View>
          </ImageBackground>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container : {
        flex:1,
        marginTop: StatusBar.currentHeight || 0 
    },
    city:{
        fontSize:40,
    },
    country:{
        fontSize:30,
    },
    defaultText:{
        justifyContent: "center",
        alignSelf: "center",
        color: "white",
        fontWeight : "bold"
    },
    populationWrapper:{
        flexDirection :"row",
        alignItems: "center",
        justifyContent: "center",
        marginTop:30

    },
    populationText:{
        fontSize : 25,
        color : "white",
        marginLeft:7.5,
        fontWeight : "bold"
    },
    riseSetWrapper :{
        marginTop: 40,
        flexDirection: "row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    rise:{
        alignItems:"center",
        gap:10
    },
    riseText:{
        fontSize: 20,
        color:"white",
        fontWeight: "400"
    }

})

export default City;