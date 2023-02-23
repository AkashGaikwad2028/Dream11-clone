import React from 'react'
import {View,Text, Image,StyleSheet,TouchableOpacity} from "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer'
import FancodeShop from '../Screens/PrivateScreens/Drawer/FancodeShop'
import ChampionClub from '../Screens/PrivateScreens/Drawer/ChampionsClub'
import Collect from '../Screens/PrivateScreens/Drawer/Collect'
import FindPeopel from '../Screens/PrivateScreens/Drawer/FindPeopel'
import HelpSupports from '../Screens/PrivateScreens/Drawer/HelpSupports'
import HowToPlay from '../Screens/PrivateScreens/Drawer/HowToPlay'
import More from '../Screens/PrivateScreens/Drawer/More'
import WatchLive from '../Screens/PrivateScreens/Drawer/WatchLive'
import Settings from '../Screens/PrivateScreens/Drawer/Settings'
import Balance from '../Screens/PrivateScreens/Drawer/Balance'
import CustomeDrwer from './CustomeDrwer'
import AntDesign from "react-native-vector-icons/AntDesign"
import Home from '../Screens/PrivateScreens/Home'
import Ionicons from "react-native-vector-icons/Ionicons"
import CustomeNavigationBar from './CustomeNavigationBar'
import CustomHeaderImage from './CustomHeaderImage'


const Drawer =createDrawerNavigator()

export default function DrawerNavigator() {
  return (

 <Drawer.Navigator 
 drawerPosition="right"
 drawerContent={props=> <CustomeDrwer {...props}/>}
screenOptions={{
  headerShown: false,
  backgroundColor:"red"
}}
initialRouteName="Home"
 >
   <Drawer.Screen name="Home" component={Home} 
      options={{
        margin:10,
        headerShown:false,
        headerStyle: {
            backgroundColor: '#f4511e',
          },  
     }}/>

     <Drawer.Screen name="Balance" component={Balance} 
      options={{
        margin:10,
        drawerIcon: ({focused}) => (
          <Image source={require("../Images/wallet.png")}/>
        ),
        headerShown:false,
        headerStyle: {
            backgroundColor: '#f4511e',
          },  
     }}/>
    <Drawer.Screen name="FancodeShop" component={FancodeShop}
    options={{
      drawerIcon: ({focused}) => (
       <Image source={require("../Images/shop.png")} style={{width:30,height:30}}/>
     ),
     headerShown:false,
      headerStyle: {
          backgroundColor: '#f4511e',
        },
        
   }} 
    />
    <Drawer.Screen name="Collect" component={Collect}
    options={{
      drawerIcon: ({focused}) => (
        <Image source={require("../Images/cash.png")} style={{width:30,height:30}}/>
      ),
      headerShown:false,
      headerStyle: {
          backgroundColor: '#f4511e',
        },
        
   }}
    />
    <Drawer.Screen name="ChampionClub" component={ChampionClub}
    options={{
      drawerIcon: ({focused}) => (
        <Image source={require("../Images/jersey.png")} style={{width:30,height:30}}/>
      ),
      headerShown:false,
      headerStyle: {
          backgroundColor: '#f4511e',
        }, 
   }}
    />
    <Drawer.Screen name="FindPeopel" component={FindPeopel}
    options={{
      drawerIcon: ({focused}) => (
        <Image source={require("../Images/search.png")} style={{width:30,height:30}}/>
      ),
      headerShown:false,
      headerStyle: {
          backgroundColor: '#f4511e',
        },    
   }}
    />
    <Drawer.Screen name="HelpSupports" component={HelpSupports}
    options={{
      drawerIcon: ({focused}) => (
        <Image source={require("../Images/questions.png")} style={{width:30,height:30}}/>
      ),
      headerShown:false,
      headerStyle: {
          backgroundColor: '#f4511e',
        }, 
   }}
    />
    <Drawer.Screen name="HowToPlay" component={HowToPlay}
    options={{
      drawerIcon: ({focused}) => (
        <Image source={require("../Images/joistick.png")} style={{width:30,height:30}}/>
      ),
      headerShown:false,
      headerStyle: {
          backgroundColor: '#f4511e',
        },  
   }}
    />
    <Drawer.Screen name="More" component={More}
    options={{
      drawerIcon: ({focused}) => (
        <Image source={require("../Images/more.png")} style={{width:30,height:30}}/>
      ),
      headerShown:false,
      headerStyle: {
          backgroundColor: '#f4511e',
        },
        
   }}
    />
    <Drawer.Screen name="WatchLive" component={WatchLive}
    options={{
      drawerIcon: ({focused}) => (
        <Image source={require("../Images/tv.png")} style={{width:30,height:30}}/>
      ),
      headerShown:false,
      headerStyle: {
          backgroundColor: '#f4511e',
        },
        
   }}
    />
    <Drawer.Screen name="Settings" component={Settings}
    options={{
      drawerIcon: ({focused}) => (
        <Image source={require("../Images/settings.png")} style={{width:30,height:30}}/>
      ),
      headerShown:false,
      headerStyle: {
          backgroundColor: '#f4511e',
        },
   }}
    />
 </Drawer.Navigator>

  )
}


