import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SignUp from './Screens/SignUp/SignUp';
import SignIn from './Screens/SignIn/SignIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Register" component={SignUp} options={{
          headerShown:false

        }} />
        <Stack.Screen name="Login"
        component={SignIn}
        options={{headerShown:false}}
        />
      </Stack.Navigator>
      </NavigationContainer>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})