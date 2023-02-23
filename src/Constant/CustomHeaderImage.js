import React from 'react'
import {View,Image,StyleSheet} from "react-native"

export default function CustomHeaderImage() {
  return (
  <View>
  <Image source={require("../Images/players.webp")} style={styles.player}/> 
  </View>
  )
}

const styles=StyleSheet.create({
    player:{
        width:10,
        height:10,
        borderWidth:2,
        backgroundColor:"white",
        borderColor:"white",
        borderRadius:300,padding:20
      }
  })