import React, { useState,useEffect } from 'react'
import {View,Image} from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SiginInScreen from './src/Screens/LoginScreen/SiginInScreen';
import RegisterScreen from './src/Screens/LoginScreen/RegisterScreen';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import Home from './src/Screens/PrivateScreens/Home';
import Splashscreen from './src/Screens/Splashscreen';
import DrawerNavigator from './src/Constant/DrawerNavigator';
import CustomHeaderImage from './src/Constant/CustomHeaderImage';


const Stack = createNativeStackNavigator();

export default function App() {
 

  
  
  return (
  <NavigationContainer >
<Stack.Navigator initialRouteName="DrawerNavigator">
<Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{headerShown: false}} />
<Stack.Screen name="Splashscreen" 
       component={Splashscreen}
       options={{headerTintColor:"white",  headerShown: false, headerStyle: {
         backgroundColor: 'red',
       },
       headerTitleStyle:{
         fontSize:16,
         fontWeight:"bold",
       }
     }}
        />
 <Stack.Screen name="SiginIn" component={SiginInScreen} options={{headerShown: false}} />
 
 <Stack.Screen name="Register & Play" 
 component={RegisterScreen}
 options={{headerTintColor:"white", headerStyle: {
   backgroundColor: 'red',
 },
 headerTitleStyle:{
   fontSize:16,
   fontWeight:"bold",
 }
}}
  />
   
       <Stack.Screen name="LOG IN" 
       component={LoginScreen}
       options={{headerTintColor:"white", headerStyle: {
         backgroundColor: 'red',
       },
       headerTitleStyle:{
         fontSize:16,
         fontWeight:"bold",
       }
     }}
        />
    
<Stack.Screen name="Home" 
    component={Home}
    options={{headerTintColor:"white", 
   headerBackVisible:true,
    headerStyle: {
      backgroundColor: 'red',
    },
    headerTitleStyle: {
      fontSize:25,
      fontWeight:"bold"
    },
    headerTitleAlign: 'center',
  headerLeft:()=>{
   <CustomHeaderImage/>
  }
  }}
     />
</Stack.Navigator>
  </NavigationContainer>
  )
}
