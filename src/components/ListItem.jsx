import { View,Text,StyleSheet } from "react-native";
import {Feather} from '@expo/vector-icons';
import { weatherType } from "../utils/weatherType";
import moment from 'moment';
const ListItem=({dt_txt,min,max,condition})=>{
    const {date,temp,item}=styles;
    return(
        <View style={item}>
            <Feather name={weatherType[condition].icon} size={50} color={"white"}/>
            <View style={styles.dateWrapper}>
            <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
            <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
            </View>
            
            <Text style={temp}>{`${Math.round(min)}°c/${Math.round(max)}°c`}</Text>
            
        </View>
    )

}
const styles=StyleSheet.create({
    temp : {
        color: "white",
        fontSize: 20
    },
    date: {
        color : "white",
        fontSize: 15
    },
    item:{
        padding: 20,
        marginVertical: 8,
        marginHorizontal : 16,
        flexDirection:"row", 
        alignItems: "center",
        justifyContent: "space-around",
        borderWidth: 5,
        backgroundColor: "pink",
        borderRadius: 20,
        borderColor: "pink"
    },
    dateWrapper:{
        flexDirection: "column",
        gap:4
    }
   
})
export default ListItem;