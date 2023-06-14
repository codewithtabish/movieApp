import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
// import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import CheckBox from 'react-native-check-box'
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const [focused, setfocused] = useState(false)
  const [changeTop, setchangeTop] = useState(170)
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const navi=useNavigation()
  useEffect(() => {
      if(focused){

          setchangeTop(40)

      }

  }, [focused])
const handleChaning=()=>{
  setchangeTop(170)
  setfocused(false)

}
  return (
    <>

    <View style={{
    left:0,right:0,
    padding:10,
    backgroundColor:"#483f8e",
    flex:1}}>
    <Text style={{fontSize:26,fontWeight:"bold",
    color:"white",marginBottom:40,textAlign:"center",
    marginTop:80}}>SignIn</Text>


    </View>
    <View style={{backgroundColor:"white",position:"absolute",

    bottom:0,zIndex:88,padding:15,left:0,right:0,borderTopLeftRadius:50,
    borderTopRightRadius:50,top:170}}>
       <View style={{marginVertical:10,flexDirection:"column",gap:12}}>
    <View style={{padding:10,backgroundColor:"#ccc",borderRadius:15,elevation:5}}>
        <TextInput
            placeholder='Enter Your Email here'
            placeholderTextColor={'white'}
            onFocus={()=>setfocused(!focused)}

        />
    </View>
    <View style={{padding:10,backgroundColor:"#ccc",borderRadius:15,elevation:5}}>
        <TextInput
            placeholder='Enter Your Password here'
            placeholderTextColor={'white'}
            onFocus={()=>setfocused(!focused)}

        />
    </View>

   </View>
   <View style={{flexDirection:"row",gap:20,marginVertical:12,
   marginHorizontal:10}}>

  <CheckBox
    disabled={true}
    // value={toggleCheckBox}
    // onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
  <Text style={{color:"red"}}>I agree with the Terms and Condition</Text>

   </View>

   {/* second  */}
   <TouchableOpacity style={{backgroundColor:"gray",padding:10,borderRadius:12,
   marginHorizontal:40,marginBottom:12}}>
    <TouchableOpacity>
        <Text style={{textAlign:"center",padding:4,color:"white",
        fontWeight:"bold"}}>SignIn</Text>
    </TouchableOpacity>
   </TouchableOpacity>

   <View style={{flexDirection:"row",alignItems:"center",marginHorizontal:30,gap:30}}>
    <View style={{borderWidth:.6,borderColor:"gray",flex:1}}></View>
    <Text style={{fontWeight:"bold"}}>or</Text>
    <View style={{borderWidth:.6,borderColor:"gray",flex:1}}></View>


   </View>



      <View style={{marginVertical:10}}>
   <TouchableOpacity style={{backgroundColor:"#30477a",alignItems:"center",flexDirection:"row",

padding:3,borderRadius:15,marginBottom:15,elevation:10,shadowColor:"gray"}}>
    <View style={{backgroundColor:"#263962",
    width:40,height:40,borderRadius:30,flexDirection:"row",
    justifyContent:"center",alignItems:"center",elevation:30,
    borderWidth:.5,borderColor:"white",padding:2}}>
    <Feather name="facebook" size={24} color="white" />

    </View>
    <Text style={{color:"white",fontWeight:"bold",
    flex:1,justifyContent:"center",
    flexDirection:"row",alignItems:"center",textAlign:"center"}}>Sign in with Facebook</Text>
</TouchableOpacity>
<TouchableOpacity style={{backgroundColor:"#ffd7e9",alignItems:"center",flexDirection:"row",
padding:3,borderRadius:15,marginBottom:15,elevation:10,shadowColor:"gray"}}>
    <View style={{backgroundColor:"#de5d83",
    width:40,height:40,borderRadius:30,flexDirection:"row",
    justifyContent:"center",alignItems:"center",elevation:30,
    borderWidth:.5,borderColor:"white",padding:2}}>
    <Feather name="twitter" size={24} color="white" />

    </View>
    <Text style={{color:"white",fontWeight:"bold",
    flex:1,justifyContent:"center",
    flexDirection:"row",alignItems:"center",textAlign:"center"}}>Sign in with Twitter</Text>
</TouchableOpacity>
<TouchableOpacity style={{backgroundColor:"#FF8C00",alignItems:"center",flexDirection:"row",
padding:3,borderRadius:15,marginBottom:15,elevation:10,shadowColor:"gray"}}>
    <View style={{backgroundColor:"#FF5E0E",
    width:40,height:40,borderRadius:30,flexDirection:"row",
    justifyContent:"center",alignItems:"center",elevation:30,
    borderWidth:.5,borderColor:"white",padding:2}}>
    <Entypo name="google-" size={24} color="white" />

    </View>
    <Text style={{color:"white",fontWeight:"bold",
    flex:1,justifyContent:"center",
    flexDirection:"row",alignItems:"center",textAlign:"center"}}>Sign in with Google</Text>
</TouchableOpacity>
   </View>


   <View style={{flexDirection:"row",alignItems:"center",gap:12,
   justifyContent:"flex-end",marginRight:20}}>
    <Text>Don`t have an Account !</Text>
    <TouchableOpacity style={{color:"red",fontWeight:"bold"}}
    onPress={()=>navi.navigate('Register')}>
    <Text style={{color:"red",fontWeight:"bold"}}>SignUp</Text>
    </TouchableOpacity>
   </View>






    </View>
    </>
  )
}

export default SignIn

const styles = StyleSheet.create({})