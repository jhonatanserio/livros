import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native-web';
import {NavegationContainer}from '@react-navegation-native';
import BOOKS from './pages/BOOKS';import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home';



const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavegationContainer style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name='ze' component={BOOKS}> </Tab.Screen>
        <Tab.Screen name='maria' component={Home}> </Tab.Screen>
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavegationContainer>
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
