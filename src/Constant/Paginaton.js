import React from 'react'
import {View,Text, StyleSheet,Animated, Dimensions} from "react-native"

const {width}=Dimensions.get("screen")

export default function Paginaton({data,scrollX}) {
  return (
   <View style={styles.container}>
{ 
    data.map((_,id)=>{
        const inputRange=[(id-1)*width,id*width,(id+1)*width]
        const dotWidth =scrollX.interpolate({
            inputRange,
            outputRange:[12,30,12],
            extrapolate:"clamp"
        })
        return(
            <Animated.View key={id.toString()}style={[styles.dot,{width:dotWidth}]}/>
        )
    })
}
   </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:'center',
        // backgroundColor:"red",
        position:"relative",
        bottom:20
    },
    dot:{
        width:12,
        height:6,
        borderRadius:50,
        backgroundColor:"white",
        marginHorizontal:3
    }

})