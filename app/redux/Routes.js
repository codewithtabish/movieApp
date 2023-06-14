import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import AuthNavigator from '../Auth/AuthNavigator'
import MainNavigator from '../Main/MainNavigator'

const Routes = () => {
    const {userName}=useSelector((state)=>state.user)
    return <>{!userName ? <MainNavigator /> : <AuthNavigator />}</>;


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