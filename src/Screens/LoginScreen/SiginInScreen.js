import React, { useRef } from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
  Animated
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Paginaton from '../../Constant/Paginaton';
import SlideItem from '../../Constant/SlideItem';
import Data from '../../Data/SlideItemData';
// import ImageSlider from "react-native-image-slider"
export default function SiginInScreen({navigation}) {
  const deviceWidth =Dimensions.get("window").width
const deviceHeight =Dimensions.get("window").height

const scrollX=useRef(new Animated.Value(0)).current
const handelscroll=(event)=>{
Animated.event(
  [
    {
      nativeEvent:{
        contentOffset:{
          x:scrollX,
        },
      },
    },
  ],
  {
    useNativeDriver:false,

  }
  
  )(event)
}


const TranslateYimage=new Animated.Value(40);
Animated.timing(TranslateYimage)


const HandelRegister=()=>{
  navigation.navigate("Register & Play")
}

  return (

    <ImageBackground
      source={require('../../Images/polka.jpg')}
      style={{width:deviceWidth,height:deviceHeight}}>
      <LinearGradient
        colors={[
          'black',
          'black',
          '#FFFFFF00',
          // '#e60000',
          '#FFFFFF00',
          'black',
          'black',
          'black',
          'black',
          'black',
        ]}
        style={styles.linearGradient}
        start={{x: 1.15, y: 0.05}}
        end={{x: 0.7, y: 1.2}}>
        <View  style={{width:deviceWidth,height:deviceHeight}}>
          <View style={styles.logo}>
            <Image
              source={require('../../Images/logo.webp')}
              style={styles.logo1}
            />
          </View>
          {/* <View style={styles.Container}> */}
    <FlatList
    data={Data}
    renderItem={({item}) =><SlideItem image={item.bgimage} titel={item.Titel} summary={item.Description} contenst={item.image}/>}
   horizontal
   pagingEnabled
   snapToAlignment="center"
   showsHorizontalScrollIndicator={false}
   onScroll={handelscroll}
   />
  
<View>
<Paginaton data={Data} scrollX={scrollX}/>
</View>
        <View style={styles.BtnContainer}>
            <TouchableOpacity style={styles.Btn} onPress={HandelRegister}>
              <Text style={styles.endtext}>REGISTER</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 2,
                marginHorizontal: 10,
              }}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 500}}>
                Invited by a friend ?
              </Text>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 500}}>
                Already a user ?
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 2,
                marginHorizontal: 10,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                Enter a code
              </Text>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}} onPress={()=>{navigation.navigate("LOG IN")}}>
                Log In
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 0,
  },
  logo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    marginTop: 20,
  },
  logo1: {
    // flex:1,
    paddingTop: 10,
    width: 200,
    height: 47,
  },
  player: {
    width: '90%',
    height: '50%',
    marginTop: 10,
    marginHorizontal: 20,
  },
  player1: {
    width: 20,
    height: 30,
    paddingHorizontal: 15,
    marginHorizontal: 20,
  },
  info: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  description: {
    color: '#a6a6a6',
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 25,
    marginTop: 10,
  },

  BtnContainer: {
    marginBottom:40,
  },
  Btn: {
    // marginTop: 10,
    backgroundColor: 'white',
    paddingVertical: 17,
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 8,
  },
  endtext: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    fontFamily: 'Cochin',
  },
});
