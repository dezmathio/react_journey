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
import AlignItemsBasics from './components/AlignItemsBasics'
import PizzaTranslator from './components/PizzaTranslator'
import ButtonBasics from './components/ButtonBasics'
import Touchables from './components/Touchables'
import IScrolledDownAndWhatHappenedNextShockedMe from './components/IScrolledDownAndWhatHappenedNextShockedMe'
import FlatListBasics from './components/FlatList'
import SectionListBasics from './components/SectionList'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionListBasics />
      </View>
    );
  }
}

//<HelloWorldApp />
//<LotsOfGreetings />
//<Bananas />
//<BlinkApp />
//<LotsOfStyles />
//<FixedDimensionsBasics />
//<FlexDimensionsBasics />
//<FlexDirectionBasics />
//<JustifyContentBasics />
//<AlignItemsBasics />
//<PizzaTranslator />
//<ButtonBasics />
//<Touchables />
//<IScrolledDownAndWhatHappenedNextShockedMe />
//<FlatListBasics />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
