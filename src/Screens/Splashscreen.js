import React ,{useEffect,useState}from 'react'
import {View,StyleSheet ,SafeAreaView,Text,Image,Dimensions, useWindowDimensions, ImageBackground} from "react-native"
import auth from "@react-native-firebase/auth"
import LinearGradient from 'react-native-linear-gradient'
// import { StyleSheet } from 'react-native/Libraries/StyleSheet/StyleSheet'


export default function Splashscreen({navigation}) {
    const [isUserLogin,setisUserLogin]=useState(false)

//    const width =Dimensions.get("screen")
//    const height =Dimensions.get("screen")

      useEffect(()=>{
        setTimeout(()=>{
            auth().onAuthStateChanged(user=>{
                const routename=user!== null ? "Home":"SiginIn";
                navigation.navigate(routename)
              })
        },3000)
      },[])
  return (
   <SafeAreaView >
    <ImageBackground 
       source={require("../Images/polka.jpg")}
    >
         <LinearGradient
        colors={[
            "black",
            '#FFFFFF00',
          '#FFFFFF00',
          "black",
          "black"
        ]}
        style={styles.linearGradient}
        start={{x: 1.15, y: 0.05}}
        end={{x: 0.7, y: 1.2}}>
   <Image
        source={require("../Images/splashscreen.webp")}
       style={{width:"100%",height:"100%"}}
        resizeMode="contain"
      /> 
        </LinearGradient>
      </ImageBackground>
   </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    // linearGradient: {
    //     flex: 1,
    //     borderRadius: 0,
    //   },
})