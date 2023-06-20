import { StyleSheet, Text, Touchable, View ,TouchableOpacity, SafeAreaView, ImageBackground} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';
import { checkUserToken } from '../../../redux/reducers/userReducer';
import Header from './components/Header';
import Movies from './components/Movies';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const {cartArray}=useSelector((state)=>state.cart)
    const {userToken}=useSelector((state)=>state.user)
    const dispatch=useDispatch()
   const logoutMethod=()=>{
    signOut(auth)
  .then(() => {
    // alert('User is being signout')
    dispatch(checkUserToken(null))
    // code for redirect user to Log-in page
    // ...
  })
  .catch((error) => {
    alert(error);
  });

    }
  return (
    <SafeAreaView style={{backgroundColor:"#f0f0f0"}}>
    {/* <Header/> */}
    <Movies/>



    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})