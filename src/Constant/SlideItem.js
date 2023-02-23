import React from 'react'
import {View,Text,Image,ImageBackground,StyleSheet, Dimensions,Animated, Easing} from "react-native"

export default function SlideItem( {image,summary,titel,contenst}) {

    
const deviceWidth =Dimensions.get("screen").width
const deviceHeight =Dimensions.get("screen").height


// const translateYimage=new Animated.Value(40);
// Animated.timing(translateYimage,{
//   toValue:0,
//   duration:1000,
//   useNativeDriver:true,
//   easing:Easing.bounce
// })


  return (
    <View style={{width:deviceWidth,height:deviceHeight}}>
        <Image
    source={{uri:image}}
    style={[styles.player]}
    resizeMode="contain"
  />
  {/* </View> */}
  <View style={{width: '100%', height: 50, alignItems: 'center'}}>
    <View
      style={{
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: 'gold',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
      }}>
      <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold'}}>
        OFFICIAL PARTNER:
      </Text>
      {/* <Image
    source={{uri:contenst}}
    style={[styles.player]}
    resizeMode="contain"
  /> */}
    </View>
  </View>
  <View
    style={{
      paddingHorizontal: 10,
      paddingHorizontal: 18,
    //   backgroundColor:"yellow"
    }}>
    <Text style={styles.info}>{titel}</Text>
    <Text style={styles.description}>
     {summary}
    </Text>
  </View>
  </View>
  )
}


const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      borderRadius: 0,
    },
    player: {
      width: '100%',
      height: '45%',
    },
    info: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 25,
      textAlign: 'center',
    //   backgroundColor:"yellow"
    },
    description: {
      color: '#a6a6a6',
      fontSize: 17,
      textAlign: 'center',
      lineHeight: 25,
      marginTop: 5,
    },
  
    endtext: {
      color: 'black',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      letterSpacing: 1,
      fontFamily: 'Cochin',
    },
    // player1: {
    //     width: '50%',
    //     height: '45%',
    //     position:"relative",
    //     bottom:"50%"
    //   },
  });
//   ,{
//     transform:[
//         {
//             translateY:ranslateYimage
//         }
//     ]
// }