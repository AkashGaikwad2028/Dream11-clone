import React,{useEffect} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import CustomeNavigationBar from '../../Constant/CustomeNavigationBar'
import DrawerNavigator from '../../Constant/DrawerNavigator'
import { DrawerActions } from '@react-navigation/native'

export default function Home({navigation}) {

const ToggelDrawer=()=>{
  console.log("toggel")
  navigation.dispatch(DrawerActions.openDrawer());
}

  return (
    <>
    <CustomeNavigationBar onPress={ToggelDrawer}/>
    </>
  )
}

const styles=StyleSheet.create({
  drawer:{
    position:"absolute"
  }
})
