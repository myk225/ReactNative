import React from "react";
import {View,Text} from 'react-native';
const OurChlid=(props)=>{
    return(
        <View style={{height:200,width:200,backgroundColor:"red"}}>
            <Text>
                {props.message}
            </Text>
        </View>
    )
}

export default OurChlid;