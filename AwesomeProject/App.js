import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LotsOfGreetings from './components/Greeting'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <LotsOfGreetings />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
