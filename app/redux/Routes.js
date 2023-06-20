import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AuthNavigator from '../Auth/AuthNavigator'
import MainNavigator from '../Main/MainNavigator'
import {  onAuthStateChanged } from "firebase/auth";
// import { auth } from '../firebase'
import { checkUserToken } from './reducers/userReducer'
import { auth } from '../firebase'
// auth


const Routes = () => {
    const dispatch=useDispatch()

    useEffect(() => {
        checkUser()

    }, [userToken])
    const checkUser=()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              dispatch(checkUserToken(uid))

              // ...
            } else {
              // User is signed out
              // ...
            }
          });
    }

    const {userToken}=useSelector((state)=>state.user)

    return <>{userToken ? <MainNavigator /> : <AuthNavigator />}</>;
      //  return <MainNavigator/>

//         {
//     userNam==="zain"?(
//         <AuthNavigator/>
//     )

//     :(
//         <MainNavigator/>
//     )

//    }



}

export default Routes

const styles = StyleSheet.create({})
