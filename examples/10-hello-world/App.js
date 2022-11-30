import { StyleSheet, Text, View } from 'react-native';
import Person from "./Person";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello, World!</Text>
      <Person />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    fontSize: 48
  }
});
