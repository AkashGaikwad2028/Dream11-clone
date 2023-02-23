import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import auth from "@react-native-firebase/auth"

export default function LoginScreen({navigation}) {

  const [Email,setEmail]=useState("")
  const [Password,setPassword]=useState("")
  const [message,setmessage]=useState("")


  const handelLogin= async()=>{
    try{
  // console.log("email=>",formValue.Email,"paswword=>",formValue.Password)
  const isUserLogin=await auth().signInWithEmailAndPassword(Email,Password );
  console.log("subscriber=>>>>>>",isUserLogin) 
  navigation.navigate("Home")
  }
  catch(err){
   console.log(err)
   setmessage(err.message)
    }
  }
  

  return (
    // <ScrollView style={{flex:1}}>
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        marginTop: 15,
      }}>
      <View style={styles.MainCardContainer}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 30,
            }}>
            <Text style={styles.icon}>Facebook</Text>
            <Text style={styles.icon}>Googel</Text>
          </View>
        </View>
        <Text style={{textAlign: 'center', fontWeight: 'bold', marginTop: 10}}>
          or
        </Text>
        <TextInput style={styles.Texinput} placeholder="User name" onChangeText={(text)=>setEmail(text)} />
        <TextInput style={styles.Texinput} placeholder="Password"   onChangeText={(text)=>setPassword(text)} />
        <Text style={{marginHorizontal: 15, fontSize: 13, color: 'black'}}>
         {message}
        </Text>
        <TouchableOpacity style={styles.SubmitBtn} onPress={()=>handelLogin()}>
          <Text
            style={{
              textAlign: 'center',
              color: '#595959',
              fontSize: 14.5,
              fontWeight: 'bold',
              letterSpacing: 0.5,
            }}>
            LOG IN
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom:20}}><Text style={{color:"black",textAlign:"center",fontSize:18}} onPress={()=>navigation.navigate("Register & Play")}>If You Are New ?</Text></View>
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  MainCardContainer: {
    backgroundColor: '#f2f2f2',
    marginHorizontal: 10,
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 10,
  },
  Texinput: {
    backgroundColor: '#e6e6e6',
    marginHorizontal: 10,
    marginTop: 15,
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  SubmitBtn: {
    backgroundColor: '#cccccc',
    paddingVertical: 16,
    marginHorizontal: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  icon: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 50,
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    borderRadius:5,
    fontWeight:"bold"
  },
});
