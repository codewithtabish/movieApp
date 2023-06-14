import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/Home/HomeScreen';

const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown:false

        }} />
      
      </Stack.Navigator>
      </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})