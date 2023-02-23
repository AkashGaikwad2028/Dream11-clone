import React from 'react'
import {Image, StyleSheet, View,Text} from "react-native"
import { TouchableOpacity } from 'react-native'
import { DrawerActions } from '@react-navigation/native'
// import { useDispatch } from 'react-redux'

export default function CustomeNavigationBar({onPress}) {

  return (
    <View>
<View style={{backgroundColor:"red",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:10,paddingVertical:10}}>
<TouchableOpacity onPress={onPress}><Image source={require("../Images/players.webp")} style={styles.player}/></TouchableOpacity>
    <Image  source={require("../Images/logo.webp")} style={{height:30,width:130}} />
    <Image  source={require("../Images/Bellicon.png")} style={{width:30,height:30}}/>
</View>
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