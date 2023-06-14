import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';
import { useSelector } from 'react-redux';

const AppLoader = () => {
  const {appLoaderBoolean} =useSelector((state)=>state.App)

   return appLoaderBoolean?
       <View style={{position:"absolute",zIndex:88,
    top:'40%',flex:1,justifyContent:"center",width:"100%",alignItems:"center"}}>
     <Lottie
     loop={true}
     autoPlay={true}
     style={{width:140,height:140,marginBottom:40}}
      source={require('../../assets/anim/loading.json')}
    />


    </View>
    :null


}

export default AppLoader

const styles = StyleSheet.create({})