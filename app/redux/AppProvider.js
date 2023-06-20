import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import Routes from './Routes'
import AppLoader from '../components/AppLoader'
import ToastManager, { Toast } from 'toastify-react-native'
import { StripeProvider } from '@stripe/stripe-react-native'

const AppProvider = () => {
  return (
   <StripeProvider publishableKey='pk_test_51NKSD7Eh057yBlclpeIYc4IA92vo4IM9erzeMBOINju88hQ9xtAWtnkHruqOtkLAJ1rhsS2qxoa6MY20Zg4ZXwFj00JrxYHqV9'>
     <Provider store={store} style={{flex:1}}>
    <ToastManager/>
    <AppLoader/>
    <Routes/>

    </Provider>
   </StripeProvider>
  )
}

export default AppProvider

const styles = StyleSheet.create({})