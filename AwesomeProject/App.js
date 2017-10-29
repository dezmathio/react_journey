import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LotsOfGreetings from './components/Greeting'
import Bananas from './components/Bananas'
import HelloWorldApp from './components/HelloWorld'
import BlinkApp from './components/Blink'
import LotsOfStyles from './components/LotsOfStyles'
import FixedDimensionsBasics from './components/FixedDimensionsBasics'
import FlexDimensionsBasics from './components/FlexDimensionsBasics'
import FlexDirectionBasics from './components/FlexDirectionBasics'
import JustifyContentBasics from './components/JustifyContentBasics'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HelloWorldApp />
        <LotsOfGreetings />
        <Bananas />
        <BlinkApp />
        <LotsOfStyles />
        <FixedDimensionsBasics />
        <FlexDimensionsBasics />
        <FlexDirectionBasics />
        <JustifyContentBasics />
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
