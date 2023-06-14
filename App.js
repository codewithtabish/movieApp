import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigator from './app/Auth/AuthNavigator';
import MainNavigator from './app/Main/MainNavigator';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';
import AppProvider from './app/redux/AppProvider';

export default function App() {
  return (
    <>
    <AppProvider/>
    {/* <Provider store={store}>

    <MainNavigator/>
    </Provider> */}
    {/* <AuthNavigator/> */}

    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
