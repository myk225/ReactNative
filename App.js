import Tabs from "./src/components/Tabs";
import { ActivityIndicator,View,StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const App=()=>{
  const [loading,error,weather]=useGetWeather();
   
  if(weather && weather.list && !loading){
    return (
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer>
      )
  }
    if(error){
      return <ErrorItem/>
    }
    return <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'blue'}/>
    </View>
  
  
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center"
  }
})
export default App;