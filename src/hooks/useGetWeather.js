
import * as Location from "expo-location";
import {useState,useEffect} from 'react';
import { API_KEY } from "@env"
export const useGetWeather=()=>{
    const [loading,setLoading]=useState(true);
  const [lat,setLat]=useState(null);
  const [lon,setLon]=useState(null);
  const [error,setError]=useState(null);
  const [weather,setWeather]=useState([]);
  const fetchWeather=async()=>{
    try {
      const response=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    const data=await response.json();
    setWeather(data);
    console.log("setted weather")
    setLoading(false);
    } catch (error) {
      setError("count not fetch weather");
    }finally{
      console.log("in finally")
      setLoading(false); 
    }
    
  }
  console.log(API_KEY)
  console.log(lat,lon);
  useEffect(()=>{
    (async()=>{
      let {status}=await Location.requestForegroundPermissionsAsync();
      if(status!=='granted'){
        setError("Permission to accesses location was denied");
        return
      }
      let location=await Location.getCurrentPositionAsync();
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
     await fetchWeather();
      })()
  },[lat,lon])
  return [loading,error,weather];
}