import React from 'react'
import {View,Text,StyleSheet,Image} from "react-native"
import {DrawerContentScrollView,DrawerItemList,DrawerItem} from "@react-navigation/drawer"
import AntDesign from "react-native-vector-icons/AntDesign"
import Balance from '../Screens/PrivateScreens/Drawer/Balance'
import { useNavigation } from '@react-navigation/native'

export default function CustomeDrwer(props) {

  // const navigation =useNavigation()

  return (
<View style={{width:"100%",height:"100%"}}>
    <DrawerContentScrollView {...props} 
    contentContainerStyle={{
     marginBottom:12,
     zIndex:100
    }}

    >
       <View style={{backgroundColor:"black",padding:20,flexDirection:"row",alignItems:"center"}}>
<Image source={require("../Images/players.webp")} style={styles.player}/>
<View>
<Text style={{color:"white" ,marginLeft:20,fontWeight:"bold",fontFamily:"Robto-Medium"}}>Dream11</Text>
<Text style={{color:"brown" ,marginLeft:20,marginTop:5,fontWeight:700}}>Skill Score :575</Text>
</View>
       </View>
    <DrawerItemList {...props} />
    {/* <DrawerItem
    icon={({ color, size }) => <AntDesign name="home-outline" size={size} color={color} />}
    label="Balance"
    onPress={() => {props.navigation.navigate("Balance")}}
    
    />
      <DrawerItem
    icon={({ color, size }) => <AntDesign name="home-outline" size={size} color={color} />}
    label="Collect"
    onPress={() => {props.navigation.navigate("Collect")}}
    />
      <DrawerItem
    icon={({ color, size }) => <AntDesign name="home-outline" size={size} color={color} />}
    label="ChampionClub"
    onPress={() => {props.navigation.navigate("ChampionClub")}}
    />
      <DrawerItem
    icon={({ color, size }) => <AntDesign name="home-outline" size={size} color={color} />}
    label="FindPeopel"
    onPress={() => {props.navigation.navigate("FindPeopel")}}
    />
      <DrawerItem
    icon={({ color, size }) => <AntDesign name="home-outline" size={size} color={color} />}
    label="HelpSupports"
    onPress={() => {props.navigation.navigate("HelpSupports")}}
    />
      <DrawerItem
    icon={({ color, size }) => <AntDesign name="home-outline" size={size} color={color} />}
    label="HowToPlay"
    onPress={() => {props.navigation.navigate("HowToPlay")}}
    />
      <DrawerItem
    icon={({ color, size }) => <AntDesign name="home-outline" size={size} color={color} />}
    label="More"
    onPress={() => {props.navigation.navigate("More")}}
    />
      <DrawerItem
    icon={({ color, size }) => <AntDesign name="home-outline" size={size} color={color} />}
    label="WatchLive"
    onPress={() => {props.navigation.navigate("WatchLive")}}
    />
    <DrawerItem
    icon={({ color, size }) => <AntDesign name="home-outline" size={size} color={color} />}
    label="Settings"
    onPress={() => {props.navigation.navigate("Settings")}}
    /> */}
    </DrawerContentScrollView>
</View>
  )
}


const styles=StyleSheet.create({
  
    ImageContainer: {
      backgroundColor: 'white',
      borderRadius: 300,
      borderWidth:2,
      overflow: 'hidden',
      width: 100,
      height: 100,
    marginTop:50,
    marginBottom:5,
    //   borderColor: Colors.primary500,
    //   shadowColor: Colors.primary500,
    //   shadowOffset: {width: 10, height: 10},
    //   shadowOpacity: 0,
    //   elevation: 5,
      marginHorizontal:90
    },
    img: {
      width: '100%',
      height: '100%',
    },
    back:{
      marginBottom:10
    },
    player:{
      width:70,
      height:70,
      borderWidth:2,
      backgroundColor:"white",
      borderColor:"white",
      borderRadius:300,padding:20
    }
  })