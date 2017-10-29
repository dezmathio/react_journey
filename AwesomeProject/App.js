import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LotsOfGreetings from './components/Greeting'
import Bananas from './components/Bananas'
import HelloWorldApp from './components/HelloWorld'
import BlinkApp from './components/Blink'
import LotsOfStyles from './components/LotsOfStyles'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HelloWorldApp />
        <LotsOfGreetings />
        <Bananas />
        <BlinkApp />
        <LotsOfStyles />
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
