import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
    <Text>killer queen bite to dust</Text>
    </View>
  );
}
export default Home
const styles=StyleSheet.create({
  container:{
    flex:1
  }
})