import { View,Text } from "react-native";
import {Feather} from "@expo/vector-icons"
const IconText=({viewStyle,name,textStyle,text})=>{
    return(
        <View style={viewStyle}>
        <Feather name={name} size={50} color={"white"}/>
        <Text style={textStyle}>{ text ?? 8000 }</Text>
        </View>
    )  
}
export default IconText;