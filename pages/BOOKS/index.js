import { View,Text,StyleSheet } from 'react-native';

export function BOOKS() {
  return (
    <View style={styles.container}>
    <Text>book of pagina</Text>
    </View>
  );
}
export default BOOKS;
const styles=StyleSheet.create({
  container:{
    flex:1
  }
})