import React from 'react'
import {View,Text,Image, StyleSheet,TouchableNativeFeedback} from "react-native"

export default function MatchCards({item}) {

    console.log("itemmmmmmmmmmmmmm",item)

  return (
    <>
    <TouchableNativeFeedback activeOpacity={0.6} hitSlop={{top: 100, left: 50, right: 50, bottom: 100}} pressRetentionOffset={200}>
   <View style={[Styles.main,{marginVertical:10}]}>
   <View style={[Styles.firstContainer,{paddingHorizontal:15,borderBottomWidth:0.5,marginHorizontal:5,paddingBottom:5,borderColor:"grey",paddingTop:10}]}>
    <Text style={[Styles.titel]}>T20 World cup</Text>
    <View>
    <Text style={[Styles.titel,{color:"#00b300",fontWeight:"bold"}]}>Linesup Out</Text>
    </View>
     <Image style={{width:20,height:20,tintColor:"green"}}source={require("../Images/Bellicon.png")} />
   </View>
   <View  style={[Styles.firstContainer,{paddingHorizontal:15}]}>
    <View style={Styles.columnContainer}>
        <Text style={{color:"#0f0f0a",fontSize:18}}>India</Text>
        <Image source={require("../Images/india.png")}/>
    </View>
    <View style={Styles.columnContainer}>
        <Text style={{color:"red",fontWeight:600,fontSize:15}}>38s</Text>
        <Text>Today,3:45pm</Text>
    </View>
    <View style={Styles.columnContainer}>
    <Text style={{color:"#0f0f0a",fontSize:18}}>India</Text>
        <Image source={require("../Images/india.png")}/>
    </View>
   </View>
   <View  style={[Styles.firstContainer,{backgroundColor:"#ebebe0",paddingVertical:10,paddingHorizontal:15,borderBottomRightRadius:10,borderBottomLeftRadius:10,}]}>
   <View style={Styles.firstContainer}>
    <Text style={[Styles.mega,{marginRight:5}]}>MEGA</Text>
    <Text style={{color:"black",fontWeight:"700",fontSize:16}}>1.5 Lakhs</Text>
   </View>
   <View style={Styles.firstContainer}>
    <Image source={require("../Images/jersey.png")} style={[Styles.image,{marginRight:20}]}/>
    <Image style={Styles.image}source={require("../Images/tv.png")}/>
   </View>
   </View>
   </View>
   </TouchableNativeFeedback>
   </>
  )
}

const Styles=StyleSheet.create({
main:{
// paddingHorizontal:5,
backgroundColor:"white",
marginHorizontal:10,
borderRadius:10,
// paddingVertical:10,
shadowOffset: {width: -2, height: 4},  
shadowColor: '#fff',  
shadowOpacity: 0.6,  
shadowRadius:10,  
elevation:25,
borderWidth:2,
borderColor:"#ccccb3"
},
 firstContainer:{
     flexDirection:"row",
     justifyContent:"space-between"
    },
columnContainer:{
 flexDirection:"column",
 justifyContent:"center",
 alignItems:"center"
},
    image:{
      width:20,
      height:20
    },
    titel:{
        fontSize:15.5
    }
    ,
    mega:{
     fontWeight:"bold",
     fontSize:13.5,
     letterSpacing:1,
     color:"#00b300",
     backgroundColor:"#b3ffb3",
     paddingHorizontal:4,
     paddingVertical:2,
     borderRadius:5,
     borderColor:"#80ff80",
     borderWidth:1
    }
})