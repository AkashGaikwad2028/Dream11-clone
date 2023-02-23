import React,{useEffect} from 'react'
import {View,Text,StyleSheet,FlatList,Image} from 'react-native'
import CustomeNavigationBar from '../../Constant/CustomeNavigationBar'
import { DrawerActions } from '@react-navigation/native'
import Horizontalscroll from '../../Data/Horizontalscroll'
import MatchCards from '../../Componenets/MatchCards'
import DataCard from '../../Data/DataCard'

export default function Home({navigation}) {

const ToggelDrawer=()=>{
  console.log("toggel")
  navigation.dispatch(DrawerActions.openDrawer());
}

  return (
    <>
    <CustomeNavigationBar onPress={ToggelDrawer}/>
    <View style={styles.container}>
    <FlatList
    data={Horizontalscroll}
    showsHorizontalScrollIndicator={false}
    horizontal={true}
    renderItem={({item}) => (
       <View style={{paddingRight:16,flexDirection:"column",alignItems:"center",paddingHorizontal:10}}>
       <Image
       resizeMode="contain"
        style={{width:25,height:25}}
        source={require("./../../Images/ball.png")}
      />
        <Text style={{fontSize:18}}>{item.name}</Text>
       </View>
      )}
    />
     </View>
     <Text style={{color:"black",fontSize:22,fontWeight:"bold",marginHorizontal:15,marginVertical:15}}>Upcoming Matches</Text>
     <FlatList
    data={DataCard}
    showsHorizontalScrollIndicator={false}
    renderItem={(item)=><MatchCards item={item}/>}
    keyExtractor={(item)=>{item.id}}
    />
    </>
  )
}

const styles=StyleSheet.create({
  drawer:{
    position:"absolute"
  },
  container:{
    paddingVertical:10,flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:"#fff",
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,  
    elevation:20
  }
})
