import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import Routes from './Routes'
import AppLoader from '../components/AppLoader'
import ToastManager, { Toast } from 'toastify-react-native'

const AppProvider = () => {
  return (
    <Provider store={store} style={{flex:1}}>
    <ToastManager/>
    <AppLoader/>
    <Routes/>

    </Provider>
  )
}

export default AppProvider

const styles = StyleSheet.create({})