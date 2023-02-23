import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
// import { ScrollView } from 'react-native/Libraries/Components/ScrollView/ScrollView';
// import { StyleSheet } from 'react-native/Libraries/StyleSheet/StyleSheet'
import auth from "@react-native-firebase/auth"

export default function RegisterScreen({navigation}) {
  // const initialState={Email:'',Password:''}
// const [formValue,setformvalue]=useState(initialState)
const [Email,setEmail]=useState("")
const [Password,setPassword]=useState("")
const[message,setmessage]=useState("")

console.log(Email,Password)

const handelLogin= async()=>{
  try{
// console.log("email=>",formValue.Email,"paswword=>",formValue.Password)
const subscriber =await auth().createUserWithEmailAndPassword(Email,Password );
console.log("subscriber=>>>>>>",subscriber) 
navigation.navigate("LOG IN")
}
catch(err){
 console.log(err)
 setmessage(err.message)
  }
}


// const HandelchangeEmail=(text)=>{
// // setformvalue(prevalue=>{
// //   return{
// //     ...prevalue,
// //     Email:text
// //   }
// // })
// setEmail(text)
// }

// const HandelchangePassword=(text)=>{
//   // setformvalue(prevalue=>{
//   //   return{
//   //     ...prevalue,
//   //     Password:text
//   //   }
//   // })
//   setPassword(text)
//   }
// console.log("message",message)
// console.log("formValue",formValue)

  return (
    // <ScrollView style={{flex:1}}>
    <View style={{ flexDirection:"column",justifyContent:"space-between",flex:1,marginTop:15}} >
        <View style={styles.MainCardContainer}>
        <TextInput style={styles.Texinput} placeholder="Email" onChangeText={(text)=>setEmail(text)} value={Email}/>
        <TextInput style={styles.Texinput} placeholder="Password"onChangeText={(text)=>setPassword(text)} value={Password} />
        <Text style={{marginHorizontal: 15, fontSize: 13, color: 'red'}}>
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
            REGISTER
          </Text>
        </TouchableOpacity>
        <View>
        </View>
        <Text style={{textAlign: 'center', marginVertical:30,color:"black"}}>
          By registering, I agree to Dream11's T&Cs
        </Text>
      </View>
      <View style={{marginBottom:15}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:10}}>
          <Text>Have a referral code ?</Text>
          <Text>Already a user ?</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:10}}>
          <Text style={{color:"black"}}>Enter Code</Text>
          <Text style={{color:"black"}}  onPress={()=>{navigation.navigate("LOG IN")}}>Log in</Text>
        </View>
      </View>
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
    borderRadius: 5,
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
  },
});
